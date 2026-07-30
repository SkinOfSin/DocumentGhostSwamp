import { useCallback, useEffect, useRef, useState } from "react";
import {
  BookOpen,
  CircleHelp,
  CloudFog,
  CloudRain,
  Map as MapIcon,
  MapPin,
  Moon,
  ScrollText,
  Sun,
  Sunrise,
  Sunset,
  Volume2,
  VolumeX,
} from "lucide-react";
import { BayouEngine } from "../game/engine";
import { CREATURE_DEFS } from "../game/creatures";
import { GRIMOIRE_PAGES } from "../game/lore";
import { unlockAudio } from "../game/audio";
import type { GameSnapshot, PlayMode, TimePhase } from "../game/types";

const emptySnap: GameSnapshot = {
  phase: "title",
  dayProgress: 0,
  timePhase: "dawn",
  timeLabel: "5:30 AM",
  health: 100,
  maxHealth: 100,
  documented: [],
  totalCreatures: CREATURE_DEFS.length,
  toast: null,
  nearCreature: null,
  shake: 0,
  message: null,
  docCharge: 0,
  pagesFound: [],
  totalPages: GRIMOIRE_PAGES.length,
  lantern: false,
  muted: false,
  nearInteract: null,
  sighting: null,
  cabinNoteTitle: null,
  cabinNoteBody: null,
  grimoireOpen: false,
  lastPageTitle: null,
  lastPageBody: null,
  reading: false,
  readingTitle: null,
  readingKind: null,
  specimens: [],
  totalSpecimens: 7,
  places: [],
  activeEffects: [],
  lanternColor: "rgb(255,200,120)",
  rainActive: false,
  pendingSpecimen: null,
  helpOpen: false,
  floraDocumented: [],
  totalFlora: 0,
  nearFlora: null,
  inHollow: false,
  zoneLabel: null,
  playMode: "wander",
  guide: null,
  endReason: null,
};

function TimeIcon({ phase }: { phase: TimePhase }) {
  const cls = "size-4 shrink-0";
  if (phase === "dawn") return <CloudFog className={cls} />;
  if (phase === "sunrise") return <Sunrise className={cls} />;
  if (phase === "morning") return <Sunrise className={cls} />;
  if (phase === "afternoon") return <Sun className={cls} />;
  if (phase === "evening") return <Sunset className={cls} />;
  if (phase === "dusk") return <Sunset className={cls} />;
  return <Moon className={cls} />;
}

function phaseLabel(phase: TimePhase): string {
  switch (phase) {
    case "dawn":
      return "Early mist";
    case "sunrise":
      return "Sunrise";
    case "morning":
      return "Morning";
    case "afternoon":
      return "Afternoon";
    case "evening":
      return "Evening";
    case "dusk":
      return "Dusk";
    case "night":
      return "Deep night";
  }
}

function readingKindLabel(kind: GameSnapshot["readingKind"]): string {
  if (kind === "creature") return "Field entry";
  if (kind === "page") return "Ghost Swamp page";
  if (kind === "cabin" || kind === "place") return "Place note";
  if (kind === "story") return "Field note";
  return "Reading";
}

