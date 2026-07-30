/** Map regions — fishing camp, deep channel, Manchac Ghost Hollow */

export type ZoneId = "camp" | "channel" | "hollow" | "open";

const WORLD_W_HALF = 1200;
const WORLD_H_HALF = 900;

/** Ghost Hollow / Manchac edge — NW of the map */
export const HOLLOW = {
  x0: 80,
  y0: 80,
  x1: 980,
  y1: 780,
  name: "Manchac Ghost Hollow",
  enterToast: "The air goes thin — you’ve entered Manchac Ghost Hollow…",
  leaveToast: "The birds return. Ghost Hollow falls behind.",
};

/** Deep blackwater channel band across mid-map */
export const CHANNEL = {
  // soft band: more water / darker in middle strip
  cy: 0.52,
  thickness: 0.14,
};

/** Lighter fishing-camp feel near center spawn */
export const CAMP = {
  cx: WORLD_W_HALF,
  cy: WORLD_H_HALF,
  r: 280,
};

export function inHollow(x: number, y: number): boolean {
  return x >= HOLLOW.x0 && x <= HOLLOW.x1 && y >= HOLLOW.y0 && y <= HOLLOW.y1;
}

export function hollowCenter(): { x: number; y: number } {
  return { x: (HOLLOW.x0 + HOLLOW.x1) / 2, y: (HOLLOW.y0 + HOLLOW.y1) / 2 };
}

export function zoneAt(x: number, y: number): ZoneId {
  if (inHollow(x, y)) return "hollow";
  const dx = x - CAMP.cx;
  const dy = y - CAMP.cy;
  if (Math.hypot(dx, dy) < CAMP.r) return "camp";
  // channel approx using world height ratio
  const ny = y / 1800;
  if (Math.abs(ny - CHANNEL.cy) < CHANNEL.thickness * 0.5) return "channel";
  return "open";
}

/** Hollow cryptids prefer this region */
export const HOLLOW_CREATURE_IDS = new Set([
  "manchac-ghost",
  "voodoo-woman",
  "pere-malfait",
  "rougarou",
  "honey-island",
  "feu-follet",
  "lafitte",
  "grunch",
  "woman-white",
  "letiche",
  "rail-passenger",
]);
