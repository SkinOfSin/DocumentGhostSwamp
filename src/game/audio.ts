/**
 * Bayou soundscape — synthesized SFX, no continuous music beds.
 */

let ctx: AudioContext | null = null;
let unlocked = false;
let muted = false;
let masterGain: GainNode | null = null;
let musicGain: GainNode | null = null;
let sfxGain: GainNode | null = null;
let ambienceNodes: AudioNode[] = [];
let musicPhase: string | null = null;
const timers: number[] = [];

function ac(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  return ctx;
}

function ensureGraph() {
  const c = ac();
  if (!c) return null;
  if (!masterGain) {
    masterGain = c.createGain();
    masterGain.gain.value = muted ? 0 : 0.85;
    masterGain.connect(c.destination);
    musicGain = c.createGain();
    musicGain.gain.value = 0.22;
    musicGain.connect(masterGain);
    sfxGain = c.createGain();
    sfxGain.gain.value = 0.72;
    sfxGain.connect(masterGain);
  }
  return c;
}

export function isMuted() {
  return muted;
}

export function setMuted(m: boolean) {
  muted = m;
  if (masterGain) {
    masterGain.gain.setTargetAtTime(m ? 0 : 0.85, ac()?.currentTime ?? 0, 0.05);
  }
}

export function toggleMute() {
  setMuted(!muted);
  return muted;
}

export async function unlockAudio() {
  const c = ensureGraph();
  if (!c) return;
  if (c.state === "suspended") {
    try {
      await c.resume();
    } catch {
      /* ignore */
    }
  }
  unlocked = c.state === "running";
}

function envGain(
  c: AudioContext,
  t0: number,
  attack: number,
  hold: number,
  release: number,
  peak = 0.2,
) {
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(peak, t0 + attack);
  g.gain.setValueAtTime(peak, t0 + attack + hold);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + hold + release);
  return g;
}

function sfxOut() {
  ensureGraph();
  return sfxGain;
}

function musicOut() {
  ensureGraph();
  return musicGain;
}

/** Soft “jug-o-rum” croaks — airy, not a drum thump */
/** Bayou bullfrog — short croak, not a soft drum thump */
export function playBullfrog() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  // single “rrrum” with a little chirp — mid-low, not sub-kick
  const osc = c.createOscillator();
  const g = envGain(c, t0, 0.03, 0.05, 0.2, 0.055);
  osc.type = "triangle";
  osc.frequency.setValueAtTime(210, t0);
  osc.frequency.exponentialRampToValueAtTime(145, t0 + 0.12);
  osc.frequency.exponentialRampToValueAtTime(175, t0 + 0.28);
  const f = c.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = 280;
  f.Q.value = 2.2;
  osc.connect(f);
  f.connect(g);
  g.connect(out);
  osc.start(t0);
  osc.stop(t0 + 0.35);
  // very soft second “gup” — higher, less thumpy
  if (Math.random() > 0.4) {
    const o2 = c.createOscillator();
    const g2 = envGain(c, t0 + 0.16, 0.02, 0.04, 0.14, 0.03);
    o2.type = "sine";
    o2.frequency.setValueAtTime(260, t0 + 0.16);
    o2.frequency.exponentialRampToValueAtTime(180, t0 + 0.32);
    o2.connect(g2);
    g2.connect(out);
    o2.start(t0 + 0.16);
    o2.stop(t0 + 0.4);
  }
}

export function playBird() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  const notes = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < notes; i++) {
    const osc = c.createOscillator();
    const g = envGain(c, t0 + i * 0.08, 0.008, 0.03, 0.1, 0.05);
    osc.type = "sine";
    const base = 720 + Math.random() * 280;
    osc.frequency.setValueAtTime(base, t0 + i * 0.08);
    osc.frequency.exponentialRampToValueAtTime(base * 0.82, t0 + i * 0.08 + 0.11);
    const f = c.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = 1600;
    osc.connect(f);
    f.connect(g);
    g.connect(out);
    osc.start(t0 + i * 0.08);
    osc.stop(t0 + i * 0.08 + 0.18);
  }
}

export function playCicada() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  const osc = c.createOscillator();
  const g = envGain(c, t0, 0.08, 0.22, 0.35, 0.028);
  osc.type = "triangle";
  osc.frequency.value = 280 + Math.random() * 60;
  const f = c.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = 900;
  f.Q.value = 1.2;
  osc.connect(f);
  f.connect(g);
  g.connect(out);
  osc.start(t0);
  osc.stop(t0 + 0.65);
}

