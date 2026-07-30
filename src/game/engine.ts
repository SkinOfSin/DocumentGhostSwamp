/**
 * Document Ghost Swamp — canvas game engine
 */

import type {
  CompanionState,
  Creature,
  CreatureDef,
  CreatureId,
  GamePhase,
  GameSnapshot,
  LightningBug,
  Particle,
  PlaceMarker,
  PlayMode,
  Prop,
  PropKind,
  TimePhase,
  Toast,
  WorldPickup,
} from "./types";
import { CREATURE_DEFS } from "./creatures";
import { GRIMOIRE_PAGES, NIGHT_CLIMAX, SIGHTING_LINES } from "./lore";
import {
  PLACE_DEFS,
  PLACE_SLOTS,
  lanternMix,
  placeById,
  placeByProp,
  type PlaceDef,
  type SpecimenEffect,
} from "./places";
import { HOLLOW, HOLLOW_CREATURE_IDS, inHollow, zoneAt } from "./zones";
import {
  disposeAudio,
  isMuted,
  playBird,
  playBullfrog,
  playCabinApproach,
  playCanoe,
  playCicada,
  playCreatureCall,
  playDocumentChime,
  playFireflyTick,
  playHeartSkip,
  playOwl,
  playPageFind,
  playPierBoard,
  playSoftLightning,
  playSpecimenCollect,
  playWadestep,
  playWaterEnter,
  playWoodCreak,
  setMusicPhase,
  startHollowWind,
  startRain,
  stopHollowWind,
  stopRain,
  toggleMute as audioToggleMute,
  unlockAudio,
} from "./audio";

