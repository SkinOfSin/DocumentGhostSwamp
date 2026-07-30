export type TimePhase =
  | "dawn"
  | "sunrise"
  | "morning"
  | "afternoon"
  | "evening"
  | "dusk"
  | "night";

export type CreatureId =
  | "moss-bullfrog"
  | "ghost-gar"
  | "mossy-gator"
  | "feu-follet"
  | "rougarou"
  | "honey-island"
  | "spirit-catfish"
  | "lutin"
  | "manchac-ghost"
  | "pere-malfait"
  | "nutria"
  | "egret"
  | "crawfish"
  | "slider-turtle"
  | "voodoo-woman"
  | "lafitte"
  | "grunch"
  | "woman-white"
  | "letiche"
  | "rail-passenger";

export type Behavior = "shy" | "wander" | "aggressive" | "drift" | "haunt";

export interface CreatureDef {
  id: CreatureId;
  name: string;
  lore: string;
  sprite: string;
  radius: number;
  speed: number;
  behavior: Behavior;
  appearFrom: number;
  appearTo: number;
  docRange: number;
  danger: number;
  rarity: "common" | "uncommon" | "rare" | "legendary";
  color: string;
}

export interface Creature {
  uid: number;
  def: CreatureDef;
  x: number;
  y: number;
  vx: number;
  vy: number;
  facing: number;
  bob: number;
  alert: number;
  documented: boolean;
  fleeTimer: number;
  biteCd: number;
  alive: boolean;
  scale: number;
}

export type PropKind =
  | "lilypad"
  | "lily"
  | "stump"
  | "moss"
  | "post"
  | "cypress"
  | "cypressMoss"
  | "tupelo"
  | "knees"
  | "pine"
  | "maple"
  | "pier"
  | "pierLantern"
  | "pierBroken"
  | "pierNets"
  | "pierDock"
  | "canoe"
  | "cabin"
  | "cabinTin"
  | "cabinSunk"
  | "cabinBoarded"
  | "cabinRocker"
  | "mushrooms"
  | "duckweed"
  | "algae"
  | "duckweedMat"
  | "algaeStrand"
  | "mossHang"
  | "scum"
  | "cross"
  | "headstone"
  | "noHunting"
  | "barrel"
  | "tire"
  | "trap"
  | "nest"
  | "bootsStump"
  | "skiff"
  | "railTies"
  | "swing"
  | "doghouse"
  | "mailbox"
  | "floatBottle"
  | "blueLight"
  | "bonePile"
  | "ribs"
  | "clothHang";

export interface Prop {
  kind: PropKind;
  x: number;
  y: number;
  scale: number;
  rot: number;
  collides: boolean;
  radius: number;
  tall: boolean;
  driftX?: number;
  driftY?: number;
  lamp?: boolean;
  noteId?: string;
  placeId?: string;
}

export interface WorldPickup {
  id: string;
  kind: "grimoire";
  x: number;
  y: number;
  taken: boolean;
  pageId: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  kind: "ripple" | "spark" | "mist" | "hit" | "firefly" | "dragonfly" | "glitter" | "rain";
}

export interface Toast {
  text: string;
  life: number;
  color: string;
}

export type GamePhase = "title" | "playing" | "journal" | "win" | "lose";

export interface PlaceMarker {
  id: string;
  title: string;
  kind: "cabin" | "boat" | "pier";
  x: number;
  y: number;
  visited: boolean;
  specimenCollected: boolean;
  specimenId: string;
  specimenName: string;
  specimenSprite: string;
  sketchSprite: string;
  note: string;
  effectLabel: string;
  effectDesc: string;
}

export interface ActiveEffectInfo {
  id: string;
  label: string;
  remaining: number;
}

export interface CompanionState {
  kind: "frog" | "deer" | "dragonfly" | "moth" | "firefly";
  x: number;
  y: number;
  life: number;
  phase: number;
}

export type PlayMode = "wander" | "midnight";

export interface GameSnapshot {
  phase: GamePhase;
  dayProgress: number;
  timePhase: TimePhase;
  timeLabel: string;
  health: number;
  maxHealth: number;
  documented: CreatureId[];
  totalCreatures: number;
  toast: string | null;
  nearCreature: CreatureDef | null;
  shake: number;
  message: string | null;
  docCharge: number;
  pagesFound: string[];
  totalPages: number;
  lantern: boolean;
  muted: boolean;
  nearInteract: string | null;
  sighting: string | null;
  cabinNoteTitle: string | null;
  cabinNoteBody: string | null;
  grimoireOpen: boolean;
  lastPageTitle: string | null;
  lastPageBody: string | null;
  reading: boolean;
  readingTitle: string | null;
  readingKind: "creature" | "page" | "cabin" | "story" | "place" | "flora" | null;
  specimens: string[];
  totalSpecimens: number;
  places: PlaceMarker[];
  activeEffects: ActiveEffectInfo[];
  lanternColor: string;
  rainActive: boolean;
  pendingSpecimen: {
    id: string;
    name: string;
    sprite: string;
    effectLabel: string;
    effectDesc: string;
    alreadyPressed: boolean;
  } | null;
  helpOpen: boolean;
  floraDocumented: string[];
  totalFlora: number;
  nearFlora: { id: string; name: string; sprite: string } | null;
  inHollow: boolean;
  zoneLabel: string | null;
  playMode: PlayMode;
  /** Compass guide toward a map-selected place */
  guide: { placeId: string; title: string; x: number; y: number } | null;
  endReason: string | null;
}

export interface ControlsProbe {
  getX: () => number;
  getY: () => number;
  getFacing: () => number;
  getSpeed: () => number;
  setKeys: (codes: string[]) => void;
  setMove: (x: number, y: number) => void;
}

export interface LightningBug {
  x: number;
  y: number;
  phase: number;
  blinkRate: number;
  size: number;
  hue: number;
}

declare global {
  interface Window {
    __controlsTest?: ControlsProbe;
    __bayouGame?: {
      getSnapshot: () => GameSnapshot;
      documentNearest: () => void;
      setPhase: (p: GamePhase) => void;
      setDayProgress?: (p: number) => void;
      toggleMute?: () => boolean;
      dismissReading?: () => void;
      pressSpecimen?: () => void;
      toggleHelp?: () => boolean;
      setHelpOpen?: (open: boolean) => void;
      tryInteract?: () => boolean;
      setPlayerPos?: (x: number, y: number) => void;
      setGuide?: (placeId: string | null) => void;
      startGame?: (mode?: PlayMode) => void;
    };
  }
}