export function playWaterEnter() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  const len = 0.45;
  const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    const env = Math.pow(1 - i / data.length, 1.6);
    data[i] = (Math.random() * 2 - 1) * env + Math.sin(i * 0.02) * 0.15 * env;
  }
  const src = c.createBufferSource();
  src.buffer = buffer;
  const filter = c.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 780;
  filter.Q.value = 0.7;
  const g = envGain(c, t0, 0.01, 0.08, 0.3, 0.16);
  src.connect(filter);
  filter.connect(g);
  g.connect(out);
  src.start(t0);
  src.stop(t0 + len);
  const osc = c.createOscillator();
  const og = envGain(c, t0, 0.01, 0.04, 0.2, 0.08);
  osc.type = "sine";
  osc.frequency.setValueAtTime(180, t0);
  osc.frequency.exponentialRampToValueAtTime(70, t0 + 0.25);
  osc.connect(og);
  og.connect(out);
  osc.start(t0);
  osc.stop(t0 + 0.35);
}

export function playOwl() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  for (const [i, f] of [400, 320].entries()) {
    const osc = c.createOscillator();
    const g = envGain(c, t0 + i * 0.22, 0.04, 0.12, 0.35, 0.085);
    osc.type = "sine";
    osc.frequency.setValueAtTime(f, t0 + i * 0.22);
    osc.frequency.exponentialRampToValueAtTime(f * 0.75, t0 + i * 0.22 + 0.3);
    osc.connect(g);
    g.connect(out);
    osc.start(t0 + i * 0.22);
    osc.stop(t0 + i * 0.22 + 0.55);
  }
}

export function playThunder() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  const len = 1.2;
  const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 1.5);
  }
  const src = c.createBufferSource();
  src.buffer = buffer;
  const filter = c.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 280;
  const g = envGain(c, t0, 0.02, 0.2, 0.9, 0.18);
  src.connect(filter);
  filter.connect(g);
  g.connect(out);
  src.start(t0);
  src.stop(t0 + len);
}

/** Walk thumps removed — kept as silent stub if anything still calls it */
export function playWadestep() {}

export function playWoodCreak() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  const osc = c.createOscillator();
  const g = envGain(c, t0, 0.01, 0.08, 0.22, 0.06);
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(180, t0);
  osc.frequency.exponentialRampToValueAtTime(90, t0 + 0.25);
  const f = c.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = 400;
  osc.connect(f);
  f.connect(g);
  g.connect(out);
  osc.start(t0);
  osc.stop(t0 + 0.35);
}

export function playCabinApproach() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  const osc = c.createOscillator();
  const g = envGain(c, t0, 0.015, 0.06, 0.28, 0.045);
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(140 + Math.random() * 40, t0);
  osc.frequency.exponentialRampToValueAtTime(70, t0 + 0.32);
  const f = c.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = 320;
  f.Q.value = 1.2;
  osc.connect(f);
  f.connect(g);
  g.connect(out);
  osc.start(t0);
  osc.stop(t0 + 0.42);
}

export function playCanoe() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  {
    const osc = c.createOscillator();
    const g = envGain(c, t0, 0.005, 0.04, 0.18, 0.1);
    osc.type = "sine";
    osc.frequency.setValueAtTime(95, t0);
    osc.frequency.exponentialRampToValueAtTime(48, t0 + 0.2);
    osc.connect(g);
    g.connect(out);
    osc.start(t0);
    osc.stop(t0 + 0.28);
  }
  {
    const osc = c.createOscillator();
    const g = envGain(c, t0 + 0.08, 0.01, 0.05, 0.2, 0.04);
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, t0 + 0.08);
    osc.frequency.exponentialRampToValueAtTime(110, t0 + 0.28);
    const f = c.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 500;
    osc.connect(f);
    f.connect(g);
    g.connect(out);
    osc.start(t0 + 0.08);
    osc.stop(t0 + 0.38);
  }
  {
    const len = 0.4;
    const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 1.8);
    }
    const src = c.createBufferSource();
    src.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 700;
    const g = envGain(c, t0 + 0.05, 0.02, 0.08, 0.25, 0.09);
    src.connect(filter);
    filter.connect(g);
    g.connect(out);
    src.start(t0 + 0.05);
    src.stop(t0 + 0.05 + len);
  }
}