const WORLD_W = 2400;
const WORLD_H = 1800;
const MASK_SCALE = 8;
const MASK_W = Math.ceil(WORLD_W / MASK_SCALE);
const MASK_H = Math.ceil(WORLD_H / MASK_SCALE);
const PLAYER_R = 16;
const PLAYER_SPEED = 118;
const MAX_HEALTH = 100;
const DAY_DURATION = 520;
const DOC_HOLD = 1.55;

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function dist(ax: number, ay: number, bx: number, by: number) {
  return Math.hypot(ax - bx, ay - by);
}
function rand(a: number, b: number) {
  return a + Math.random() * (b - a);
}
function timePhaseFromProgress(p: number): TimePhase {
  if (p < 0.08) return "dawn";
  if (p < 0.16) return "sunrise";
  if (p < 0.38) return "morning";
  if (p < 0.55) return "afternoon";
  if (p < 0.68) return "evening";
  if (p < 0.78) return "dusk";
  return "night";
}
function timeLabel(p: number): string {
  const hours = 5.5 + p * 17;
  const h = Math.floor(hours) % 24;
  const m = Math.floor((hours % 1) * 60);
  const am = h < 12;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${am ? "AM" : "PM"}`;
}

function propSprite(kind: PropKind): string {
  const map: Partial<Record<PropKind, string>> = {
    lilypad: "/sprites/prop-1.png",
    lily: "/sprites/prop-2.png",
    stump: "/sprites/prop-3.png",
    moss: "/sprites/moss-hang.png",
    post: "/sprites/prop-4.png",
    cypress: "/sprites/cypress-1.png",
    cypressMoss: "/sprites/cypress-moss.png",
    tupelo: "/sprites/tupelo.png",
    knees: "/sprites/knees.png",
    pine: "/sprites/pine.png",
    maple: "/sprites/maple.png",
    pier: "/sprites/pier.png",
    pierLantern: "/sprites/pier-lantern.png",
    pierBroken: "/sprites/pier-broken.png",
    pierNets: "/sprites/pier-nets.png",
    pierDock: "/sprites/pier-dock.png",
    canoe: "/sprites/canoe.png",
    cabin: "/sprites/cabin.png",
    cabinTin: "/sprites/cabin-tin.png",
    cabinSunk: "/sprites/cabin-sunk.png",
    cabinBoarded: "/sprites/cabin-boarded.png",
    cabinRocker: "/sprites/cabin-rocker.png",
    mushrooms: "/sprites/mushrooms.png",
    duckweed: "/sprites/duckweed.png",
    algae: "/sprites/algae.png",
    duckweedMat: "/sprites/duckweed-mat.png",
    algaeStrand: "/sprites/algae-strand.png",
    mossHang: "/sprites/moss-hang.png",
    scum: "/sprites/scum.png",
    cross: "/sprites/prop-cross.png",
    headstone: "/sprites/prop-headstone.png",
    noHunting: "/sprites/prop-no-hunting.png",
    barrel: "/sprites/prop-barrel.png",
    tire: "/sprites/prop-tire.png",
    trap: "/sprites/prop-trap.png",
    nest: "/sprites/prop-nest.png",
    bootsStump: "/sprites/prop-boots-stump.png",
    skiff: "/sprites/prop-skiff.png",
    railTies: "/sprites/prop-rail-ties.png",
    swing: "/sprites/prop-swing.png",
    doghouse: "/sprites/prop-doghouse.png",
    mailbox: "/sprites/prop-mailbox.png",
    floatBottle: "/sprites/prop-float-bottle.png",
    blueLight: "/sprites/prop-blue-light.png",
    bonePile: "/sprites/prop-bone-pile.png",
    ribs: "/sprites/prop-bone-pile.png",
    clothHang: "/sprites/moss-hang.png",
  };
  return map[kind] ?? "/sprites/prop-1.png";
}

function propMeta(kind: PropKind): {
  collides: boolean;
  radius: number;
  tall: boolean;
  scale: number;
} {
  switch (kind) {
    case "cypress":
    case "cypressMoss":
      return { collides: true, radius: 22, tall: true, scale: 1.05 };
    case "tupelo":
      return { collides: true, radius: 20, tall: true, scale: 1 };
    case "pine":
    case "maple":
      return { collides: true, radius: 18, tall: true, scale: 0.95 };
    case "cabin":
    case "cabinTin":
    case "cabinSunk":
    case "cabinBoarded":
    case "cabinRocker":
      return { collides: true, radius: 44, tall: true, scale: 1.1 };
    case "pier":
    case "pierNets":
    case "pierLantern":
    case "pierBroken":
    case "pierDock":
      return { collides: false, radius: 34, tall: false, scale: 1 };
    case "canoe":
    case "skiff":
      return { collides: false, radius: 28, tall: false, scale: 0.95 };
    case "knees":
    case "stump":
    case "barrel":
    case "tire":
    case "trap":
      return { collides: true, radius: 14, tall: false, scale: 0.8 };
    case "mossHang":
    case "moss":
      return { collides: false, radius: 12, tall: true, scale: 0.85 };
    default:
      return { collides: false, radius: 12, tall: false, scale: 0.7 };
  }
}

interface FogBand {
  x: number;
  y: number;
  w: number;
  h: number;
  phase: number;
}

interface ActiveGift {
  placeId: string;
  effect: SpecimenEffect;
  life: number;
  maxLife: number;
  label: string;
  color: [number, number, number];
}

export class BayouEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dpr = 1;
  private viewW = 800;
  private viewH = 600;
  private camX = 0;
  private camY = 0;

  private running = false;
  private raf = 0;
  private lastT = 0;
  private loaded = false;

  private phase: GamePhase = "title";
  private dayProgress = 0.05;
  private health = MAX_HEALTH;
  private shake = 0;
  private muted = false;

  private playerX = WORLD_W / 2;
  private playerY = WORLD_H / 2;
  private playerFacing = 0;
  private playerBob = 0;
  private keys = new Set<string>();
  private touchMX = 0;
  private touchMY = 0;
  private touchActive = false;
  private wasInWater = false;
  private stepTimer = 0;
  private nearCabinSfx = false;
  private nearCanoeSfx = false;
  private nearPierSfx = false;
  private fireflyTickCd = 0;
  private frogBurstCd = 0;
  private creatureCallCd = 0;
  private ambienceTimer = 0.4;
  private lastLantern: [number, number, number] = [255, 200, 120];

  private landMask = new Float32Array(MASK_W * MASK_H);
  private depthMask = new Float32Array(MASK_W * MASK_H);

  private props: Prop[] = [];
  private creatures: Creature[] = [];
  private pickups: WorldPickup[] = [];
  private particles: Particle[] = [];
  private bugs: LightningBug[] = [];
  private fogBands: FogBand[] = [];
  private companions: CompanionState[] = [];

  private documented = new Set<CreatureId>();
  private pagesFound = new Set<string>();
  private specimens = new Set<string>();
  private placeVisited = new Map<string, boolean>();
  private placeSpecimen = new Map<string, boolean>();
  private placePositions = new Map<string, { x: number; y: number }>();
  private echoesFound = new Set<string>();

  private docCharge = 0;
  private toasts: Toast[] = [];
  private message: string | null = null;
  private sighting: string | null = null;
  private sightingCd = 0;
  private cabinNoteTitle: string | null = null;
  private cabinNoteBody: string | null = null;
  private reading = false;
  private readingTitle: string | null = null;
  private readingKind: GameSnapshot["readingKind"] = null;
  private grimoireOpen = false;
  private lastPageTitle: string | null = null;
  private lastPageBody: string | null = null;
  private pendingPlaceId: string | null = null;
  private helpOpen = false;
  private activeGift: ActiveGift | null = null;
  private rainActive = false;
  private lightningFlash = 0;
  private lightningCd = 0;
  private nightClimaxShown = false;
  private softWinShown = false;
  private wasInHollow = false;
  private spawnCooldowns = new Map<string, number>();
  private uid = 1;
  private images = new Map<string, HTMLImageElement>();
  private snapshotCb: ((s: GameSnapshot) => void) | null = null;
  private emitAcc = 0;
  private playMode: PlayMode = "wander";
  private guide: { placeId: string; title: string; x: number; y: number } | null = null;
  private endReason: string | null = null;
  private softDeadlineShown = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("2d context missing");
    this.ctx = ctx;
    this.bindKeys();
    this.buildWorld();
  }

  onSnapshot(cb: (s: GameSnapshot) => void) {
    this.snapshotCb = cb;
  }
  emit() {
    this.snapshotCb?.(this.getSnapshot());
  }

  async load() {
    const urls = new Set<string>();
    for (const c of CREATURE_DEFS) urls.add(c.sprite);
    for (const p of PLACE_DEFS) {
      urls.add(p.specimenSprite);
      urls.add(p.sketchSprite);
    }
    const kinds: PropKind[] = [
      "lilypad", "lily", "stump", "moss", "post", "cypress", "cypressMoss", "tupelo",
      "knees", "pine", "maple", "pier", "pierLantern", "pierBroken", "pierNets",
      "pierDock", "canoe", "cabin", "cabinTin", "cabinSunk", "cabinBoarded",
      "cabinRocker", "mushrooms", "duckweed", "algae", "duckweedMat", "algaeStrand",
      "mossHang", "scum", "cross", "headstone", "noHunting", "barrel", "tire",
      "trap", "nest", "bootsStump", "skiff", "railTies", "swing", "doghouse",
      "mailbox", "blueLight", "bonePile", "ribs", "clothHang",
    ];
    for (const k of kinds) urls.add(propSprite(k));
    urls.add("/sprites/dir-1.png");
    urls.add("/sprites/dir-2.png");
    urls.add("/sprites/dir-3.png");
    urls.add("/sprites/dir-4.png");
    urls.add("/sprites/lantern.png");
    urls.add("/sprites/lightning-bug.png");
    await Promise.all(
      [...urls].map(
        (src) =>
          new Promise<void>((res) => {
            const im = new Image();
            im.onload = () => {
              this.images.set(src, im);
              res();
            };
            im.onerror = () => res();
            im.src = src;
          }),
      ),
    );
    this.loaded = true;
    this.emit();
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastT = performance.now();
    const loop = (t: number) => {
      if (!this.running) return;
      const dt = Math.min(0.05, (t - this.lastT) / 1000);
      this.lastT = t;
      this.update(dt);
      this.draw();
      this.emitAcc += dt;
      if (this.emitAcc > 0.08) {
        this.emitAcc = 0;
        this.emit();
      }
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
    void unlockAudio().then(() => setMusicPhase("title"));
  }

  stop() {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.unbindKeys();
    stopHollowWind();
    disposeAudio();
    stopRain();
  }

  startGame(mode: PlayMode = "wander") {
    void unlockAudio();
    this.phase = "playing";
    this.playMode = mode;
    this.endReason = null;
    this.softDeadlineShown = false;
    this.dayProgress = 0.02;
    this.health = MAX_HEALTH;
    this.playerX = WORLD_W / 2;
    this.playerY = WORLD_H / 2 + 40;
    this.playerFacing = 0;
    this.documented.clear();
    this.pagesFound.clear();
    this.specimens.clear();
    this.echoesFound.clear();
    this.placeVisited.clear();
    this.placeSpecimen.clear();
    this.guide = null;
    for (const p of PLACE_DEFS) {
      this.placeVisited.set(p.id, false);
      this.placeSpecimen.set(p.id, false);
    }
    this.creatures = [];
    this.particles = [];
    this.companions = [];
    this.toasts = [];
    this.activeGift = null;
    this.lastLantern = [255, 200, 120];
    this.rainActive = false;
    stopRain();
    stopHollowWind();
    this.lightningFlash = 0;
    this.nightClimaxShown = false;
    this.softWinShown = false;
    this.wasInHollow = false;
    this.nearCabinSfx = false;
    this.nearCanoeSfx = false;
    this.nearPierSfx = false;
    this.fireflyTickCd = 1.5;
    this.frogBurstCd = 0.3;
    this.ambienceTimer = 0.35;
    this.sighting = null;
    this.docCharge = 0;
    this.clearReading(false);
    this.helpOpen = false;
    this.clearTouchMove();
    this.spawnCooldowns.clear();
    for (const pk of this.pickups) pk.taken = false;
    this.bugs = this.makeBugs(90);
    if (mode === "midnight") {
      this.pushToast("Until midnight — document before the blackwater claims the night.", "#c4a35a");
    } else {
      this.pushToast("Wander free — dusk will call, but the path stays open.", "#c4a35a");
    }
    setMusicPhase("dawn");
    for (const def of CREATURE_DEFS) {
      if (def.appearFrom <= 0.15) this.spawnOne(def);
    }
    this.emit();
  }

  setGuide(placeId: string | null) {
    if (!placeId) {
      this.guide = null;
      this.emit();
      return;
    }
    const pos = this.placePositions.get(placeId);
    const def = placeById(placeId);
    if (!pos || !def) return;
    this.guide = { placeId, title: def.title, x: pos.x, y: pos.y };
    this.pushToast(`Compass points toward ${def.title}`, "#c4a35a");
    this.phase = "playing";
    this.emit();
  }

  resize() {
    const parent = this.canvas.parentElement;
    const w = parent?.clientWidth || window.innerWidth;
    const h = parent?.clientHeight || window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.viewW = w;
    this.viewH = h;
    this.canvas.width = Math.floor(w * this.dpr);
    this.canvas.height = Math.floor(h * this.dpr);
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  setTouchMove(x: number, y: number, active: boolean) {
    if (!active) {
      this.clearTouchMove();
      return;
    }
    const dead = 0.14;
    const nx = Math.abs(x) < dead ? 0 : clamp(x, -1, 1);
    const ny = Math.abs(y) < dead ? 0 : clamp(y, -1, 1);
    this.touchMX = nx;
    this.touchMY = ny;
    this.touchActive = nx !== 0 || ny !== 0;
  }

  clearTouchMove() {
    this.touchMX = 0;
    this.touchMY = 0;
    this.touchActive = false;
  }

  documentNearest() {
    if (this.phase !== "playing" || this.isReading()) return;
    this.clearTouchMove();
    const c = this.findNearestDocumentable();
    if (c) {
      this.finishDocumentCreature(c);
      return;
    }
    let bestC: Creature | null = null;
    let bestD = 110;
    for (const cr of this.creatures) {
      if (!cr.alive || this.documented.has(cr.def.id)) continue;
      const d = dist(cr.x, cr.y, this.playerX, this.playerY);
      if (d < bestD) {
        bestD = d;
        bestC = cr;
      }
    }
    if (bestC) {
      this.finishDocumentCreature(bestC);
      return;
    }
    this.pushToast("Walk closer to a glowing creature to document.", "#c4a35a");
  }

  tryInteract(): boolean {
    if (this.phase !== "playing") return false;
    this.clearTouchMove();
    if (this.reading) {
      this.dismissReading();
      return true;
    }
    const near = this.findNearPlace();
    if (near) {
      this.openPlace(near);
      return true;
    }
    for (const p of this.props) {
      if (!p.placeId) continue;
      if (dist(p.x, p.y, this.playerX, this.playerY) < 95) {
        const def = placeById(p.placeId);
        if (def) {
          this.openPlace(def);
          return true;
        }
      }
    }
    this.pushToast("Walk up to a glowing cabin, pier, or canoe.", "#c4a35a");
    return false;
  }

  openJournal() {
    if (this.phase === "title") return;
    this.clearTouchMove();
    if (this.phase === "journal") this.phase = "playing";
    else if (this.phase === "playing") {
      this.phase = "journal";
      this.helpOpen = false;
    }
    this.emit();
  }

  toggleMute() {
    this.muted = audioToggleMute();
    this.emit();
    return this.muted;
  }

  dismissReading() {
    this.clearReading(true);
  }

  pressSpecimen() {
    if (!this.pendingPlaceId) return;
    const pd = placeById(this.pendingPlaceId);
    if (!pd) return;
    const already = this.specimens.has(pd.specimenId);
    if (!already) {
      this.specimens.add(pd.specimenId);
      this.placeSpecimen.set(pd.id, true);
      playSpecimenCollect();
    }
    this.echoesFound.add(pd.id);
    this.lastLantern = pd.lanternColor;
    this.activateGift(pd);
    this.pendingPlaceId = null;
    this.reading = true;
    this.readingKind = "place";
    this.readingTitle = already ? `${pd.title} · echo` : `${pd.title} · pressed`;
    this.cabinNoteTitle = this.readingTitle;
    this.cabinNoteBody = pd.echoNote;
    this.message = pd.echoNote;
    this.clearTouchMove();
    this.pushToast(
      already ? "Lantern rekindled…" : "Lantern lit — a new color rides with you…",
      `rgb(${pd.lanternColor[0]},${pd.lanternColor[1]},${pd.lanternColor[2]})`,
    );
    this.emit();
  }

  toggleHelp() {
    this.clearTouchMove();
    this.helpOpen = !this.helpOpen;
    if (this.helpOpen && this.phase === "journal") this.phase = "playing";
    this.emit();
    return this.helpOpen;
  }

  setHelpOpen(open: boolean) {
    this.clearTouchMove();
    this.helpOpen = open;
    this.emit();
  }

  isReading(): boolean {
    return (
      !!this.message ||
      !!this.cabinNoteBody ||
      this.phase === "journal" ||
      this.helpOpen ||
      this.reading
    );
  }

  getSnapshot(): GameSnapshot {
    const nearC = this.findNearestDocumentable();
    const nearPlace = this.findNearPlace();
    const playerInHollow = inHollow(this.playerX, this.playerY);
    const z = zoneAt(this.playerX, this.playerY);
    const places: PlaceMarker[] = PLACE_DEFS.map((p) => {
      const pos = this.placePositions.get(p.id) ?? { x: 0, y: 0 };
      return {
        id: p.id,
        title: p.title,
        kind: p.kind,
        x: pos.x,
        y: pos.y,
        visited: !!this.placeVisited.get(p.id),
        specimenCollected: !!this.placeSpecimen.get(p.id),
        specimenId: p.specimenId,
        specimenName: p.specimenName,
        specimenSprite: p.specimenSprite,
        sketchSprite: p.sketchSprite,
        note: p.note,
        effectLabel: p.effectLabel,
        effectDesc: p.effectDesc,
      };
    });
    let pending: GameSnapshot["pendingSpecimen"] = null;
    if (this.pendingPlaceId) {
      const pd = placeById(this.pendingPlaceId);
      if (pd) {
        pending = {
          id: pd.specimenId,
          name: pd.specimenName,
          sprite: pd.specimenSprite,
          effectLabel: pd.effectLabel,
          effectDesc: pd.effectDesc,
          alreadyPressed: this.specimens.has(pd.specimenId),
        };
      }
    }
    const colors = PLACE_DEFS.filter((p) => this.specimens.has(p.specimenId)).map(
      (p) => p.lanternColor,
    );
    // Bias mix toward last pressed color so each gift feels different
    let lr: number, lg: number, lb: number;
    if (colors.length) {
      const mix = lanternMix(colors);
      lr = Math.round(mix[0] * 0.35 + this.lastLantern[0] * 0.65);
      lg = Math.round(mix[1] * 0.35 + this.lastLantern[1] * 0.65);
      lb = Math.round(mix[2] * 0.35 + this.lastLantern[2] * 0.65);
    } else {
      [lr, lg, lb] = this.lastLantern;
    }
    return {
      phase: this.phase,
      dayProgress: this.dayProgress,
      timePhase: timePhaseFromProgress(this.dayProgress),
      timeLabel: timeLabel(this.dayProgress),
      health: this.health,
      maxHealth: MAX_HEALTH,
      documented: [...this.documented],
      totalCreatures: CREATURE_DEFS.length,
      toast: this.toasts[0]?.text ?? null,
      nearCreature: nearC?.def ?? null,
      shake: this.shake,
      message: this.message,
      docCharge: this.docCharge,
      pagesFound: [...this.pagesFound],
      totalPages: GRIMOIRE_PAGES.length,
      lantern: this.specimens.size > 0 || this.dayProgress > 0.55 || !!this.activeGift,
      muted: this.muted || isMuted(),
      nearInteract: nearPlace ? "Read" : null,
      sighting: this.sighting,
      cabinNoteTitle: this.cabinNoteTitle,
      cabinNoteBody: this.cabinNoteBody,
      grimoireOpen: this.grimoireOpen,
      lastPageTitle: this.lastPageTitle,
      lastPageBody: this.lastPageBody,
      reading: this.reading,
      readingTitle: this.readingTitle,
      readingKind: this.readingKind,
      specimens: [...this.specimens],
      totalSpecimens: PLACE_DEFS.length,
      places,
      activeEffects: this.activeGift
        ? [
            {
              id: this.activeGift.placeId,
              label: this.activeGift.label,
              remaining: this.activeGift.life,
            },
          ]
        : [],
      lanternColor: `rgb(${lr},${lg},${lb})`,
      rainActive: this.rainActive,
      pendingSpecimen: pending,
      helpOpen: this.helpOpen,
      floraDocumented: [],
      totalFlora: 0,
      nearFlora: null,
      inHollow: playerInHollow,
      zoneLabel:
        z === "hollow" ? HOLLOW.name : z === "channel" ? "Deep channel" : null,
      playMode: this.playMode,
      guide: this.guide,
      endReason: this.endReason,
    };
  }

  // ── world ─────────────────────────────────────────────────────────────

  private buildWorld() {
    this.genTerrain();
    this.props = [];
    this.placePositions.clear();
    for (const slot of PLACE_SLOTS) {
      const def = placeById(slot.id);
      if (!def) continue;
      const kind = def.propKinds[0]!;
      const meta = propMeta(kind);
      this.props.push({
        kind,
        x: slot.x,
        y: slot.y,
        scale: meta.scale,
        rot: 0,
        collides: meta.collides,
        radius: meta.radius,
        tall: meta.tall,
        placeId: def.id,
        lamp: kind === "cabinRocker" || kind === "pierLantern",
      });
      this.placePositions.set(def.id, { x: slot.x, y: slot.y });
      this.placeVisited.set(def.id, false);
      this.placeSpecimen.set(def.id, false);
    }
    this.scatterProp("cypress", 28, (x, y) => this.sampleLand(x, y) > 0.48 && !inHollow(x, y), 110);
    this.scatterProp("cypressMoss", 18, (x, y) => this.sampleLand(x, y) > 0.42, 120);
    this.scatterProp("cypressMoss", 14, (x, y) => inHollow(x, y) && this.sampleLand(x, y) > 0.35, 100);
    this.scatterProp("tupelo", 12, (x, y) => this.sampleLand(x, y) > 0.35 && this.sampleLand(x, y) < 0.7, 100);
    this.scatterProp("pine", 10, (x, y) => this.sampleLand(x, y) > 0.62, 120);
    this.scatterProp("maple", 8, (x, y) => this.sampleLand(x, y) > 0.55, 120);
    this.scatterProp("knees", 22, (x, y) => this.sampleLand(x, y) > 0.25 && this.sampleLand(x, y) < 0.55, 70);
    this.scatterProp("mossHang", 16, (x, y) => this.sampleLand(x, y) > 0.4, 90);
    this.scatterProp("mushrooms", 14, (x, y) => this.sampleLand(x, y) > 0.5, 80);
    this.scatterProp("lilypad", 40, (x, y) => this.sampleLand(x, y) < 0.35, 55);
    this.scatterProp("lily", 18, (x, y) => this.sampleLand(x, y) < 0.32, 70);
    this.scatterProp("duckweed", 30, (x, y) => this.sampleLand(x, y) < 0.4, 50);
    this.scatterProp("algae", 20, (x, y) => this.sampleLand(x, y) < 0.38, 55);
    this.scatterProp("stump", 10, (x, y) => this.sampleLand(x, y) > 0.5, 90);
    this.scatterProp("barrel", 6, (x, y) => this.sampleLand(x, y) > 0.45, 140);
    this.scatterProp("tire", 5, (x, y) => this.sampleLand(x, y) < 0.5, 140);
    this.scatterProp("trap", 6, (x, y) => this.sampleLand(x, y) < 0.55, 130);
    // bones / spooky — no floating bottles
    this.scatterProp("bonePile", 10, (x, y) => this.sampleLand(x, y) > 0.35, 100);
    this.scatterProp("ribs", 6, (x, y) => inHollow(x, y) || this.sampleLand(x, y) < 0.5, 120);
    this.scatterProp("clothHang", 8, (x, y) => this.sampleLand(x, y) > 0.4, 110);
    this.scatterProp("cross", 6, (x, y) => inHollow(x, y) || this.sampleLand(x, y) > 0.5, 140);
    this.scatterProp("headstone", 7, (x, y) => inHollow(x, y) || this.sampleLand(x, y) > 0.45, 130);
    this.scatterProp("railTies", 6, (x, y) => inHollow(x, y) || this.sampleLand(x, y) > 0.4, 150);
    this.scatterProp("noHunting", 4, (x, y) => this.sampleLand(x, y) > 0.5, 180);
    this.scatterProp("blueLight", 10, (x, y) => inHollow(x, y), 90);
    this.placeGrimoire();
    this.fogBands = Array.from({ length: 12 }, () => ({
      x: rand(0, WORLD_W),
      y: rand(0, WORLD_H),
      w: rand(180, 360),
      h: rand(40, 90),
      phase: rand(0, Math.PI * 2),
    }));
    this.bugs = this.makeBugs(90);
  }

  private scatterProp(
    kind: PropKind,
    count: number,
    ok: (x: number, y: number) => boolean,
    minDist = 80,
  ) {
    const meta = propMeta(kind);
    let placed = 0;
    let tries = 0;
    while (placed < count && tries < count * 40) {
      tries++;
      const x = rand(60, WORLD_W - 60);
      const y = rand(60, WORLD_H - 60);
      if (!ok(x, y)) continue;
      let blocked = false;
      for (const slot of PLACE_SLOTS) {
        if (dist(x, y, slot.x, slot.y) < 90) {
          blocked = true;
          break;
        }
      }
      if (blocked) continue;
      if (meta.tall) {
        for (const p of this.props) {
          if (p.tall && dist(x, y, p.x, p.y) < minDist) {
            blocked = true;
            break;
          }
        }
      }
      if (blocked) continue;
      this.props.push({
        kind,
        x,
        y,
        scale: meta.scale * rand(0.85, 1.15),
        rot: rand(-0.15, 0.15),
        collides: meta.collides,
        radius: meta.radius,
        tall: meta.tall,
        driftX: kind === "duckweed" || kind === "floatBottle" ? rand(-6, 6) : 0,
        driftY: kind === "duckweed" || kind === "floatBottle" ? rand(-4, 4) : 0,
      });
      placed++;
    }
  }

  private genTerrain() {
    for (let y = 0; y < MASK_H; y++) {
      for (let x = 0; x < MASK_W; x++) {
        const nx = x / MASK_W;
        const ny = y / MASK_H;
        const island =
          Math.sin(nx * 6.2 + 1.2) * Math.cos(ny * 5.1) * 0.35 +
          Math.sin(nx * 14) * Math.cos(ny * 11) * 0.12;
        const channel = Math.exp(-Math.pow((ny - 0.52) / 0.12, 2)) * 0.45;
        const camp = Math.exp(-((nx - 0.5) ** 2 + (ny - 0.5) ** 2) / 0.035) * 0.5;
        const hollowEdge = nx < 0.42 && ny < 0.45 ? 0.12 : 0;
        let land = 0.42 + island - channel + camp - hollowEdge;
        land = clamp(land, 0, 1);
        const depth = clamp(1 - land + channel * 0.5, 0, 1);
        this.landMask[y * MASK_W + x] = land;
        this.depthMask[y * MASK_W + x] = depth;
      }
    }
  }

  private sampleLand(wx: number, wy: number) {
    const mx = clamp(Math.floor(wx / MASK_SCALE), 0, MASK_W - 1);
    const my = clamp(Math.floor(wy / MASK_SCALE), 0, MASK_H - 1);
    return this.landMask[my * MASK_W + mx]!;
  }

  private isWater(wx: number, wy: number) {
    return this.sampleLand(wx, wy) < 0.42;
  }

  private placeGrimoire() {
    this.pickups = [];
    for (const page of GRIMOIRE_PAGES) {
      let x = rand(200, WORLD_W - 200);
      let y = rand(200, WORLD_H - 200);
      if (page.near === "water") {
        for (let i = 0; i < 40; i++) {
          x = rand(100, WORLD_W - 100);
          y = rand(100, WORLD_H - 100);
          if (this.sampleLand(x, y) < 0.4) break;
        }
      } else if (page.near === "deep" || page.near === "cabin") {
        const slot = PLACE_SLOTS[Math.floor(Math.random() * PLACE_SLOTS.length)]!;
        x = slot.x + rand(-120, 120);
        y = slot.y + rand(-120, 120);
      } else if (page.near === "pier") {
        x = 2100 + rand(-80, 40);
        y = 900 + rand(-60, 60);
      }
      this.pickups.push({
        id: page.id,
        kind: "grimoire",
        x,
        y,
        taken: false,
        pageId: page.id,
      });
    }
  }

  private makeBugs(n: number): LightningBug[] {
    return Array.from({ length: n }, () => ({
      x: rand(0, WORLD_W),
      y: rand(0, WORLD_H),
      phase: rand(0, Math.PI * 2),
      blinkRate: rand(1.5, 3.5),
      size: rand(1.5, 3),
      hue: rand(40, 70),
    }));
  }

  // ── update ────────────────────────────────────────────────────────────

  private update(dt: number) {
    if (!this.loaded) return;
    if (this.phase === "title") {
      this.dayProgress = (this.dayProgress + dt * 0.01) % 0.15;
      this.updateParticles(dt);
      return;
    }
    if (this.phase === "win" || this.phase === "lose") {
      this.updateParticles(dt);
      return;
    }
    const frozen = this.isReading();
    if (!frozen && this.phase === "playing") {
      this.dayProgress += dt / DAY_DURATION;
      if (this.dayProgress >= 1) {
        this.handleDayEnd();
      } else {
        // Soft deadline warnings
        if (this.dayProgress > 0.72 && !this.nightClimaxShown) {
          this.nightClimaxShown = true;
          this.pushToast(NIGHT_CLIMAX, "#9ee8ff");
        }
        if (
          this.playMode === "wander" &&
          this.dayProgress > 0.88 &&
          !this.softDeadlineShown
        ) {
          this.softDeadlineShown = true;
          this.pushToast(
            "Deep night settles — you may wander on, or rest when ready.",
            "#9ee8ff",
          );
        }
        if (this.playMode === "midnight" && this.dayProgress > 0.9 && !this.softDeadlineShown) {
          this.softDeadlineShown = true;
          this.pushToast("Midnight closes in… finish what you can.", "#e08070");
        }
      }
      setMusicPhase(timePhaseFromProgress(this.dayProgress));
      this.syncRain();
    }

    if (this.phase === "playing" && !this.helpOpen) {
      if (!this.reading && !this.message && !this.cabinNoteBody) {
        this.updatePlayer(dt);
      } else {
        this.clearTouchMove();
      }
      if (!frozen) {
        this.updateCreatures(dt);
        this.trySpawn(dt);
        this.updatePickups();
        this.updateDocumentCharge(dt);
        this.updateAmbience(dt);
        this.updateHollowZone();
        this.updateGift(dt);
        this.updateCompanions(dt);
        this.updateBugs(dt);
        this.updateFog(dt);
        this.driftProps(dt);
      }
      this.updateCamera(dt);
    }

    this.shake = Math.max(0, this.shake - dt * 3);
    this.lightningFlash = Math.max(0, this.lightningFlash - dt * 2);
    if (this.rainActive && !frozen) {
      this.lightningCd -= dt;
      if (this.lightningCd <= 0) {
        this.lightningCd = rand(4, 10);
        this.lightningFlash = 1;
        playSoftLightning();
      }
    }
    this.updateParticles(dt);
    this.updateToasts(dt);
    if (this.sightingCd > 0) {
      this.sightingCd -= dt;
      if (this.sightingCd <= 0) this.sighting = null;
    }
  }

  private updatePlayer(dt: number) {
    let mx = 0;
    let my = 0;
    if (this.keys.has("KeyW") || this.keys.has("ArrowUp")) my -= 1;
    if (this.keys.has("KeyS") || this.keys.has("ArrowDown")) my += 1;
    if (this.keys.has("KeyA") || this.keys.has("ArrowLeft")) mx -= 1;
    if (this.keys.has("KeyD") || this.keys.has("ArrowRight")) mx += 1;
    if (this.touchActive) {
      const tx = Math.abs(this.touchMX) < 0.12 ? 0 : this.touchMX;
      const ty = Math.abs(this.touchMY) < 0.12 ? 0 : this.touchMY;
      mx += tx;
      my += ty;
    }
    const len = Math.hypot(mx, my);
    if (len > 0.01) {
      mx /= len;
      my /= len;
      if (Math.abs(mx) > Math.abs(my)) this.playerFacing = mx > 0 ? 2 : 1;
      else this.playerFacing = my > 0 ? 0 : 3;
    }
    const water = this.isWater(this.playerX, this.playerY);
    const spd = PLAYER_SPEED * (water ? 0.62 : 1);
    let nx = this.playerX + mx * spd * dt;
    let ny = this.playerY + my * spd * dt;
    nx = clamp(nx, 24, WORLD_W - 24);
    ny = clamp(ny, 24, WORLD_H - 24);
    for (const p of this.props) {
      if (!p.collides) continue;
      const d = dist(nx, ny, p.x, p.y);
      const minD = PLAYER_R + p.radius * 0.5;
      if (d < minD && d > 0.01) {
        const push = (minD - d) / d;
        nx += (nx - p.x) * push;
        ny += (ny - p.y) * push;
      }
    }
    this.playerX = clamp(nx, 24, WORLD_W - 24);
    this.playerY = clamp(ny, 24, WORLD_H - 24);
    this.playerBob += dt * (len > 0.01 ? 10 : 3);
    if (water && !this.wasInWater) playWaterEnter();
    this.wasInWater = water;
    if (len > 0.01) {
      this.stepTimer -= dt;
      if (this.stepTimer <= 0) {
        this.stepTimer = water ? 0.38 : 0.32;
        // footstep thumps removed (wadestep / pier board knock)
        if (water) {
          this.particles.push({
            x: this.playerX,
            y: this.playerY + 8,
            vx: 0,
            vy: 0,
            life: 0.6,
            maxLife: 0.6,
            size: 8,
            color: "rgba(180,220,200,0.35)",
            kind: "ripple",
          });
        }
      }
    }
    this.updateProximitySfx();
  }

  private updateProximitySfx() {
    let cabin = false;
    let canoe = false;
    let pier = false;
    for (const p of this.props) {
      const d = dist(this.playerX, this.playerY, p.x, p.y);
      const def = placeByProp(p.kind);
      if (def?.kind === "cabin" && d < 78) cabin = true;
      if ((p.kind === "canoe" || def?.kind === "boat") && d < 62) canoe = true;
      if (
        (def?.kind === "pier" ||
          p.kind === "pier" ||
          p.kind === "pierNets" ||
          p.kind === "pierDock") &&
        d < 70
      )
        pier = true;
    }
    if (cabin && !this.nearCabinSfx) playCabinApproach();
    if (canoe && !this.nearCanoeSfx) playCanoe();
    // pier: one soft creak on first approach only (no repeating board thumps while walking)
    if (pier && !this.nearPierSfx) playWoodCreak();
    this.nearCabinSfx = cabin;
    this.nearCanoeSfx = canoe;
    this.nearPierSfx = pier;
  }

  private updateCamera(dt: number) {
    const tx = clamp(this.playerX - this.viewW / 2, 0, Math.max(0, WORLD_W - this.viewW));
    const ty = clamp(this.playerY - this.viewH / 2, 0, Math.max(0, WORLD_H - this.viewH));
    const k = 1 - Math.pow(0.001, dt);
    this.camX = lerp(this.camX, tx, k);
    this.camY = lerp(this.camY, ty, k);
    if (this.shake > 0) {
      this.camX += (Math.random() - 0.5) * this.shake * 10;
      this.camY += (Math.random() - 0.5) * this.shake * 10;
    }
  }

  private updateHollowZone() {
    const now = inHollow(this.playerX, this.playerY);
    if (now && !this.wasInHollow) {
      this.pushToast(HOLLOW.enterToast, "#9ee8ff");
      playHeartSkip();
      startHollowWind();
    } else if (!now && this.wasInHollow) {
      this.pushToast(HOLLOW.leaveToast, "#a0c090");
      stopHollowWind();
    }
    this.wasInHollow = now;
  }

  private updateAmbience(dt: number) {
    // Soft firefly ticks only at night — rare, quiet noise clicks
    if (this.dayProgress >= 0.72) {
      this.fireflyTickCd -= dt;
      if (this.fireflyTickCd <= 0) {
        this.fireflyTickCd = rand(4.5, 9);
        if (Math.random() < 0.45) playFireflyTick();
      }
    }
    this.frogBurstCd -= dt;
    if (this.frogBurstCd <= 0) {
      const tp = timePhaseFromProgress(this.dayProgress);
      // occasional croaks — not a soft metronome
      this.frogBurstCd =
        tp === "night" || tp === "dusk" ? rand(9, 16) : rand(10, 18);
      if (Math.random() < 0.7) playBullfrog();
    }
    // Creature presence calls when near undocumenteds
    this.creatureCallCd -= dt;
    if (this.creatureCallCd <= 0) {
      this.creatureCallCd = rand(2.5, 5);
      let nearest: Creature | null = null;
      let bestD = 210;
      for (const c of this.creatures) {
        if (!c.alive || c.documented) continue;
        const d = dist(c.x, c.y, this.playerX, this.playerY);
        if (d < bestD) {
          bestD = d;
          nearest = c;
        }
      }
      if (nearest) {
        const id = nearest.def.id;
        if (id === "lutin" || id === "feu-follet") playCreatureCall("tiny");
        else if (id === "moss-bullfrog" || id === "crawfish") playCreatureCall("frog");
        else if (id === "egret") playCreatureCall("bird");
        else if (
          id === "ghost-gar" ||
          id === "spirit-catfish" ||
          id === "mossy-gator" ||
          id === "slider-turtle"
        )
          playCreatureCall("water");
        else if (
          nearest.def.behavior === "drift" ||
          nearest.def.behavior === "haunt" ||
          nearest.def.rarity === "legendary" ||
          nearest.def.rarity === "rare"
        )
          playCreatureCall("ghost");
        else playCreatureCall("beast");
      }
    }
    this.ambienceTimer -= dt;
    if (this.ambienceTimer > 0) return;
    this.ambienceTimer = rand(2.2, 4.5);
    const tp = timePhaseFromProgress(this.dayProgress);
    const hollow = inHollow(this.playerX, this.playerY);
    const r = Math.random();
    // Night: mostly owls; frogs are rare here (handled by frogBurst)
    if (tp === "night" || tp === "dusk") {
      if (r < 0.7) playOwl();
      else if (r < 0.9) playBullfrog();
      return;
    }
    if (hollow) {
      if (r < 0.45) playBird();
      else if (r < 0.85) playCicada();
      // frogs less often in hollow bed
      else playBullfrog();
      return;
    }
    if (r < 0.45) playBird();
    else if (r < 0.85) playCicada();
    else playBullfrog();
  }

  private syncRain() {
    const shouldRain = this.dayProgress > 0.38 && this.dayProgress < 0.52;
    if (shouldRain && !this.rainActive) {
      this.rainActive = true;
      startRain();
      this.lightningCd = rand(2, 5);
    } else if (!shouldRain && this.rainActive) {
      this.rainActive = false;
      stopRain();
    }
    if (this.rainActive) {
      for (let i = 0; i < 3; i++) {
        this.particles.push({
          x: this.camX + rand(0, this.viewW),
          y: this.camY + rand(-20, this.viewH * 0.3),
          vx: rand(-20, -5),
          vy: rand(180, 280),
          life: 0.6,
          maxLife: 0.6,
          size: 1.5,
          color: "rgba(180,200,220,0.35)",
          kind: "rain",
        });
      }
    }
  }

  private trySpawn(dt: number) {
    for (const [id, cd] of this.spawnCooldowns) {
      this.spawnCooldowns.set(id, cd - dt);
    }
    const p = this.dayProgress;
    for (const def of CREATURE_DEFS) {
      const appearFrom = Math.max(0, def.appearFrom - 0.18);
      if (p < appearFrom || p > def.appearTo) continue;
      if (this.documented.has(def.id)) continue;
      const alive = this.creatures.filter((c) => c.alive && c.def.id === def.id);
      const maxAlive =
        def.rarity === "legendary" ? 1 : def.rarity === "rare" ? 1 : def.rarity === "common" ? 3 : 2;
      if (alive.length >= maxAlive) continue;
      const cd = this.spawnCooldowns.get(def.id) ?? 0;
      if (cd > 0) continue;
      this.spawnCooldowns.set(
        def.id,
        def.rarity === "legendary" ? rand(10, 20) : rand(4, 10),
      );
      this.spawnOne(def);
    }
  }

  private spawnOne(def: CreatureDef) {
    let x = 0;
    let y = 0;
    let best = -1;
    for (let i = 0; i < 30; i++) {
      let tx = rand(80, WORLD_W - 80);
      let ty = rand(80, WORLD_H - 80);
      if (HOLLOW_CREATURE_IDS.has(def.id) && Math.random() < 0.28) {
        tx = rand(HOLLOW.x0 + 40, HOLLOW.x1 - 40);
        ty = rand(HOLLOW.y0 + 40, HOLLOW.y1 - 40);
      }
      if (
        (def.id === "ghost-gar" || def.id === "spirit-catfish" || def.id === "mossy-gator") &&
        this.sampleLand(tx, ty) > 0.45
      )
        continue;
      let minD = 9999;
      for (const c of this.creatures) {
        if (!c.alive) continue;
        if (c.def.rarity === "legendary" || def.rarity === "legendary") {
          minD = Math.min(minD, dist(tx, ty, c.x, c.y));
        }
      }
      const dPlayer = dist(tx, ty, this.playerX, this.playerY);
      if (dPlayer < 140) continue;
      const score = minD + (dPlayer > 400 ? 50 : 0);
      if (score > best) {
        best = score;
        x = tx;
        y = ty;
      }
    }
    if (best < 0) {
      x = this.playerX + rand(180, 320) * (Math.random() < 0.5 ? 1 : -1);
      y = this.playerY + rand(140, 280) * (Math.random() < 0.5 ? 1 : -1);
    }
    x = clamp(x, 40, WORLD_W - 40);
    y = clamp(y, 40, WORLD_H - 40);
    this.creatures.push({
      uid: this.uid++,
      def,
      x,
      y,
      vx: 0,
      vy: 0,
      facing: rand(0, Math.PI * 2),
      bob: rand(0, 10),
      alert: 0,
      documented: this.documented.has(def.id),
      fleeTimer: 0,
      biteCd: 0,
      alive: true,
      scale: rand(0.92, 1.08),
    });
  }

  private updateCreatures(dt: number) {
    for (const c of this.creatures) {
      if (!c.alive) continue;
      c.bob += dt * 3;
      c.biteCd = Math.max(0, c.biteCd - dt);
      if (c.fleeTimer > 0) c.fleeTimer -= dt;
      const dPlayer = dist(c.x, c.y, this.playerX, this.playerY);
      this.applyBehavior(c, dt, dPlayer);
      c.x = clamp(c.x + c.vx * dt, 30, WORLD_W - 30);
      c.y = clamp(c.y + c.vy * dt, 30, WORLD_H - 30);
      if (c.vx !== 0 || c.vy !== 0) c.facing = Math.atan2(c.vy, c.vx);

      if (
        c.def.danger > 0 &&
        dPlayer < c.def.radius + PLAYER_R + 6 &&
        c.biteCd <= 0 &&
        (c.def.behavior === "aggressive" || c.def.behavior === "haunt")
      ) {
        c.biteCd = 2.6;
        this.shake = 0.45;
        const ang = Math.atan2(this.playerY - c.y, this.playerX - c.x);
        this.playerX = clamp(this.playerX + Math.cos(ang) * 24, 30, WORLD_W - 30);
        this.playerY = clamp(this.playerY + Math.sin(ang) * 24, 30, WORLD_H - 30);
        this.pushToast("Startled — keep documenting.", "#c4a35a");
        playCreatureCall("ghost");
      }

      if (
        !c.documented &&
        dPlayer < 220 &&
        dPlayer > 100 &&
        this.sightingCd <= 0 &&
        SIGHTING_LINES[c.def.id] &&
        Math.random() < 0.002
      ) {
        this.sighting = SIGHTING_LINES[c.def.id]!;
        this.sightingCd = 4;
      }
    }
    this.creatures = this.creatures.filter((c) => c.alive);
  }

  private applyBehavior(c: Creature, _dt: number, dPlayer: number) {
    const def = c.def;
    const speed = def.speed;
    const docRange =
      def.id === "lutin" || def.id === "feu-follet"
        ? def.docRange + 24
        : def.id === "crawfish"
          ? def.docRange + 28
          : def.docRange;
    if (!c.documented && dPlayer < docRange && this.docCharge > 0.08) {
      c.vx = 0;
      c.vy = 0;
      return;
    }
    if (def.id === "lutin" || def.id === "feu-follet") {
      if (dPlayer < docRange) {
        c.vx = Math.cos(c.bob * 0.6 + c.uid) * speed * 0.15;
        c.vy = Math.sin(c.bob * 0.5 + c.uid) * speed * 0.15;
        return;
      }
      c.vx = Math.cos(c.bob * 0.4 + c.uid) * speed * 0.35;
      c.vy = Math.sin(c.bob * 0.35 + c.uid) * speed * 0.3;
      return;
    }
    const fleeDist =
      def.id === "crawfish" ? 40 : def.id === "slider-turtle" ? 50 : def.id === "grunch" ? 70 : 95;
    if (c.fleeTimer > 0 || (def.behavior === "shy" && dPlayer < fleeDist && !c.documented)) {
      const ang = Math.atan2(c.y - this.playerY, c.x - this.playerX);
      const fleeSpd =
        def.id === "crawfish" || def.id === "slider-turtle" ? speed * 0.75 : speed * 1.15;
      c.vx = Math.cos(ang) * fleeSpd;
      c.vy = Math.sin(ang) * fleeSpd;
      return;
    }
    if (def.behavior === "aggressive" && dPlayer < 130) {
      const ang = Math.atan2(this.playerY - c.y, this.playerX - c.x);
      c.vx = Math.cos(ang) * speed * 0.7;
      c.vy = Math.sin(ang) * speed * 0.7;
      return;
    }
    if (def.behavior === "haunt" && dPlayer < 160) {
      const ang = Math.atan2(this.playerY - c.y, this.playerX - c.x);
      c.vx = Math.cos(ang) * speed * 0.55;
      c.vy = Math.sin(ang) * speed * 0.55;
      return;
    }
    if (def.behavior === "drift") {
      c.vx = Math.cos(c.bob * 0.4 + c.uid) * speed * 0.4;
      c.vy = Math.sin(c.bob * 0.35 + c.uid) * speed * 0.35;
      return;
    }
    if (Math.random() < 0.02) {
      const a = rand(0, Math.PI * 2);
      c.vx = Math.cos(a) * speed * 0.5;
      c.vy = Math.sin(a) * speed * 0.5;
    } else {
      c.vx *= 0.98;
      c.vy *= 0.98;
    }
  }

  private updateDocumentCharge(dt: number) {
    const nearC = this.findNearestDocumentable();
    if (nearC) {
      this.docCharge = Math.min(1, this.docCharge + dt / DOC_HOLD);
      if (this.docCharge >= 1) {
        this.finishDocumentCreature(nearC);
        this.docCharge = 0;
      }
    } else {
      this.docCharge = Math.max(0, this.docCharge - dt * 1.2);
    }
  }

  private finishDocumentCreature(c: Creature) {
    if (this.documented.has(c.def.id)) return;
    this.clearTouchMove();
    this.documented.add(c.def.id);
    c.documented = true;
    playDocumentChime();
    this.reading = true;
    this.readingKind = "creature";
    this.readingTitle = c.def.name;
    this.message = c.def.lore;
    this.cabinNoteTitle = c.def.name;
    this.cabinNoteBody = c.def.lore;
    this.docCharge = 0;
    this.checkSoftWin();
    this.emit();
  }

  private findNearestDocumentable(): Creature | null {
    let best: Creature | null = null;
    let bestD = 9999;
    for (const c of this.creatures) {
      if (!c.alive || this.documented.has(c.def.id)) continue;
      const d = dist(c.x, c.y, this.playerX, this.playerY);
      let range = c.def.docRange;
      if (c.def.id === "crawfish") range += 28;
      if (c.def.id === "lutin" || c.def.id === "feu-follet") range += 30;
      if (d < range && d < bestD) {
        bestD = d;
        best = c;
      }
    }
    return best;
  }

  private findNearPlace(): PlaceDef | null {
    for (const p of this.props) {
      if (!p.placeId) continue;
      const d = dist(p.x, p.y, this.playerX, this.playerY);
      if (d < 70) {
        const def = placeById(p.placeId);
        if (def) return def;
      }
    }
    return null;
  }

  private openPlace(pd: PlaceDef) {
    this.clearTouchMove();
    this.placeVisited.set(pd.id, true);
    this.pendingPlaceId = pd.id;
    this.reading = true;
    this.readingKind = "place";
    this.readingTitle = pd.title;
    this.cabinNoteTitle = pd.title;
    this.cabinNoteBody = pd.note;
    this.message = pd.note;
    playWoodCreak();
    this.emit();
  }

  private updatePickups() {
    for (const pk of this.pickups) {
      if (pk.taken) continue;
      if (dist(pk.x, pk.y, this.playerX, this.playerY) < 36) {
        pk.taken = true;
        this.pagesFound.add(pk.pageId);
        const page = GRIMOIRE_PAGES.find((g) => g.id === pk.pageId);
        if (page) {
          this.clearTouchMove();
          this.reading = true;
          this.readingKind = "page";
          this.readingTitle = page.title;
          this.cabinNoteTitle = page.title;
          this.cabinNoteBody = page.body;
          this.message = page.body;
          this.lastPageTitle = page.title;
          this.lastPageBody = page.body;
          this.grimoireOpen = true;
          playPageFind();
          this.pushToast("Field page found", "#c4a35a");
          this.checkSoftWin();
          this.emit();
        }
      }
    }
  }

  private activateGift(pd: PlaceDef) {
    this.activeGift = {
      placeId: pd.id,
      effect: pd.effect,
      life: pd.effectDuration,
      maxLife: pd.effectDuration,
      label: pd.effectLabel,
      color: pd.lanternColor,
    };
    this.companions = [];
    const life = pd.effectDuration;
    if (pd.effect === "frog_friend") {
      this.companions.push({
        kind: "frog",
        x: this.playerX - 28,
        y: this.playerY + 6,
        life,
        phase: 0,
      });
    } else if (pd.effect === "deer_friend") {
      this.companions.push({
        kind: "deer",
        x: this.playerX - 42,
        y: this.playerY + 10,
        life,
        phase: 0,
      });
    } else if (pd.effect === "dragonfly") {
      this.companions.push({
        kind: "dragonfly",
        x: this.playerX + 22,
        y: this.playerY - 22,
        life,
        phase: 0,
      });
    } else if (pd.effect === "moth_friend" || pd.effect === "firefly_dance") {
      this.companions.push({
        kind: pd.effect === "moth_friend" ? "moth" : "firefly",
        x: this.playerX + 18,
        y: this.playerY - 16,
        life,
        phase: 0,
      });
      this.companions.push({
        kind: pd.effect === "moth_friend" ? "moth" : "firefly",
        x: this.playerX - 16,
        y: this.playerY - 12,
        life,
        phase: 1.2,
      });
    }
  }

  private updateGift(dt: number) {
    if (!this.activeGift) return;
    this.activeGift.life -= dt;
    const g = this.activeGift;
    // Soft underfoot rings only (no floating orbs)
    if (g.effect === "water_ring" || g.effect === "fish_glint") {
      if (Math.random() < 0.2) {
        this.particles.push({
          x: this.playerX,
          y: this.playerY + 10,
          vx: 0,
          vy: 0,
          life: 0.7,
          maxLife: 0.7,
          size: 12,
          color: `rgba(${g.color[0]},${g.color[1]},${g.color[2]},0.35)`,
          kind: "ripple",
        });
      }
    }
    if (g.life <= 0) {
      this.activeGift = null;
      this.companions = [];
    }
  }

  private updateCompanions(dt: number) {
    for (const c of this.companions) {
      c.life -= dt;
      c.phase += dt;
      const tx = this.playerX + (c.kind === "deer" ? -40 : c.kind === "frog" ? -26 : 18);
      const ty =
        this.playerY +
        (c.kind === "dragonfly" || c.kind === "moth" || c.kind === "firefly"
          ? -18 + Math.sin(c.phase * 3) * 6
          : 8);
      c.x = lerp(c.x, tx, 1 - Math.pow(0.02, dt));
      c.y = lerp(c.y, ty, 1 - Math.pow(0.02, dt));
    }
    this.companions = this.companions.filter((c) => c.life > 0);
  }

  private handleDayEnd() {
    const complete =
      this.documented.size >= CREATURE_DEFS.length &&
      this.pagesFound.size >= GRIMOIRE_PAGES.length;
    if (this.playMode === "midnight") {
      if (complete) {
        this.phase = "win";
        this.endReason = "You closed the ledger before midnight.";
      } else {
        this.phase = "lose";
        this.endReason =
          "Midnight took the channel. The undocumented still move in the dark.";
      }
      this.emit();
      return;
    }
    // Wander — soft end: loop a new dawn, keep progress
    this.dayProgress = 0.02;
    this.nightClimaxShown = false;
    this.softDeadlineShown = false;
    this.pushToast("Another soft dawn — your journal stays with you.", "#c4a35a");
    if (complete && !this.softWinShown) {
      this.softWinShown = true;
      this.phase = "win";
      this.endReason = "Every legend and page recorded on the wander.";
    }
    this.emit();
  }

  private updateBugs(dt: number) {
    if (this.dayProgress < 0.65) return;
    for (const b of this.bugs) {
      b.phase += dt * b.blinkRate;
      b.x += Math.sin(b.phase) * 8 * dt;
      b.y += Math.cos(b.phase * 0.7) * 6 * dt;
    }
  }

  private updateFog(dt: number) {
    for (const f of this.fogBands) {
      f.phase += dt * 0.2;
      f.x += Math.sin(f.phase) * 4 * dt;
    }
  }

  private driftProps(dt: number) {
    for (const p of this.props) {
      if (p.driftX) {
        p.x += Math.sin(performance.now() / 2000 + p.y) * (p.driftX || 0) * dt * 0.05;
        p.y += Math.cos(performance.now() / 2500 + p.x) * (p.driftY || 0) * dt * 0.05;
      }
    }
  }

  private updateParticles(dt: number) {
    for (const p of this.particles) {
      p.life -= dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
    this.particles = this.particles.filter((p) => p.life > 0);
  }

  private updateToasts(dt: number) {
    for (const t of this.toasts) t.life -= dt;
    this.toasts = this.toasts.filter((t) => t.life > 0);
  }

  private pushToast(text: string, color: string) {
    if (this.toasts[0]?.text === text) return;
    this.toasts.unshift({ text, life: 3.2, color });
    if (this.toasts.length > 2) this.toasts.length = 2;
  }

  private clearReading(emitAfter: boolean) {
    this.reading = false;
    this.readingTitle = null;
    this.readingKind = null;
    this.message = null;
    this.cabinNoteTitle = null;
    this.cabinNoteBody = null;
    this.pendingPlaceId = null;
    this.grimoireOpen = false;
    if (emitAfter) this.emit();
  }

  private checkSoftWin() {
    if (this.softWinShown) return;
    if (
      this.documented.size >= CREATURE_DEFS.length &&
      this.pagesFound.size >= GRIMOIRE_PAGES.length
    ) {
      this.softWinShown = true;
      this.phase = "win";
      this.pushToast("Every legend & page recorded.", "#c4a35a");
      this.emit();
    }
  }

  // ── draw ──────────────────────────────────────────────────────────────

  private img(src: string) {
    return this.images.get(src);
  }

  private draw() {
    const ctx = this.ctx;
    const w = this.viewW;
    const h = this.viewH;
    ctx.save();
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = this.skyColor();
    ctx.fillRect(0, 0, w, h);
    ctx.save();
    ctx.translate(-this.camX, -this.camY);
    this.drawTerrain(ctx);
    this.drawFog(ctx);
    this.drawProps(ctx, false);
    this.drawProps(ctx, true, 0.7);
    this.drawCreatures(ctx);
    this.drawPlayer(ctx);
    this.drawCompanions(ctx);
    this.drawPickups(ctx);
    this.drawParticles(ctx);
    this.drawFireflies(ctx);
    this.drawHollowOverlay(ctx);
    this.drawGuide(ctx);
    ctx.restore();
    this.drawLightingOverlay(ctx, w, h);
    if (this.lightningFlash > 0) {
      ctx.fillStyle = `rgba(220,230,255,${0.25 * this.lightningFlash})`;
      ctx.fillRect(0, 0, w, h);
    }
    if (this.phase === "title") {
      ctx.fillStyle = "rgba(8,12,10,0.35)";
      ctx.fillRect(0, 0, w, h);
    }
    ctx.restore();
  }

  private skyColor() {
    const map: Record<TimePhase, string> = {
      dawn: "#1a2830",
      sunrise: "#2a3a40",
      morning: "#2f4a48",
      afternoon: "#2a4840",
      evening: "#2a3840",
      dusk: "#1a2430",
      night: "#0a1218",
    };
    return map[timePhaseFromProgress(this.dayProgress)];
  }

  private drawTerrain(ctx: CanvasRenderingContext2D) {
    const x0 = Math.max(0, Math.floor(this.camX / MASK_SCALE) - 1);
    const y0 = Math.max(0, Math.floor(this.camY / MASK_SCALE) - 1);
    const x1 = Math.min(MASK_W, Math.ceil((this.camX + this.viewW) / MASK_SCALE) + 1);
    const y1 = Math.min(MASK_H, Math.ceil((this.camY + this.viewH) / MASK_SCALE) + 1);
    const night = this.dayProgress > 0.65 ? (this.dayProgress - 0.65) / 0.35 : 0;
    for (let my = y0; my < y1; my++) {
      for (let mx = x0; mx < x1; mx++) {
        const land = this.landMask[my * MASK_W + mx]!;
        const depth = this.depthMask[my * MASK_W + mx]!;
        const wx = mx * MASK_SCALE;
        const wy = my * MASK_SCALE;
        const hollow = inHollow(wx + 2, wy + 2);
        if (land >= 0.42) {
          const g = 70 + land * 40 - night * 25;
          ctx.fillStyle = hollow
            ? `rgb(${28 + g * 0.2},${40 + g * 0.35},${38 + g * 0.25})`
            : `rgb(${40 + g * 0.35},${55 + g * 0.5},${40 + g * 0.3})`;
        } else {
          const d = depth;
          const r = Math.floor(lerp(28, 12, d) - (hollow ? 6 : 0));
          const g = Math.floor(lerp(48, 22, d) - (hollow ? 4 : 0));
          const b = Math.floor(lerp(42, 28, d) + (hollow ? 8 : 0));
          ctx.fillStyle = `rgb(${r},${g},${b})`;
        }
        ctx.fillRect(wx, wy, MASK_SCALE + 0.5, MASK_SCALE + 0.5);
      }
    }
  }

  private drawFog(ctx: CanvasRenderingContext2D) {
    let mist =
      this.dayProgress < 0.15 ? 0.28 : this.dayProgress > 0.62 ? 0.2 : 0.07;
    if (inHollow(this.playerX, this.playerY)) mist += 0.18;
    for (const f of this.fogBands) {
      if (
        f.x + f.w < this.camX ||
        f.x > this.camX + this.viewW ||
        f.y + f.h < this.camY ||
        f.y > this.camY + this.viewH
      )
        continue;
      const g = ctx.createRadialGradient(f.x, f.y, 10, f.x, f.y, f.w * 0.5);
      g.addColorStop(0, `rgba(180,200,210,${mist})`);
      g.addColorStop(1, "rgba(180,200,210,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(f.x, f.y, f.w * 0.5, f.h * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawProps(ctx: CanvasRenderingContext2D, tallOnly: boolean, alpha = 1) {
    const list = this.props.filter((p) => (tallOnly ? p.tall : !p.tall));
    const vis = list.filter(
      (p) =>
        p.x > this.camX - 80 &&
        p.x < this.camX + this.viewW + 80 &&
        p.y > this.camY - 120 &&
        p.y < this.camY + this.viewH + 80,
    );
    vis.sort((a, b) => a.y - b.y);
    for (const p of vis) {
      if (alpha < 1) {
        ctx.save();
        ctx.globalAlpha = alpha;
        this.drawProp(ctx, p);
        ctx.restore();
      } else this.drawProp(ctx, p);
    }
  }

  private drawProp(ctx: CanvasRenderingContext2D, p: Prop) {
    const src = propSprite(p.kind);
    const im = this.img(src);
    const bob =
      p.kind === "floatBottle" || p.kind === "lilypad" || p.kind === "lily"
        ? Math.sin(performance.now() / 700 + p.x * 0.01) * 2
        : 0;
    if (p.placeId && !this.placeSpecimen.get(p.placeId)) {
      const pulse = 0.3 + Math.sin(performance.now() / 500 + p.y) * 0.12;
      const g = ctx.createRadialGradient(p.x, p.y - 10, 6, p.x, p.y - 10, 42);
      g.addColorStop(0, `rgba(255, 180, 80, ${pulse})`);
      g.addColorStop(1, "rgba(255, 180, 80, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y - 10, 42, 0, Math.PI * 2);
      ctx.fill();
    }
    if (im && im.complete && im.naturalWidth > 0) {
      const sc = p.scale;
      const iw = im.naturalWidth * sc * 0.55;
      const ih = im.naturalHeight * sc * 0.55;
      ctx.save();
      ctx.translate(p.x, p.y + bob);
      ctx.rotate(p.rot);
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.beginPath();
      ctx.ellipse(0, ih * 0.15, iw * 0.28, ih * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.drawImage(im, -iw / 2, -ih * 0.85, iw, ih);
      ctx.restore();
    } else {
      ctx.fillStyle = "#4a6a40";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawPickups(ctx: CanvasRenderingContext2D) {
    for (const pk of this.pickups) {
      if (pk.taken) continue;
      if (
        pk.x < this.camX - 100 ||
        pk.x > this.camX + this.viewW + 100 ||
        pk.y < this.camY - 100 ||
        pk.y > this.camY + this.viewH + 100
      )
        continue;
      const t = performance.now() / 400 + pk.x * 0.01;
      const pulse = 0.6 + Math.sin(t) * 0.22;
      const bob = Math.sin(t * 0.8) * 5;
      const g = ctx.createRadialGradient(pk.x, pk.y + bob, 6, pk.x, pk.y + bob, 72);
      g.addColorStop(0, `rgba(255, 230, 150, ${0.75 * pulse})`);
      g.addColorStop(0.35, `rgba(240, 200, 100, ${0.4 * pulse})`);
      g.addColorStop(1, "rgba(240, 190, 80, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(pk.x, pk.y + bob, 72, 0, Math.PI * 2);
      ctx.fill();
      ctx.save();
      ctx.translate(pk.x, pk.y + bob);
      ctx.rotate(Math.sin(t * 0.3) * 0.06);
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fillRect(-20, -26, 42, 52);
      ctx.fillStyle = `rgba(250, 236, 200, ${0.95})`;
      ctx.fillRect(-18, -28, 36, 48);
      ctx.strokeStyle = `rgba(170, 130, 60, 0.9)`;
      ctx.lineWidth = 2;
      ctx.strokeRect(-18, -28, 36, 48);
      ctx.fillStyle = "rgba(220, 190, 120, 0.98)";
      ctx.beginPath();
      ctx.moveTo(18, -28);
      ctx.lineTo(18, -12);
      ctx.lineTo(4, -28);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = `rgba(90, 70, 40, ${0.4 + pulse * 0.2})`;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(-12, -12 + i * 7);
        ctx.lineTo(12, -12 + i * 7);
        ctx.stroke();
      }
      ctx.fillStyle = `rgba(210, 165, 50, ${0.85 + pulse * 0.15})`;
      ctx.beginPath();
      ctx.arc(0, 14, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  private drawCreatures(ctx: CanvasRenderingContext2D) {
    const list = this.creatures
      .filter(
        (c) =>
          c.alive &&
          c.x > this.camX - 60 &&
          c.x < this.camX + this.viewW + 60 &&
          c.y > this.camY - 60 &&
          c.y < this.camY + this.viewH + 60,
      )
      .sort((a, b) => a.y - b.y);

    for (const c of list) {
      const bob = Math.sin(c.bob) * 3;
      const im = this.img(c.def.sprite);
      const sizeMul =
        c.def.id === "egret" || c.def.id === "nutria" || c.def.id === "slider-turtle"
          ? 0.34
          : c.def.id === "crawfish" || c.def.id === "lutin" || c.def.id === "feu-follet"
            ? 0.45
            : c.def.rarity === "legendary"
              ? 0.56
              : 0.5;
      const sc = sizeMul * (0.85 + Math.min(c.def.radius, 32) / 90) * c.scale;

      if (!this.documented.has(c.def.id)) {
        const pulse = 0.4 + Math.sin(performance.now() / 400 + c.uid) * 0.15;
        ctx.save();
        ctx.globalAlpha = pulse * 0.7;
        ctx.fillStyle = c.def.color;
        ctx.beginPath();
        ctx.arc(c.x, c.y - 6, 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (im && im.complete && im.naturalWidth > 0) {
        const iw = Math.min(im.naturalWidth * sc, 72);
        const ih = Math.min(im.naturalHeight * sc, 84);
        ctx.save();
        ctx.translate(c.x, c.y + bob);
        if (Math.cos(c.facing) < 0) ctx.scale(-1, 1);
        if (c.documented) ctx.globalAlpha = 0.75;
        ctx.drawImage(im, -iw / 2, -ih * 0.8, iw, ih);
        ctx.restore();
      } else {
        ctx.fillStyle = c.def.color;
        ctx.beginPath();
        ctx.arc(c.x, c.y + bob, Math.min(c.def.radius * 0.4, 16), 0, Math.PI * 2);
        ctx.fill();
      }

      if (!this.documented.has(c.def.id)) {
        const d = dist(c.x, c.y, this.playerX, this.playerY);
        let range = c.def.docRange;
        if (c.def.id === "crawfish") range += 28;
        if (c.def.id === "lutin" || c.def.id === "feu-follet") range += 30;
        if (d < range) {
          ctx.strokeStyle = `rgba(255,200,80,${0.5 + this.docCharge * 0.5})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(
            c.x,
            c.y,
            range * 0.5,
            0,
            Math.PI * 2 * Math.max(0.05, this.docCharge || 0.12),
          );
          ctx.stroke();
        }
      }
    }
  }

  private drawPlayer(ctx: CanvasRenderingContext2D) {
    const dirs = [
      "/sprites/dir-1.png",
      "/sprites/dir-2.png",
      "/sprites/dir-3.png",
      "/sprites/dir-4.png",
    ];
    const src = dirs[this.playerFacing] ?? dirs[0]!;
    const im = this.img(src);
    const bob = Math.sin(this.playerBob) * 2;
    // bigger walker
    const pw = 52;
    const ph = 62;
    ctx.fillStyle = "rgba(0,0,0,0.28)";
    ctx.beginPath();
    ctx.ellipse(this.playerX, this.playerY + 12, 15, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    if (im && im.complete && im.naturalWidth > 0) {
      ctx.drawImage(im, this.playerX - pw / 2, this.playerY - ph + 8 + bob, pw, ph);
    } else {
      ctx.fillStyle = "#d4b896";
      ctx.beginPath();
      ctx.arc(this.playerX, this.playerY + bob, 15, 0, Math.PI * 2);
      ctx.fill();
    }

    // Lantern — always when specimens collected (or night / gift)
    const hasLantern =
      this.specimens.size > 0 || this.dayProgress > 0.55 || !!this.activeGift;
    if (hasLantern) {
      const colors = PLACE_DEFS.filter((p) => this.specimens.has(p.specimenId)).map(
        (p) => p.lanternColor,
      );
      let lr: number, lg: number, lb: number;
      if (colors.length) {
        const mix = lanternMix(colors);
        lr = Math.round(mix[0] * 0.35 + this.lastLantern[0] * 0.65);
        lg = Math.round(mix[1] * 0.35 + this.lastLantern[1] * 0.65);
        lb = Math.round(mix[2] * 0.35 + this.lastLantern[2] * 0.65);
      } else {
        [lr, lg, lb] = this.lastLantern;
      }
      const pulse = 0.75 + Math.sin(performance.now() / 320) * 0.2;
      // handheld lantern blob at side
      ctx.fillStyle = `rgba(${lr},${lg},${lb},${0.9 * pulse})`;
      ctx.beginPath();
      ctx.arc(this.playerX + 16, this.playerY - 18 + bob, 5, 0, Math.PI * 2);
      ctx.fill();
      const rad = this.specimens.size > 0 ? 110 : 90;
      const grd = ctx.createRadialGradient(
        this.playerX + 14,
        this.playerY - 16,
        4,
        this.playerX,
        this.playerY,
        rad,
      );
      grd.addColorStop(0, `rgba(${lr},${lg},${lb},${0.5 * pulse})`);
      grd.addColorStop(0.45, `rgba(${lr},${lg},${lb},${0.18 * pulse})`);
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(this.playerX, this.playerY, rad, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawCompanions(ctx: CanvasRenderingContext2D) {
    for (const c of this.companions) {
      const bob = Math.sin(c.phase * 4) * 2;
      if (c.kind === "deer") {
        const im = this.img("/sprites/companion-deer.png");
        if (im && im.complete) {
          ctx.drawImage(im, c.x - 22, c.y - 36 + bob, 44, 44);
        } else {
          ctx.fillStyle = "#c4a882";
          ctx.beginPath();
          ctx.ellipse(c.x, c.y + bob, 14, 10, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (c.kind === "frog") {
        ctx.fillStyle = "#5a9a50";
        ctx.beginPath();
        ctx.ellipse(c.x, c.y + bob, 9, 7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#c4d060";
        ctx.beginPath();
        ctx.arc(c.x - 2, c.y - 4 + bob, 3, 0, Math.PI * 2);
        ctx.arc(c.x + 3, c.y - 3 + bob, 2.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (c.kind === "dragonfly") {
        ctx.strokeStyle = "rgba(140,220,180,0.85)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(c.x - 8, c.y + bob);
        ctx.lineTo(c.x + 8, c.y + bob);
        ctx.stroke();
        ctx.fillStyle = "rgba(100,180,140,0.9)";
        ctx.beginPath();
        ctx.ellipse(c.x - 5, c.y + bob - 2, 5, 2, -0.4, 0, Math.PI * 2);
        ctx.ellipse(c.x + 5, c.y + bob - 2, 5, 2, 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else if (c.kind === "moth") {
        ctx.fillStyle = "rgba(230,230,240,0.75)";
        ctx.beginPath();
        ctx.ellipse(c.x, c.y + bob, 5, 3, Math.sin(c.phase) * 0.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // firefly companion — soft glow, not a beep
        const pulse = 0.4 + Math.sin(c.phase * 5) * 0.3;
        ctx.fillStyle = `rgba(255,230,120,${pulse})`;
        ctx.beginPath();
        ctx.arc(c.x, c.y + bob, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  private drawGuide(ctx: CanvasRenderingContext2D) {
    if (!this.guide) return;
    const d = dist(this.playerX, this.playerY, this.guide.x, this.guide.y);
    if (d < 70) {
      this.guide = null;
      return;
    }
    const ang = Math.atan2(this.guide.y - this.playerY, this.guide.x - this.playerX);
    const ax = this.playerX + Math.cos(ang) * 48;
    const ay = this.playerY + Math.sin(ang) * 48;
    ctx.save();
    ctx.translate(ax, ay);
    ctx.rotate(ang);
    ctx.fillStyle = "rgba(255, 200, 90, 0.9)";
    ctx.beginPath();
    ctx.moveTo(14, 0);
    ctx.lineTo(-8, 8);
    ctx.lineTo(-4, 0);
    ctx.lineTo(-8, -8);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    // faint line toward place
    ctx.strokeStyle = "rgba(255, 200, 90, 0.25)";
    ctx.setLineDash([6, 8]);
    ctx.beginPath();
    ctx.moveTo(this.playerX, this.playerY);
    ctx.lineTo(this.guide.x, this.guide.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  private drawParticles(ctx: CanvasRenderingContext2D) {
    for (const p of this.particles) {
      const a = Math.max(0, p.life / p.maxLife);
      ctx.globalAlpha = a;
      ctx.fillStyle = p.color;
      if (p.kind === "ripple") {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1.5 - a), 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }

  private drawFireflies(ctx: CanvasRenderingContext2D) {
    if (this.dayProgress < 0.65) return;
    for (const b of this.bugs) {
      if (
        b.x < this.camX ||
        b.x > this.camX + this.viewW ||
        b.y < this.camY ||
        b.y > this.camY + this.viewH
      )
        continue;
      const blink = (Math.sin(b.phase) + 1) * 0.5;
      if (blink < 0.35) continue;
      ctx.fillStyle = `rgba(255,230,120,${blink * 0.85})`;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawHollowOverlay(ctx: CanvasRenderingContext2D) {
    if (!inHollow(this.playerX, this.playerY)) return;
    for (let i = 0; i < 5; i++) {
      const x = HOLLOW.x0 + ((i * 137) % (HOLLOW.x1 - HOLLOW.x0));
      const y = HOLLOW.y0 + ((i * 97) % (HOLLOW.y1 - HOLLOW.y0));
      const pulse = 0.15 + Math.sin(performance.now() / 600 + i) * 0.08;
      const g = ctx.createRadialGradient(x, y, 2, x, y, 40);
      g.addColorStop(0, `rgba(120,220,255,${pulse})`);
      g.addColorStop(1, "rgba(120,220,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawLightingOverlay(ctx: CanvasRenderingContext2D, w: number, h: number) {
    // Cooler evening earlier for scary vibe
    const night =
      this.dayProgress > 0.48 ? Math.min(1, (this.dayProgress - 0.48) / 0.4) : 0;
    if (night <= 0.05 && this.specimens.size === 0) return;
    const hollow = inHollow(this.playerX, this.playerY);
    const dark = Math.max(night * 0.6, this.specimens.size ? night * 0.45 : 0);
    if (dark > 0.02) {
      ctx.fillStyle = `rgba(${hollow ? 3 : 5},${hollow ? 6 : 8},${hollow ? 16 : 14},${0.14 + dark})`;
      ctx.fillRect(0, 0, w, h);
      const grd = ctx.createRadialGradient(
        w / 2,
        h / 2,
        40,
        w / 2,
        h / 2,
        Math.max(w, h) * 0.55,
      );
      grd.addColorStop(0, "rgba(0,0,0,0)");
      grd.addColorStop(1, `rgba(0,0,0,${dark * 0.6})`);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
    }
  }

  private bindKeys() {
    this.onKeyDown = (e: KeyboardEvent) => {
      this.keys.add(e.code);
      if (e.code === "KeyE") this.tryInteract();
      if (e.code === "KeyJ") this.openJournal();
      if (e.code === "KeyH") this.toggleHelp();
      if (e.code === "KeyM") this.toggleMute();
      if (e.code === "Space" || e.code === "KeyF") this.documentNearest();
      if (e.code === "Escape") {
        if (this.helpOpen) this.setHelpOpen(false);
        else if (this.reading) this.dismissReading();
        else if (this.phase === "journal") this.openJournal();
      }
    };
    this.onKeyUp = (e: KeyboardEvent) => {
      this.keys.delete(e.code);
    };
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);

    window.__bayouGame = {
      getSnapshot: () => this.getSnapshot(),
      documentNearest: () => this.documentNearest(),
      setPhase: (p) => {
        this.phase = p;
        this.emit();
      },
      setDayProgress: (p) => {
        this.dayProgress = p;
        this.emit();
      },
      toggleMute: () => this.toggleMute(),
      dismissReading: () => this.dismissReading(),
      pressSpecimen: () => this.pressSpecimen(),
      toggleHelp: () => this.toggleHelp(),
      setHelpOpen: (o) => this.setHelpOpen(o),
      tryInteract: () => this.tryInteract(),
      setPlayerPos: (x, y) => {
        this.playerX = x;
        this.playerY = y;
      },
      setGuide: (id) => this.setGuide(id),
      startGame: (mode) => this.startGame(mode ?? "wander"),
    };
  }

  private onKeyDown: (e: KeyboardEvent) => void = () => {};
  private onKeyUp: (e: KeyboardEvent) => void = () => {};

  private unbindKeys() {
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);
    delete window.__bayouGame;
  }
}