export function BayouGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<BayouEngine | null>(null);
  const stickRef = useRef<HTMLDivElement>(null);
  const [snap, setSnap] = useState<GameSnapshot>(emptySnap);
  const [ready, setReady] = useState(false);
  const [journalTab, setJournalTab] = useState<
    "creatures" | "grimoire" | "places" | "pressed"
  >("creatures");
  const [knob, setKnob] = useState({ x: 0, y: 0 });
  const stickActive = useRef(false);
  const stickPointerId = useRef<number | null>(null);
  const STICK_R = 48;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const engine = new BayouEngine(canvas);
    engineRef.current = engine;
    engine.onSnapshot(setSnap);
    engine.resize();
    const onResize = () => engine.resize();
    window.addEventListener("resize", onResize);
    let cancelled = false;
    engine.load().then(() => {
      if (cancelled) return;
      setReady(true);
      engine.start();
      engine.emit();
    });
    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      engine.stop();
      engineRef.current = null;
    };
  }, []);

  const start = useCallback((mode: PlayMode = "wander") => {
    void unlockAudio();
    engineRef.current?.startGame(mode);
  }, []);

  const onStickEnd = useCallback(() => {
    stickActive.current = false;
    stickPointerId.current = null;
    setKnob({ x: 0, y: 0 });
    engineRef.current?.setTouchMove(0, 0, false);
    engineRef.current?.clearTouchMove();
  }, []);

  const onStickMove = useCallback((clientX: number, clientY: number) => {
    const el = stickRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = clientX - cx;
    let dy = clientY - cy;
    const len = Math.hypot(dx, dy);
    if (len > STICK_R && len > 0.001) {
      dx = (dx / len) * STICK_R;
      dy = (dy / len) * STICK_R;
    }
    if (Math.hypot(dx, dy) < STICK_R * 0.12) {
      dx = 0;
      dy = 0;
    }
    setKnob({ x: dx, y: dy });
    engineRef.current?.setTouchMove(dx / STICK_R, dy / STICK_R, true);
  }, []);

  const onDoc = useCallback(() => {
    onStickEnd();
    engineRef.current?.documentNearest();
  }, [onStickEnd]);

  const onInteract = useCallback(() => {
    onStickEnd();
    engineRef.current?.tryInteract();
  }, [onStickEnd]);

  const onJournal = useCallback(() => {
    onStickEnd();
    engineRef.current?.openJournal();
  }, [onStickEnd]);

  const onMute = useCallback(() => {
    engineRef.current?.toggleMute();
  }, []);

  const dismissReading = useCallback(() => {
    onStickEnd();
    engineRef.current?.dismissReading();
  }, [onStickEnd]);

  const pressSpecimen = useCallback(() => {
    onStickEnd();
    engineRef.current?.pressSpecimen();
  }, [onStickEnd]);

  const onHelp = useCallback(() => {
    onStickEnd();
    engineRef.current?.toggleHelp();
  }, [onStickEnd]);

  const closeHelp = useCallback(() => {
    onStickEnd();
    engineRef.current?.setHelpOpen(false);
  }, [onStickEnd]);

  // Global safety: if pointer ends anywhere, stop stick
  useEffect(() => {
    const stop = () => {
      if (stickActive.current) onStickEnd();
    };
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    window.addEventListener("blur", stop);
    return () => {
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
      window.removeEventListener("blur", stop);
    };
  }, [onStickEnd]);

  const playing = snap.phase === "playing" || snap.phase === "journal";
  const near = snap.nearCreature;
  const canDoc = !!near;

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-bg text-fg touch-none select-none">
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>

      {snap.phase === "title" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-10 sm:justify-end sm:pb-14">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/title-bg.jpg)" }}
            aria-hidden
          />
          {/* Light top, stronger bottom so title reads once without fighting the art */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-transparent" />
          <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center gap-3 px-6 text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-primary">
              Louisiana · mist to night
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg drop-shadow-md sm:text-5xl">
              Document Ghost Swamp
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
              A walk through Louisiana folklore, cryptids, and bayou creatures. Collect, read, and
              wander until dark.
            </p>
            <div className="mt-2 flex w-full max-w-sm flex-col gap-2">
              <button
                type="button"
                onClick={() => start("wander")}
                disabled={!ready}
                className="min-h-12 rounded-full bg-primary px-8 py-3 font-sans text-base font-semibold text-primary-fg shadow-lg shadow-primary/20 transition hover:brightness-110 disabled:opacity-50"
              >
                {ready ? "Wander · soft dusk" : "Loading…"}
              </button>
              <button
                type="button"
                onClick={() => start("midnight")}
                disabled={!ready}
                className="min-h-12 rounded-full border border-primary/40 bg-surface/80 px-8 py-3 font-sans text-sm font-semibold text-fg shadow-lg backdrop-blur-md transition hover:border-primary disabled:opacity-50"
              >
                Until midnight · hard close
              </button>
              <p className="text-center text-[11px] text-muted">
                Wander keeps your journal across soft dawns. Midnight ends the night if the ledger
                is unfinished.
              </p>
            </div>
            <button
              type="button"
              onClick={onHelp}
              className="min-h-11 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              How to play
            </button>
          </div>
        </div>
      )}

      {playing && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 p-3 sm:p-4">
            <div className="mx-auto flex max-w-3xl flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="pointer-events-auto flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2 rounded-xl border border-border/80 bg-surface/85 px-3 py-2 text-sm shadow-lg backdrop-blur-md">
                    <TimeIcon phase={snap.timePhase} />
                    <span className="font-medium">{phaseLabel(snap.timePhase)}</span>
                    <span className="text-muted">{snap.timeLabel}</span>
                    {snap.rainActive && <CloudRain className="size-4 text-primary" />}
                  </div>
                  {snap.zoneLabel && (
                    <div className="rounded-xl border border-primary/30 bg-surface/85 px-3 py-2 text-xs text-primary shadow-lg backdrop-blur-md">
                      {snap.zoneLabel}
                    </div>
                  )}
                  {snap.guide && (
                    <div className="rounded-xl border border-primary/40 bg-surface/85 px-3 py-2 text-xs text-primary shadow-lg backdrop-blur-md">
                      Compass · {snap.guide.title}
                    </div>
                  )}
                  <div className="rounded-xl border border-border/60 bg-surface/70 px-2.5 py-1.5 text-[10px] uppercase tracking-wider text-muted">
                    {snap.playMode === "midnight" ? "Until midnight" : "Wander"}
                  </div>
                  <button
                    type="button"
                    onClick={onHelp}
                    className="flex size-11 items-center justify-center rounded-xl border border-border/80 bg-surface/85 shadow-lg backdrop-blur-md"
                    aria-label="How to play"
                  >
                    <CircleHelp className="size-5 text-primary" />
                  </button>
                  <button
                    type="button"
                    onClick={onMute}
                    className="flex size-11 items-center justify-center rounded-xl border border-border/80 bg-surface/85 shadow-lg backdrop-blur-md"
                    aria-label={snap.muted ? "Unmute" : "Mute"}
                  >
                    {snap.muted ? (
                      <VolumeX className="size-4 text-muted" />
                    ) : (
                      <Volume2 className="size-4 text-primary" />
                    )}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={onJournal}
                  className="pointer-events-auto flex min-h-11 items-center gap-2 rounded-xl border border-border/80 bg-surface/85 px-3 py-2 text-sm font-medium shadow-lg backdrop-blur-md transition hover:bg-surface-raised"
                >
                  <BookOpen className="size-4 text-primary" />
                  <span>
                    {snap.documented.length}/{snap.totalCreatures}
                  </span>
                  <ScrollText className="size-3.5 text-muted" />
                  <span className="text-muted">
                    {snap.pagesFound.length}/{snap.totalPages}
                  </span>
                  <MapPin className="size-3.5 text-muted" />
                  <span className="text-muted">
                    {snap.specimens.length}/{snap.totalSpecimens}
                  </span>
                </button>
              </div>

              {snap.sighting && !snap.reading && (
                <p className="pointer-events-none mx-auto rounded-full border border-border/50 bg-surface/80 px-4 py-1.5 text-center text-xs italic text-muted backdrop-blur-md">
                  {snap.sighting}
                </p>
              )}

              {snap.nearInteract && !snap.reading && snap.phase === "playing" && (
                <button
                  type="button"
                  onClick={onInteract}
                  className="pointer-events-auto mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-2xl border border-border bg-surface/95 px-4 py-3 text-sm font-semibold text-fg shadow-lg active:scale-[0.98] sm:max-w-sm"
                >
                  <ScrollText className="size-5 text-primary" />
                  {snap.nearInteract}
                </button>
              )}

              {(near) && !snap.reading && snap.phase === "playing" && (
                <button
                  type="button"
                  onClick={onDoc}
                  className="pointer-events-auto mx-auto flex w-full max-w-md items-center gap-3 rounded-2xl border-2 border-primary/80 bg-primary/95 px-4 py-3 text-left text-primary-fg shadow-xl shadow-primary/30 active:scale-[0.98] sm:max-w-sm"
                >
                  <MapPin className="size-6 shrink-0 opacity-90" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wide opacity-80">
                      Something glows nearby
                    </span>
                    <span className="block text-base font-bold leading-tight">
                      Hold still or tap to document
                    </span>
                  </span>
                  <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-fg/15 text-xs font-bold">
                    <svg
                      className="absolute inset-0 size-12 -rotate-90"
                      viewBox="0 0 48 48"
                      aria-hidden
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.25"
                        strokeWidth="4"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${snap.docCharge * 125.6} 125.6`}
                      />
                    </svg>
                    <span className="relative z-10">{Math.round(snap.docCharge * 100)}%</span>
                  </span>
                </button>
              )}

              {snap.toast && !snap.reading && (
                <p className="pointer-events-none mx-auto max-w-md rounded-xl border border-border/60 bg-surface/90 px-4 py-2 text-center text-sm text-fg shadow-lg backdrop-blur-md">
                  {snap.toast}
                </p>
              )}

              {snap.activeEffects[0] && (
                <p className="pointer-events-none mx-auto text-center text-xs text-primary">
                  {snap.activeEffects[0].label} · {Math.ceil(snap.activeEffects[0].remaining)}s
                </p>
              )}
            </div>
          </div>

          {/* Mobile stick + Doc / Read */}
          {snap.phase === "playing" && !snap.reading && !snap.helpOpen && (
            <div className="pointer-events-none absolute bottom-5 left-3 z-40 flex flex-col items-start gap-3 sm:bottom-8 sm:left-6">
              <div
                ref={stickRef}
                className="pointer-events-auto relative size-[112px] touch-none rounded-full border-2 border-border/80 bg-surface/70 shadow-xl backdrop-blur-md active:bg-surface/85"
                style={{ touchAction: "none" }}
                onPointerDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  stickActive.current = true;
                  stickPointerId.current = e.pointerId;
                  try {
                    e.currentTarget.setPointerCapture(e.pointerId);
                  } catch {
                    /* ignore */
                  }
                  onStickMove(e.clientX, e.clientY);
                }}
                onPointerMove={(e) => {
                  if (!stickActive.current) return;
                  if (
                    stickPointerId.current !== null &&
                    e.pointerId !== stickPointerId.current
                  )
                    return;
                  e.preventDefault();
                  onStickMove(e.clientX, e.clientY);
                }}
                onPointerUp={(e) => {
                  e.preventDefault();
                  if (
                    stickPointerId.current !== null &&
                    e.pointerId !== stickPointerId.current
                  )
                    return;
                  try {
                    e.currentTarget.releasePointerCapture(e.pointerId);
                  } catch {
                    /* ignore */
                  }
                  onStickEnd();
                }}
                onPointerCancel={onStickEnd}
                onLostPointerCapture={onStickEnd}
              >
                {/* dead-zone ring */}
                <div className="pointer-events-none absolute inset-3 rounded-full border border-border/40" />
                {/* knob — position with left/top so it stays in the circle */}
                <div
                  className="pointer-events-none absolute size-12 rounded-full border-2 border-primary/50 bg-primary shadow-md"
                  style={{
                    left: `calc(50% + ${knob.x}px)`,
                    top: `calc(50% + ${knob.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>

              <div className="pointer-events-auto flex gap-2">
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onDoc();
                  }}
                  className={`min-h-12 min-w-[4.5rem] rounded-2xl border-2 px-4 text-sm font-bold shadow-lg backdrop-blur-md ${
                    canDoc
                      ? "border-primary bg-primary text-primary-fg"
                      : "border-border/80 bg-surface/90 text-muted"
                  }`}
                >
                  {canDoc ? "Document" : "Doc"}
                </button>
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onInteract();
                  }}
                  className={`min-h-12 min-w-[4.5rem] rounded-2xl border-2 px-4 text-sm font-bold shadow-lg backdrop-blur-md ${
                    snap.nearInteract
                      ? "border-primary bg-primary text-primary-fg"
                      : "border-border/80 bg-surface/90 text-fg"
                  }`}
                >
                  Read
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Help — grimoire style */}
      {snap.helpOpen && (
        <div className="absolute inset-0 z-50 flex items-end justify-center bg-bg/70 p-3 backdrop-blur-sm sm:items-center sm:p-6">
          <div className="relative flex max-h-[min(92dvh,760px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-primary/25 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a1f14] via-[#1a140e] to-[#0e0a08]" />
            <div className="absolute inset-2 rounded-xl border border-primary/15 bg-gradient-to-b from-[#3d2e1c]/85 to-[#1c1610]/92" />
            <div className="relative z-10 flex flex-col overflow-hidden rounded-xl">
              <div className="flex items-start justify-between gap-3 border-b border-primary/20 px-5 py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <BookOpen className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                      Field guide · time paused
                    </p>
                    <h2 className="font-display text-2xl font-semibold text-[#f0e6d0]">
                      How to walk Ghost Swamp
                    </h2>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeHelp}
                  className="min-h-11 rounded-lg border border-primary/30 bg-[#f0e6d0]/10 px-3 text-sm font-medium text-[#f0e6d0]"
                >
                  Close
                </button>
              </div>
              <div className="overflow-y-auto px-5 py-4 text-sm leading-relaxed text-[#c8b898]">
                <section className="mb-5 border-b border-primary/15 pb-4">
                  <h3 className="mb-1 font-display text-lg text-[#f0e6d0]">The idea</h3>
                  <p>
                    A <span className="text-[#f0e6d0]">documenting</span> walk — not a race. Soft
                    glows mark what still needs a page. Names wait in your journal.
                  </p>
                </section>
                <section className="mb-5 border-b border-primary/15 pb-4">
                  <h3 className="mb-1 font-display text-lg text-[#f0e6d0]">Move & document</h3>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>
                      <span className="text-[#f0e6d0]">Move</span> with stick or WASD
                    </li>
                    <li>
                      <span className="text-[#f0d070]">Gold glow</span> — creatures, pages, specimens
                    </li>
                    <li>Walk near a creature glow; hold still or tap Document</li>
                    <li>Read cabins / pier / canoe — turn on your lantern</li>
                  </ul>
                </section>
                <section className="mb-5 rounded-xl border border-primary/25 bg-primary/10 p-4">
                  <h3 className="mb-1 font-display text-lg text-primary">Turn on your lantern</h3>
                  <ol className="list-decimal space-y-1.5 pl-5 text-[#e8dcc0]">
                    <li>Walk up and tap Read at a cabin, pier, or canoe</li>
                    <li>Tap Turn on your lantern — color changes + a quiet companion</li>
                    <li>Read the place’s hidden echo; rekindle anytime</li>
                  </ol>
                </section>
                <section className="mb-2">
                  <h3 className="mb-1 font-display text-lg text-[#f0e6d0]">Journal</h3>
                  <p>
                    Book button or J — Creatures, Pages, Places, Pressed. Day freezes while
                    open.
                  </p>
                </section>
              </div>
              <div className="border-t border-primary/20 p-4">
                <button
                  type="button"
                  onClick={closeHelp}
                  className="min-h-12 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-fg"
                >
                  Close the guide · resume walk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Journal */}
      {snap.phase === "journal" && (
        <div className="absolute inset-0 z-40 flex items-end justify-center bg-bg/60 p-2 backdrop-blur-sm sm:items-center sm:p-6">
          <div className="relative flex max-h-[min(92dvh,820px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-primary/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a1f14] via-[#1a140e] to-[#0e0a08]" />
            <div className="absolute inset-2 rounded-xl border border-primary/15 bg-gradient-to-b from-[#3d2e1c]/80 to-[#1c1610]/90" />
            <div className="relative z-10 flex flex-col overflow-hidden rounded-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary/20 px-4 py-3 sm:px-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                    Field journal · time paused
                  </p>
                  <h2 className="font-display text-2xl font-semibold text-[#f0e6d0]">
                    Your field journal
                  </h2>
                  <p className="text-sm text-[#a89878]">
                    {snap.documented.length}/{snap.totalCreatures} creatures ·{" "}
                    {snap.pagesFound.length}/{snap.totalPages} pages · {snap.specimens.length}/
                    {snap.totalSpecimens} specimens
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onJournal}
                  className="min-h-11 rounded-lg border border-primary/30 bg-[#f0e6d0]/10 px-4 text-sm font-medium text-[#f0e6d0]"
                >
                  Close · resume day
                </button>
              </div>
              <div className="flex flex-wrap gap-2 border-b border-primary/15 px-4 py-2 sm:px-6">
                {(
                  [
                    ["creatures", "Creatures"],
                    ["grimoire", "Pages"],
                    ["places", "Places"],
                    ["pressed", "Pressed"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setJournalTab(id)}
                    className={`min-h-10 rounded-lg px-3 text-sm font-medium ${
                      journalTab === id
                        ? "bg-primary/25 text-primary"
                        : "text-[#a89878] hover:bg-[#f0e6d0]/5"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="overflow-y-auto px-4 py-4 sm:px-6" style={{ maxHeight: "60dvh" }}>
                {journalTab === "creatures" && (
                  <ul className="space-y-3">
                    {CREATURE_DEFS.map((c) => {
                      const got = snap.documented.includes(c.id);
                      return (
                        <li
                          key={c.id}
                          className={`rounded-xl border p-3 ${
                            got
                              ? "border-primary/20 bg-[#f0e6d0]/5"
                              : "border-primary/10 bg-black/20"
                          }`}
                        >
                          <p className="font-display text-lg text-[#f0e6d0]">{c.name}</p>
                          <p className="mt-1 text-sm text-[#a89878]">
                            {got ? c.lore : "Not yet documented — still out there in the bayou."}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {journalTab === "grimoire" && (
                  <ul className="space-y-3">
                    {GRIMOIRE_PAGES.map((page) => {
                      const got = snap.pagesFound.includes(page.id);
                      return (
                        <li
                          key={page.id}
                          className={`rounded-xl border p-3 ${
                            got
                              ? "border-primary/20 bg-[#f0e6d0]/5"
                              : "border-primary/10 bg-black/20 opacity-70"
                          }`}
                        >
                          <p className="font-display text-lg text-[#f0e6d0]">
                            {got ? page.title : "Sealed leaf"}
                          </p>
                          <p className="mt-1 text-sm text-[#a89878]">
                            {got ? page.body : "Find the parchment glow in the swamp."}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {journalTab === "places" && (
                  <div>
                    <p className="mb-3 flex items-center gap-2 text-sm text-[#a89878]">
                      <MapIcon className="size-4" /> Tap a pin or name for a compass hint
                    </p>
                    <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-primary/20 bg-[#0a1210]">
                      {snap.places.map((pl) => (
                        <button
                          key={pl.id}
                          type="button"
                          title={pl.title}
                          onClick={() => {
                            engineRef.current?.setGuide(pl.id);
                            onJournal();
                          }}
                          className={`absolute size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition ${
                            pl.visited
                              ? "border-primary bg-primary shadow-[0_0_10px_rgba(196,163,90,0.8)]"
                              : "border-[#5a5040] bg-[#2a2418]"
                          } ${snap.guide?.placeId === pl.id ? "ring-2 ring-primary ring-offset-1 ring-offset-[#0a1210]" : ""}`}
                          style={{
                            left: `${(pl.x / 2400) * 100}%`,
                            top: `${(pl.y / 1800) * 100}%`,
                          }}
                        />
                      ))}
                      <div
                        className="pointer-events-none absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ec8e8]"
                        style={{ left: "50%", top: "52%" }}
                        title="You start near center"
                      />
                    </div>
                    <ul className="space-y-3">
                      {snap.places.map((pl) => (
                        <li key={pl.id}>
                          <button
                            type="button"
                            onClick={() => {
                              engineRef.current?.setGuide(pl.id);
                              onJournal();
                            }}
                            className={`w-full rounded-xl border p-3 text-left transition hover:border-primary/40 ${
                              pl.visited
                                ? "border-primary/20 bg-[#f0e6d0]/5"
                                : "border-primary/10 bg-black/20"
                            }`}
                          >
                            <p className="font-display text-lg text-[#f0e6d0]">
                              {pl.visited ? "● " : "○ "}
                              {pl.title}
                            </p>
                            <p className="mt-1 text-sm text-[#a89878]">
                              {pl.visited
                                ? pl.note
                                : "Not visited — tap to set compass toward this place."}
                            </p>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {journalTab === "pressed" && (
                  <ul className="space-y-3">
                    {snap.places.map((pl) => {
                      const got = pl.specimenCollected;
                      return (
                        <li
                          key={pl.id}
                          className={`rounded-xl border p-3 ${
                            got
                              ? "border-primary/20 bg-[#f0e6d0]/5"
                              : "border-primary/10 bg-black/20"
                          }`}
                        >
                          <p className="font-display text-lg text-[#f0e6d0]">{pl.title}</p>
                          <p className="mt-1 text-sm text-[#a89878]">
                            {got
                              ? `${pl.effectLabel} — ${pl.effectDesc}`
                              : "Turn on your lantern here for a new color and a quiet companion."}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reading overlay */}
      {snap.reading && snap.cabinNoteBody && (
        <div className="absolute inset-0 z-40 flex items-end justify-center bg-bg/50 p-3 backdrop-blur-sm sm:items-center sm:p-6">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-primary/25 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3d2e1c] via-[#2a2014] to-[#1a140e]" />
            <div className="relative z-10 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                {readingKindLabel(snap.readingKind)} · time paused
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold text-[#f0e6d0]">
                {snap.readingTitle || snap.cabinNoteTitle}
              </h2>
              <p className="mt-4 max-h-[40dvh] overflow-y-auto text-sm leading-relaxed text-[#d4c4a0]">
                {snap.cabinNoteBody || snap.message}
              </p>
              <div className="mt-6 flex flex-col gap-2">
                {snap.pendingSpecimen && (
                  <button
                    type="button"
                    onClick={pressSpecimen}
                    className="min-h-12 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-fg"
                  >
                    {snap.pendingSpecimen.alreadyPressed
                      ? "Rekindle lantern"
                      : "Turn on your lantern"}
                  </button>
                )}
                <button
                  type="button"
                  onClick={dismissReading}
                  className="min-h-12 w-full rounded-full bg-[#2a2014] py-3 text-sm font-semibold text-[#f0e6d0]"
                >
                  {snap.pendingSpecimen ? "Just close the note" : "Close · continue walking"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {(snap.phase === "win" || snap.phase === "lose") && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-bg/80 p-6 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 text-center shadow-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              {snap.phase === "win" ? "Journal complete" : "Midnight closed the channel"}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              {snap.phase === "win" ? "The ledger is full" : "Ghost Swamp keeps its own"}
            </h2>
            {snap.endReason && (
              <p className="mt-3 text-sm leading-relaxed text-muted">{snap.endReason}</p>
            )}
            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => start("wander")}
                className="min-h-12 rounded-full bg-primary px-8 py-3 font-semibold text-primary-fg"
              >
                Wander again
              </button>
              <button
                type="button"
                onClick={() => start("midnight")}
                className="min-h-12 rounded-full border border-border px-8 py-3 font-semibold"
              >
                Until midnight
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