/** Pier board walk thumps removed */
export function playPierBoard() {}

/** Soft firefly tick — quiet mid click */
export function playFireflyTick() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  const len = 0.04;
  const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
  }
  const src = c.createBufferSource();
  src.buffer = buffer;
  const f = c.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = 900;
  f.Q.value = 2;
  const g = envGain(c, t0, 0.002, 0.008, 0.03, 0.012);
  src.connect(f);
  f.connect(g);
  g.connect(out);
  src.start(t0);
  src.stop(t0 + len);
}

let hollowWindNodes: AudioNode[] = [];
let hollowWindOn = false;

export function startHollowWind() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted || hollowWindOn) return;
  hollowWindOn = true;
  const len = 3;
  const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.6;
  }
  const src = c.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const filter = c.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 280;
  filter.Q.value = 0.5;
  const g = c.createGain();
  g.gain.value = 0.0001;
  g.gain.exponentialRampToValueAtTime(0.028, c.currentTime + 1.8);
  src.connect(filter);
  filter.connect(g);
  g.connect(out);
  src.start();
  hollowWindNodes = [src, filter, g];
}

export function stopHollowWind() {
  for (const n of hollowWindNodes) {
    try {
      if ("stop" in n && typeof (n as AudioBufferSourceNode).stop === "function") {
        (n as AudioBufferSourceNode).stop();
      }
      n.disconnect();
    } catch {
      /* ignore */
    }
  }
  hollowWindNodes = [];
  hollowWindOn = false;
}

/** Collect chimes off */
export function playDocumentChime() {}
export function playPageFind() {}
export function playSpecimenCollect() {}

export function playCreatureCall(kind: "tiny" | "frog" | "bird" | "ghost" | "beast" | "water") {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  if (kind === "tiny") {
    for (const [i, f] of [420, 520, 480].entries()) {
      const osc = c.createOscillator();
      const g = envGain(c, t0 + i * 0.05, 0.01, 0.05, 0.18, 0.04);
      osc.type = "sine";
      osc.frequency.value = f;
      osc.connect(g);
      g.connect(out);
      osc.start(t0 + i * 0.05);
      osc.stop(t0 + i * 0.05 + 0.28);
    }
  } else if (kind === "frog") {
    // softer near-frog — same airy croak family, not thump
    const osc = c.createOscillator();
    const g = envGain(c, t0, 0.03, 0.06, 0.22, 0.08);
    osc.type = "sine";
    osc.frequency.setValueAtTime(150, t0);
    osc.frequency.exponentialRampToValueAtTime(100, t0 + 0.2);
    const f = c.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 240;
    osc.connect(f);
    f.connect(g);
    g.connect(out);
    osc.start(t0);
    osc.stop(t0 + 0.35);
  } else if (kind === "bird") {
    for (let i = 0; i < 2; i++) {
      const osc = c.createOscillator();
      const g = envGain(c, t0 + i * 0.07, 0.01, 0.04, 0.12, 0.07);
      osc.type = "sine";
      osc.frequency.setValueAtTime(980 - i * 120, t0 + i * 0.07);
      osc.frequency.exponentialRampToValueAtTime(720, t0 + i * 0.07 + 0.12);
      const f = c.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.value = 1400;
      osc.connect(f);
      f.connect(g);
      g.connect(out);
      osc.start(t0 + i * 0.07);
      osc.stop(t0 + i * 0.07 + 0.22);
    }
  } else if (kind === "ghost") {
    const osc = c.createOscillator();
    const g = envGain(c, t0, 0.05, 0.2, 0.55, 0.09);
    osc.type = "sine";
    osc.frequency.setValueAtTime(180, t0);
    osc.frequency.exponentialRampToValueAtTime(95, t0 + 0.6);
    osc.connect(g);
    g.connect(out);
    osc.start(t0);
    osc.stop(t0 + 0.85);
    const o2 = c.createOscillator();
    const g2 = envGain(c, t0 + 0.05, 0.04, 0.2, 0.45, 0.04);
    o2.type = "triangle";
    o2.frequency.setValueAtTime(240, t0 + 0.05);
    o2.frequency.exponentialRampToValueAtTime(120, t0 + 0.55);
    o2.connect(g2);
    g2.connect(out);
    o2.start(t0 + 0.05);
    o2.stop(t0 + 0.8);
  } else if (kind === "water") {
    const len = 0.32;
    const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 1.4);
    }
    const src = c.createBufferSource();
    src.buffer = buffer;
    const f = c.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 650;
    const g = envGain(c, t0, 0.01, 0.06, 0.2, 0.14);
    src.connect(f);
    f.connect(g);
    g.connect(out);
    src.start(t0);
    src.stop(t0 + len);
  } else {
    // beast rustle — leaf noise, not bass thump
    const len = 0.22;
    const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 1.5);
    }
    const src = c.createBufferSource();
    src.buffer = buffer;
    const f = c.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 480;
    f.Q.value = 0.8;
    const g = envGain(c, t0, 0.01, 0.04, 0.15, 0.055);
    src.connect(f);
    f.connect(g);
    g.connect(out);
    src.start(t0);
    src.stop(t0 + len);
  }
}

