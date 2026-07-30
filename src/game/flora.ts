/** Documentable trees, moss, and water life for the field journal. */

import type { PropKind } from "./types";

export interface FloraDef {
  id: string;
  name: string;
  category: "tree" | "moss" | "water" | "fungi";
  lore: string;
  sprite: string;
  /** Prop kinds that count as this flora */
  propKinds: PropKind[];
  docRange: number;
}

export const FLORA_DEFS: FloraDef[] = [
  {
    id: "bald-cypress",
    name: "Bald Cypress",
    category: "tree",
    lore: "King of the Louisiana swamp. Knees rise from blackwater like the backs of sleeping beasts; needles turn copper in fall.",
    sprite: "/sprites/cypress-1.png",
    propKinds: ["cypress"],
    docRange: 52,
  },
  {
    id: "moss-cypress",
    name: "Moss-Hung Cypress",
    category: "tree",
    lore: "Same cypress, dressed for church in Spanish moss. The drape softens the wind and hides more than birds.",
    sprite: "/sprites/cypress-moss.png",
    propKinds: ["cypressMoss"],
    docRange: 52,
  },
  {
    id: "water-tupelo",
    name: "Water Tupelo",
    category: "tree",
    lore: "Swollen base, pale bark, patient in deep water. Honey-makers love the late blossoms when the bayou steams.",
    sprite: "/sprites/tupelo.png",
    propKinds: ["tupelo"],
    docRange: 50,
  },
  {
    id: "loblolly-pine",
    name: "Loblolly Pine",
    category: "tree",
    lore: "Tall and resinous on the higher banks. Needles carpet the path; cones open after fire or long dry spells.",
    sprite: "/sprites/pine.png",
    propKinds: ["pine"],
    docRange: 50,
  },
  {
    id: "red-maple",
    name: "Red Maple",
    category: "tree",
    lore: "Edge-of-swamp color — red buds early, scarlet leaves late. Soft wood, hard to miss when the sun hits it.",
    sprite: "/sprites/maple.png",
    propKinds: ["maple"],
    docRange: 50,
  },
  {
    id: "cypress-knees",
    name: "Cypress Knees",
    category: "tree",
    lore: "Woody projections of cypress roots. They breathe for the tree — or so the stories go — and snag careless boots.",
    sprite: "/sprites/knees.png",
    propKinds: ["knees"],
    docRange: 42,
  },
  {
    id: "spanish-moss",
    name: "Spanish Moss",
    category: "moss",
    lore: "Not a true moss — an air plant that drinks fog. Gray-green curtains on live oak and cypress; soft as a secret.",
    sprite: "/sprites/moss-hang.png",
    propKinds: ["mossHang", "moss"],
    docRange: 44,
  },
  {
    id: "water-lily",
    name: "Water Lily",
    category: "water",
    lore: "White bloom on a dark plate of pad. Opens to sun, closes toward night — a small clock of the shallows.",
    sprite: "/sprites/prop-2.png",
    propKinds: ["lily"],
    docRange: 40,
  },
  {
    id: "lily-pad",
    name: "Lily Pads",
    category: "water",
    lore: "Floating green stages for frogs and dragonflies. Roots in the mud, leaves on the light.",
    sprite: "/sprites/prop-1.png",
    propKinds: ["lilypad"],
    docRange: 40,
  },
  {
    id: "duckweed",
    name: "Duckweed",
    category: "water",
    lore: "Tiny floating leaves that green a whole channel after rain. Ducks and gar both know the feast.",
    sprite: "/sprites/duckweed.png",
    propKinds: ["duckweed", "duckweedMat"],
    docRange: 38,
  },
  {
    id: "algae-scum",
    name: "Bayou Algae & Scum",
    category: "water",
    lore: "Tea-colored water’s surface film — green-gold and slow. Not pretty, but the bayou’s living skin.",
    sprite: "/sprites/algae.png",
    propKinds: ["algae", "algaeStrand", "scum"],
    docRange: 38,
  },
  {
    id: "bayou-mushrooms",
    name: "Damp-Wood Mushrooms",
    category: "fungi",
    lore: "Clustered on stumps and cabin sills after wet nights. Some feed the forest; some are pure mischief.",
    sprite: "/sprites/mushrooms.png",
    propKinds: ["mushrooms"],
    docRange: 40,
  },
];

export function floraByProp(kind: PropKind): FloraDef | undefined {
  return FLORA_DEFS.find((f) => f.propKinds.includes(kind));
}
