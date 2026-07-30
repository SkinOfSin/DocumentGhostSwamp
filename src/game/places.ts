/** Cabins, boats, specimens — Places journal + lantern / companion gifts. */

import type { PropKind } from "./types";

export type SpecimenId =
  | "leaf"
  | "moss"
  | "bone"
  | "flower"
  | "mushroom"
  | "lure"
  | "bottle";

/** Pets + soft place feel — no floating orbs */
export type SpecimenEffect =
  | "dragonfly"
  | "frog_friend"
  | "deer_friend"
  | "firefly_dance"
  | "moth_friend"
  | "fish_glint"
  | "water_ring";

export interface PlaceDef {
  id: string;
  kind: "cabin" | "boat" | "pier";
  propKinds: PropKind[];
  title: string;
  note: string;
  echoNote: string;
  specimenId: SpecimenId;
  specimenName: string;
  specimenSprite: string;
  sketchSprite: string;
  lanternColor: [number, number, number];
  effect: SpecimenEffect;
  effectDuration: number;
  effectLabel: string;
  effectDesc: string;
}

export const PLACE_DEFS: PlaceDef[] = [
  {
    id: "cabin-tin",
    kind: "cabin",
    propKinds: ["cabinTin"],
    title: "Fish camp — tin roof",
    note: "Somebody left a pot of coffee grounds and a rosary on the sill. The tin ticks in the heat like a second clock. On the wall, scratched: DON’T FEED WHAT ANSWERS AFTER DARK.",
    echoNote:
      "Under the coffee tin: a second scratch you missed — “Document what answers. Do not answer back.” Your lantern warms to leaf-gold.",
    specimenId: "leaf",
    specimenName: "Pressed cypress leaf",
    specimenSprite: "/sprites/specimen-leaf.png",
    sketchSprite: "/sprites/cabin-tin.png",
    lanternColor: [200, 220, 80],
    effect: "dragonfly",
    effectDuration: 26,
    effectLabel: "Leaf-gold lantern",
    effectDesc: "Lantern turns leaf-gold. A dragonfly rides with you a while.",
  },
  {
    id: "cabin-sunk",
    kind: "cabin",
    propKinds: ["cabinSunk"],
    title: "Half-sunk camp",
    note: "Water takes an inch a year and never gives it back. Boots by the door still hold the shape of a man who walked into the channel following a green light. The rocker is gone. The posts remain.",
    echoNote:
      "Between the floorboards: a soaked scrap — “The green light was only the water remembering.” Lantern goes wet-moss green.",
    specimenId: "moss",
    specimenName: "Spanish moss strand",
    specimenSprite: "/sprites/specimen-moss.png",
    sketchSprite: "/sprites/cabin-sunk.png",
    lanternColor: [70, 190, 110],
    effect: "frog_friend",
    effectDuration: 28,
    effectLabel: "Moss-green lantern",
    effectDesc: "Lantern glows moss green. A small crowned frog hops after you.",
  },
  {
    id: "cabin-boarded",
    kind: "cabin",
    propKinds: ["cabinBoarded"],
    title: "Boarded shack",
    note: "NO TRESPASSING, twice. Under the boards, a child’s chalk sun. Under that, adult handwriting: She sings on the old line. If you hear her, you already stayed too long.",
    echoNote:
      "Behind the chalk sun: “Count the boards. One is newer. Don’t open it after dark.” Lantern pales to bone-white.",
    specimenId: "bone",
    specimenName: "Small pale bone",
    specimenSprite: "/sprites/specimen-bone.png",
    sketchSprite: "/sprites/cabin-boarded.png",
    lanternColor: [230, 235, 245],
    effect: "moth_friend",
    effectDuration: 24,
    effectLabel: "Bone-pale lantern",
    effectDesc: "Lantern turns bone-pale. Pale moths drift near your shoulder.",
  },
  {
    id: "cabin-rocker",
    kind: "cabin",
    propKinds: ["cabinRocker"],
    title: "Lantern porch",
    note: "The rocker still moves when there’s no wind. Oil in the lantern smells of citrus and iron. A note under the cushion: For the one who documents — the moss remembers kindness. The water does not.",
    echoNote:
      "Pressed in the cushion seam: “Kindness is a light you carry. Don’t set it down in Manchac.” Lantern blushes rose.",
    specimenId: "flower",
    specimenName: "Night-bloom flower",
    specimenSprite: "/sprites/specimen-flower.png",
    sketchSprite: "/sprites/cabin-rocker.png",
    lanternColor: [255, 120, 170],
    effect: "firefly_dance",
    effectDuration: 26,
    effectLabel: "Rose-gold lantern",
    effectDesc: "Lantern blushes rose-gold. Soft fireflies circle close (no harsh ticks).",
  },
  {
    id: "cabin-forest",
    kind: "cabin",
    propKinds: ["cabin"],
    title: "Old forest house",
    note: "Planks breathe. Spanish moss hangs like unfinished prayers. Someone stacked field guides and a cracked mirror. In the glass: not your face first — the trees behind you, closer than they should be.",
    echoNote:
      "On the mirror’s silver back (scratched tiny): “If the trees stand nearer, you are reading correctly.” Lantern goes violet.",
    specimenId: "mushroom",
    specimenName: "Bayou mushrooms",
    specimenSprite: "/sprites/specimen-mushroom.png",
    sketchSprite: "/sprites/cabin.png",
    lanternColor: [170, 90, 240],
    effect: "deer_friend",
    effectDuration: 28,
    effectLabel: "Violet lantern",
    effectDesc: "Lantern turns violet. A soft-eyed deer walks with you a while.",
  },
  {
    id: "pier-nets",
    kind: "pier",
    propKinds: ["pierNets", "pierLantern", "pier"],
    title: "Old fishing pier",
    note: "Boards complain underfoot. A rusted nail holds a scrap of net and a feathered lure someone meant to cast again and never did. The channel below keeps its secrets.",
    echoNote:
      "Tied in the net mesh: “Cast for fish. Document for truth. Never confuse the two.” Lantern warms like pier brass.",
    specimenId: "lure",
    specimenName: "Feathered brass lure",
    specimenSprite: "/sprites/specimen-lure.png",
    sketchSprite: "/sprites/pier-nets.png",
    lanternColor: [255, 170, 50],
    effect: "fish_glint",
    effectDuration: 22,
    effectLabel: "Brass pier lantern",
    effectDesc: "Lantern warms brass-gold. Little fish glints by your feet in the shallows.",
  },
  {
    id: "canoe-find",
    kind: "boat",
    propKinds: ["canoe", "pierDock"],
    title: "Old canoe",
    note: "Pirogue wood swollen with years of blackwater. Under the seat: a corked bottle and a paddle charm. The note inside is water-soft — only a few words still clear: Come home before the moss walks.",
    echoNote:
      "The rest of the bottle note, readable once pressed dry: “…and if the moss walks, write faster than it steps.” Lantern cools river-blue.",
    specimenId: "bottle",
    specimenName: "Message bottle & paddle charm",
    specimenSprite: "/sprites/specimen-bottle.png",
    sketchSprite: "/sprites/canoe.png",
    lanternColor: [80, 170, 230],
    effect: "water_ring",
    effectDuration: 22,
    effectLabel: "River-blue lantern",
    effectDesc: "Lantern cools river-blue. Soft water rings at your ankles.",
  },
];

export function placeByProp(kind: PropKind): PlaceDef | undefined {
  return PLACE_DEFS.find((p) => p.propKinds.includes(kind));
}

export function placeById(id: string): PlaceDef | undefined {
  return PLACE_DEFS.find((p) => p.id === id);
}

export function lanternMix(colors: [number, number, number][]): [number, number, number] {
  if (!colors.length) return [255, 200, 120];
  const n = colors.length;
  const r = Math.round(colors.reduce((s, c) => s + c[0], 0) / n);
  const g = Math.round(colors.reduce((s, c) => s + c[1], 0) / n);
  const b = Math.round(colors.reduce((s, c) => s + c[2], 0) / n);
  return [r, g, b];
}

export const PLACE_SLOTS: { id: string; x: number; y: number }[] = [
  { id: "cabin-tin", x: 420, y: 380 },
  { id: "cabin-sunk", x: 1980, y: 420 },
  { id: "cabin-boarded", x: 520, y: 1420 },
  { id: "cabin-rocker", x: 1880, y: 1480 },
  { id: "cabin-forest", x: 1200, y: 280 },
  { id: "pier-nets", x: 2100, y: 900 },
  { id: "canoe-find", x: 320, y: 980 },
];
