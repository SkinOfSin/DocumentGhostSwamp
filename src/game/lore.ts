/** Ghost Swamp field pages & cabin notes — Southern Gothic bayou soul. */

export interface GrimoirePage {
  id: string;
  title: string;
  body: string;
  /** World placement preference */
  near: "water" | "cabin" | "pier" | "deep" | "any";
}

export interface CabinNote {
  cabinKind: string;
  title: string;
  body: string;
}

export const GRIMOIRE_PAGES: GrimoirePage[] = [
  {
    id: "page-ink",
    title: "I. Blackwater Ink",
    body: "The swamp does not forget. Write in pencil and the damp erases you. Write in blood and the moss keeps the receipt. Document Ghost Swamp begins where the light fails the channel.",
    near: "any",
  },
  {
    id: "page-magnolia",
    title: "II. The Magnolia’s Bargain",
    body: "Beauty and rot share a root. Where white petals open after rain, something older drinks the confession. Do not kneel too long under a flowering tree at dusk.",
    near: "deep",
  },
  {
    id: "page-reed",
    title: "III. The Calling Reed",
    body: "Sound travels differently over blackwater. A lullaby from the far bank may wear your mother’s mouth. If the reeds answer your name, step back onto solid ground.",
    near: "water",
  },
  {
    id: "page-marks",
    title: "IV. Marks That Pulse",
    body: "Some sins bruise the skin before the soul. They darken when temptation near, and jump at a touch. Louisiana has always known: the body tells on you first.",
    near: "cabin",
  },
  {
    id: "page-manchac",
    title: "V. Ghost Swamp Line",
    body: "Where the railroad drowned, a blue light still walks. Manchac keeps its dead in the cypress knees. Follow only with your journal open — and never after the last train whistle that isn’t there.",
    near: "pier",
  },
  {
    id: "page-mossman",
    title: "VI. Père Malfait",
    body: "Father of Mischief wears the Spanish moss like a coat. After full dark he is less story and more weight in the trees. Document him quick. Do not turn your back to the green.",
    near: "deep",
  },
  {
    id: "page-garden",
    title: "VII. Dark Growth",
    body: "A master gardener of dark growth knows: every root is a sentence unfinished. Tend what thrives in shade. The bayou rewards patience and punishes haste the same way — slowly.",
    near: "cabin",
  },
  {
    id: "page-night",
    title: "VIII. Night’s Full Ledger",
    body: "When the fireflies rise and the frogs go quiet, the ledger balances. Cryptids clock in. The lantern is not courage — it is honesty about how little you can see.",
    near: "any",
  },
];

export const CABIN_NOTES: CabinNote[] = [
  {
    cabinKind: "cabin-tin",
    title: "Fish camp — tin roof",
    body: "Somebody left a pot of coffee grounds and a rosary on the sill. The tin ticks in the heat like a second clock. On the wall, scratched: DON’T FEED WHAT ANSWERS AFTER DARK.",
  },
  {
    cabinKind: "cabin-sunk",
    title: "Half-sunk camp",
    body: "Water takes an inch a year and never gives it back. Boots by the door still hold the shape of a man who walked into the channel following a green light. The rocker is gone. The posts remain.",
  },
  {
    cabinKind: "cabin-boarded",
    title: "Boarded shack",
    body: "NO TRESPASSING, twice. Under the boards, a child’s chalk sun. Under that, adult handwriting: She sings on the old line. If you hear her, you already stayed too long.",
  },
  {
    cabinKind: "cabin-rocker",
    title: "Lantern porch",
    body: "The rocker still moves when there’s no wind. Oil in the lantern smells of citrus and iron. A note under the cushion: For the one who documents — the moss remembers kindness. The water does not.",
  },
  {
    cabinKind: "cabin",
    title: "Old forest house",
    body: "Planks breathe. Spanish moss hangs like unfinished prayers. Someone stacked field guides and a cracked mirror. In the glass: not your face first — the trees behind you, closer than they should be.",
  },
];

export const NIGHT_CLIMAX =
  "Deep night settles on the blackwater. Fireflies clock in. Somewhere a bullfrog stops mid-croak. The grimoire’s last pages want finishing — and the moss has started walking.";

export const SIGHTING_LINES: Record<string, string> = {
  "manchac-ghost": "A blue light on the old line…",
  "pere-malfait": "The moss shifted like a man…",
  rougarou: "Something loped between the knees…",
  "honey-island": "Wet cypress-fur moved in the dark…",
  "feu-follet": "A green fire refused the wind…",
  "voodoo-woman": "Bone charms clicked where no wind blew…",
  lafitte: "A tricorn cut the fog like a sail…",
  grunch: "Something laughed that wasn’t a bird…",
  "woman-white": "White cloth moved where no woman walked…",
  letiche: "A child’s splash — then no child…",
  "rail-passenger": "A suitcase dragged through water…",
  "moss-bullfrog": "A crown of moss blinked once…",
};