let rainNodes: AudioNode[] = [];
let rainRunning = false;

export function startRain() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted || rainRunning) return;
  rainRunning = true;
  const len = 2;
  const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = c.createBufferSource();
  src.buffer = buffer;
  src.loop = true;
  const filter = c.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 1200;
  filter.Q.value = 0.4;
  const g = c.createGain();
  g.gain.value = 0.0001;
  g.gain.exponentialRampToValueAtTime(0.045, c.currentTime + 1.2);
  src.connect(filter);
  filter.connect(g);
  g.connect(out);
  src.start();
  rainNodes = [src, filter, g];
}

export function stopRain() {
  for (const n of rainNodes) {
    try {
      if ("stop" in n && typeof (n as AudioBufferSourceNode).stop === "function") {
        (n as AudioBufferSourceNode).stop();
      }
      n.disconnect();
    } catch {
      /* ignore */
    }
  }
  rainNodes = [];
  rainRunning = false;
}

export function playSoftLightning() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  const len = 0.35;
  const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
  }
  const src = c.createBufferSource();
  src.buffer = buffer;
  const filter = c.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 800;
  const g = envGain(c, t0, 0.001, 0.02, 0.25, 0.12);
  src.connect(filter);
  filter.connect(g);
  g.connect(out);
  src.start(t0);
  src.stop(t0 + len);
  setTimeout(() => playThunder(), 280);
}

export function playHeartSkip() {
  const c = ensureGraph();
  const out = sfxOut();
  if (!c || !out || !unlocked || muted) return;
  const t0 = c.currentTime;
  for (const [i, f] of [90, 70].entries()) {
    const osc = c.createOscillator();
    const g = envGain(c, t0 + i * 0.14, 0.01, 0.05, 0.2, 0.12);
    osc.type = "sine";
    osc.frequency.value = f;
    osc.connect(g);
    g.connect(out);
    osc.start(t0 + i * 0.14);
    osc.stop(t0 + i * 0.14 + 0.35);
  }
  const h = c.createOscillator();
  const hg = envGain(c, t0 + 0.08, 0.02, 0.1, 0.4, 0.035);
  h.type = "sine";
  h.frequency.value = 140;
  h.connect(hg);
  hg.connect(out);
  h.start(t0 + 0.08);
  h.stop(t0 + 0.65);
}

function stopAmbience() {
  for (const n of ambienceNodes) {
    try {
      if ("stop" in n && typeof (n as OscillatorNode).stop === "function") {
        (n as OscillatorNode).stop();
      }
      n.disconnect();
    } catch {
      /* ignore */
    }
  }
  ambienceNodes = [];
  musicPhase = null;
}

type MusicPhase =
  | "title"
  | "dawn"
  | "sunrise"
  | "morning"
  | "afternoon"
  | "evening"
  | "dusk"
  | "night";

/** Music beds / low drones removed */
export function setMusicPhase(phase: MusicPhase | string) {
  if (musicPhase === phase) return;
  stopAmbience();
  musicPhase = phase;
}

export function startTitleMusic() {
  void unlockAudio().then(() => setMusicPhase("title"));
}

export function disposeAudio() {
  stopAmbience();
  stopRain();
  stopHollowWind();
  for (const t of timers) window.clearTimeout(t);
  timers.length = 0;
}
