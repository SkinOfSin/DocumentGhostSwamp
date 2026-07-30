import { r as __toESM } from "../_runtime.mjs";
import { M as require_react, h as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sun, c as Map$1, d as CloudFog, f as CircleHelp, i as Sunrise, l as MapPin, n as Volume2, o as ScrollText, p as BookOpen, r as Sunset, s as Moon, t as VolumeX, u as CloudRain } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BnqQN9fK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CREATURE_DEFS = [
	{
		id: "moss-bullfrog",
		name: "Moss-Crowned Bullfrog",
		lore: "Old bayou folks say this bullfrog grows a living crown of Spanish moss and sings only at first light. Catch its amber eyes and it may croak your true name.",
		sprite: "/sprites/creature-1.png",
		radius: 22,
		speed: 28,
		behavior: "shy",
		appearFrom: 0,
		appearTo: .55,
		docRange: 58,
		danger: 0,
		rarity: "common",
		color: "#6b9e3e"
	},
	{
		id: "crawfish",
		name: "Mudbug Crawfish",
		lore: "Louisiana’s little red royalty. They dig chimney mounds in soft mud and boil into every good story told around a picnic table.",
		sprite: "/sprites/crawfish.png",
		radius: 11,
		speed: 14,
		behavior: "shy",
		appearFrom: 0,
		appearTo: .85,
		docRange: 88,
		danger: 0,
		rarity: "common",
		color: "#d04030"
	},
	{
		id: "slider-turtle",
		name: "Red-Eared Slider",
		lore: "Sun-basker of every quiet log. Slide off into blackwater at the first footstep — patience gets the page in your journal.",
		sprite: "/sprites/turtle.png",
		radius: 11,
		speed: 16,
		behavior: "shy",
		appearFrom: .05,
		appearTo: .8,
		docRange: 64,
		danger: 0,
		rarity: "common",
		color: "#3a5a40"
	},
	{
		id: "nutria",
		name: "Bayou Nutria",
		lore: "Big orange-toothed coypu of the marsh. Not native, but fully Louisiana now — chewing canals and making wavelets at dusk.",
		sprite: "/sprites/nutria.png",
		radius: 11,
		speed: 44,
		behavior: "wander",
		appearFrom: .1,
		appearTo: .85,
		docRange: 56,
		danger: 0,
		rarity: "uncommon",
		color: "#8a7060"
	},
	{
		id: "egret",
		name: "Great Egret",
		lore: "Snow-white fisher of the shallows. Stands still as a cypress knee until a minnow forgets — then the spear-beak falls.",
		sprite: "/sprites/egret.png",
		radius: 10,
		speed: 38,
		behavior: "wander",
		appearFrom: 0,
		appearTo: .7,
		docRange: 58,
		danger: 0,
		rarity: "uncommon",
		color: "#f0f0e8"
	},
	{
		id: "ghost-gar",
		name: "Blue Ghost Gar",
		lore: "A gar that glows like flooded moonwater. Fishermen claim it swims through piers as if wood were fog — a warning before the big storms.",
		sprite: "/sprites/creature-2.png",
		radius: 26,
		speed: 55,
		behavior: "wander",
		appearFrom: .05,
		appearTo: .7,
		docRange: 62,
		danger: 0,
		rarity: "uncommon",
		color: "#2ec4b6"
	},
	{
		id: "mossy-gator",
		name: "Moss-Backed Alligator",
		lore: "Not quite ordinary: Spanish moss braids its snout and its eyes burn gold when hungry. Slow and heavy — give it room.",
		sprite: "/sprites/creature-3.png",
		radius: 30,
		speed: 14,
		behavior: "aggressive",
		appearFrom: .1,
		appearTo: 1,
		docRange: 70,
		danger: 10,
		rarity: "uncommon",
		color: "#3d6b3a"
	},
	{
		id: "feu-follet",
		name: "Feu Follet",
		lore: "Cajun will-o'-the-wisp. A pale green fire that lures the lost deeper into the cypress. Follow it only with your journal open.",
		sprite: "/sprites/creature-4.png",
		radius: 16,
		speed: 28,
		behavior: "drift",
		appearFrom: .28,
		appearTo: 1,
		docRange: 88,
		danger: 0,
		rarity: "rare",
		color: "#7ef0c0"
	},
	{
		id: "spirit-catfish",
		name: "Phantom Catfish",
		lore: "A catfish spirit of the deep channels. Translucent as bottle-glass, it appears when the sun leans west and the water goes still.",
		sprite: "/sprites/cryptid-3.png",
		radius: 24,
		speed: 42,
		behavior: "wander",
		appearFrom: .25,
		appearTo: .85,
		docRange: 60,
		danger: 0,
		rarity: "uncommon",
		color: "#9ee7ff"
	},
	{
		id: "lutin",
		name: "Bayou Lutin",
		lore: "A tiny swamp spirit in a leaf hat. Mischief-maker of sugarcane camps and pirogues — leave a crumb and it may dance instead of hide.",
		sprite: "/sprites/cryptid-4.png",
		radius: 14,
		speed: 22,
		behavior: "wander",
		appearFrom: .1,
		appearTo: .95,
		docRange: 92,
		danger: 0,
		rarity: "rare",
		color: "#c8e06c"
	},
	{
		id: "manchac-ghost",
		name: "Manchac Swamp Ghost",
		lore: "Spirit of Manchac — the Ghost Swamp. Some name her Julie Brown, the Creole songstress whose curse drowned Frenier. At dusk she drifts among the cypress.",
		sprite: "/sprites/manchac-ghost.png",
		radius: 26,
		speed: 38,
		behavior: "drift",
		appearFrom: .35,
		appearTo: 1,
		docRange: 64,
		danger: 0,
		rarity: "legendary",
		color: "#9ee8ff"
	},
	{
		id: "voodoo-woman",
		name: "Bayou Voodoo Woman",
		lore: "She walks with the scary ones after the light thins — headwrap, bone charms, a bottle that never empties the same way twice. Not all who document her leave with the same memory.",
		sprite: "/sprites/voodoo-woman.png",
		radius: 28,
		speed: 34,
		behavior: "haunt",
		appearFrom: .38,
		appearTo: 1,
		docRange: 68,
		danger: 12,
		rarity: "legendary",
		color: "#7a4a9a"
	},
	{
		id: "lafitte",
		name: "Jean Lafitte’s Phantom",
		lore: "Privateer ghost of the foggy channels. Tricorn and coat of river-mist — gold that never stays in a living hand. Fishermen tip their hats when the fog thickens wrong.",
		sprite: "/sprites/ghost-lafitte.png",
		radius: 28,
		speed: 40,
		behavior: "drift",
		appearFrom: .4,
		appearTo: 1,
		docRange: 66,
		danger: 0,
		rarity: "legendary",
		color: "#7ec8e8"
	},
	{
		id: "grunch",
		name: "Grunch Road Critter",
		lore: "Urban-legend cousin of the New Orleans edge — lanky, moss-stained, and too smart for a dog. Grunch Road stories end with missing pets and laughter that isn’t human.",
		sprite: "/sprites/cryptid-grunch.png",
		radius: 24,
		speed: 52,
		behavior: "shy",
		appearFrom: .42,
		appearTo: 1,
		docRange: 60,
		danger: 8,
		rarity: "legendary",
		color: "#8a7a40"
	},
	{
		id: "woman-white",
		name: "Woman in White",
		lore: "Southern Gothic visitor — white dress, empty eyes, patience of old houses. Not pure bayou, but the mist will carry a plantation ghost if the hollow opens a door.",
		sprite: "/sprites/ghost-woman-white.png",
		radius: 26,
		speed: 32,
		behavior: "drift",
		appearFrom: .45,
		appearTo: 1,
		docRange: 64,
		danger: 0,
		rarity: "legendary",
		color: "#e8e8f0"
	},
	{
		id: "letiche",
		name: "Letiche",
		lore: "Swamp-child legend — raised by alligators in the stories, left with pale eyes and wet hair. If it offers you a hand, check how many fingers the water counts.",
		sprite: "/sprites/letiche.png",
		radius: 22,
		speed: 44,
		behavior: "haunt",
		appearFrom: .44,
		appearTo: 1,
		docRange: 58,
		danger: 10,
		rarity: "legendary",
		color: "#a0b090"
	},
	{
		id: "rail-passenger",
		name: "Drowned Railroad Passenger",
		lore: "Tied to the Manchac line that the water took. Suitcase still in hand, train whistle that isn’t there. He walks the old grade when Ghost Hollow is listening.",
		sprite: "/sprites/ghost-passenger.png",
		radius: 26,
		speed: 30,
		behavior: "drift",
		appearFrom: .4,
		appearTo: 1,
		docRange: 66,
		danger: 0,
		rarity: "legendary",
		color: "#40d0e8"
	},
	{
		id: "pere-malfait",
		name: "Pete Malfait — Moss Man",
		lore: "Père Malfait — Father of Mischief, the Moss Man. A tall shape of Spanish moss and wet leaves with coal-fire eyes. After dark, the moss walks.",
		sprite: "/sprites/pere-malfait.png",
		radius: 38,
		speed: 36,
		behavior: "haunt",
		appearFrom: .45,
		appearTo: 1,
		docRange: 74,
		danger: 20,
		rarity: "legendary",
		color: "#5a8a3a"
	},
	{
		id: "rougarou",
		name: "Rougarou",
		lore: "The Cajun werewolf of the wetlands. Some say a curse; others a bargain. It prowls only after full dark.",
		sprite: "/sprites/cryptid-1.png",
		radius: 34,
		speed: 58,
		behavior: "haunt",
		appearFrom: .48,
		appearTo: 1,
		docRange: 72,
		danger: 24,
		rarity: "legendary",
		color: "#a09088"
	},
	{
		id: "honey-island",
		name: "Honey Island Swamp Monster",
		lore: "Louisiana's famous cryptid — tall, moss-furred, and smelling of wet cypress. Tracks appear in soft mud after storms.",
		sprite: "/sprites/cryptid-2.png",
		radius: 36,
		speed: 32,
		behavior: "aggressive",
		appearFrom: .5,
		appearTo: 1,
		docRange: 74,
		danger: 24,
		rarity: "legendary",
		color: "#6a7a62"
	}
];
Object.fromEntries(CREATURE_DEFS.map((d) => [d.id, d]));
var FLORA_DEFS = [
	{
		id: "bald-cypress",
		name: "Bald Cypress",
		category: "tree",
		lore: "King of the Louisiana swamp. Knees rise from blackwater like the backs of sleeping beasts; needles turn copper in fall.",
		sprite: "/sprites/cypress-1.png",
		propKinds: ["cypress"],
		docRange: 52
	},
	{
		id: "moss-cypress",
		name: "Moss-Hung Cypress",
		category: "tree",
		lore: "Same cypress, dressed for church in Spanish moss. The drape softens the wind and hides more than birds.",
		sprite: "/sprites/cypress-moss.png",
		propKinds: ["cypressMoss"],
		docRange: 52
	},
	{
		id: "water-tupelo",
		name: "Water Tupelo",
		category: "tree",
		lore: "Swollen base, pale bark, patient in deep water. Honey-makers love the late blossoms when the bayou steams.",
		sprite: "/sprites/tupelo.png",
		propKinds: ["tupelo"],
		docRange: 50
	},
	{
		id: "loblolly-pine",
		name: "Loblolly Pine",
		category: "tree",
		lore: "Tall and resinous on the higher banks. Needles carpet the path; cones open after fire or long dry spells.",
		sprite: "/sprites/pine.png",
		propKinds: ["pine"],
		docRange: 50
	},
	{
		id: "red-maple",
		name: "Red Maple",
		category: "tree",
		lore: "Edge-of-swamp color — red buds early, scarlet leaves late. Soft wood, hard to miss when the sun hits it.",
		sprite: "/sprites/maple.png",
		propKinds: ["maple"],
		docRange: 50
	},
	{
		id: "cypress-knees",
		name: "Cypress Knees",
		category: "tree",
		lore: "Woody projections of cypress roots. They breathe for the tree — or so the stories go — and snag careless boots.",
		sprite: "/sprites/knees.png",
		propKinds: ["knees"],
		docRange: 42
	},
	{
		id: "spanish-moss",
		name: "Spanish Moss",
		category: "moss",
		lore: "Not a true moss — an air plant that drinks fog. Gray-green curtains on live oak and cypress; soft as a secret.",
		sprite: "/sprites/moss-hang.png",
		propKinds: ["mossHang", "moss"],
		docRange: 44
	},
	{
		id: "water-lily",
		name: "Water Lily",
		category: "water",
		lore: "White bloom on a dark plate of pad. Opens to sun, closes toward night — a small clock of the shallows.",
		sprite: "/sprites/prop-2.png",
		propKinds: ["lily"],
		docRange: 40
	},
	{
		id: "lily-pad",
		name: "Lily Pads",
		category: "water",
		lore: "Floating green stages for frogs and dragonflies. Roots in the mud, leaves on the light.",
		sprite: "/sprites/prop-1.png",
		propKinds: ["lilypad"],
		docRange: 40
	},
	{
		id: "duckweed",
		name: "Duckweed",
		category: "water",
		lore: "Tiny floating leaves that green a whole channel after rain. Ducks and gar both know the feast.",
		sprite: "/sprites/duckweed.png",
		propKinds: ["duckweed", "duckweedMat"],
		docRange: 38
	},
	{
		id: "algae-scum",
		name: "Bayou Algae & Scum",
		category: "water",
		lore: "Tea-colored water’s surface film — green-gold and slow. Not pretty, but the bayou’s living skin.",
		sprite: "/sprites/algae.png",
		propKinds: [
			"algae",
			"algaeStrand",
			"scum"
		],
		docRange: 38
	},
	{
		id: "bayou-mushrooms",
		name: "Damp-Wood Mushrooms",
		category: "fungi",
		lore: "Clustered on stumps and cabin sills after wet nights. Some feed the forest; some are pure mischief.",
		sprite: "/sprites/mushrooms.png",
		propKinds: ["mushrooms"],
		docRange: 40
	}
];
function floraByProp(kind) {
	return FLORA_DEFS.find((f) => f.propKinds.includes(kind));
}
var GRIMOIRE_PAGES = [
	{
		id: "page-ink",
		title: "I. Blackwater Ink",
		body: "The swamp does not forget. Write in pencil and the damp erases you. Write in blood and the moss keeps the receipt. Document Ghost Swamp begins where the light fails the channel.",
		near: "any"
	},
	{
		id: "page-magnolia",
		title: "II. The Magnolia’s Bargain",
		body: "Beauty and rot share a root. Where white petals open after rain, something older drinks the confession. Do not kneel too long under a flowering tree at dusk.",
		near: "deep"
	},
	{
		id: "page-reed",
		title: "III. The Calling Reed",
		body: "Sound travels differently over blackwater. A lullaby from the far bank may wear your mother’s mouth. If the reeds answer your name, step back onto solid ground.",
		near: "water"
	},
	{
		id: "page-marks",
		title: "IV. Marks That Pulse",
		body: "Some sins bruise the skin before the soul. They darken when temptation near, and jump at a touch. Louisiana has always known: the body tells on you first.",
		near: "cabin"
	},
	{
		id: "page-manchac",
		title: "V. Ghost Swamp Line",
		body: "Where the railroad drowned, a blue light still walks. Manchac keeps its dead in the cypress knees. Follow only with your journal open — and never after the last train whistle that isn’t there.",
		near: "pier"
	},
	{
		id: "page-mossman",
		title: "VI. Père Malfait",
		body: "Father of Mischief wears the Spanish moss like a coat. After full dark he is less story and more weight in the trees. Document him quick. Do not turn your back to the green.",
		near: "deep"
	},
	{
		id: "page-garden",
		title: "VII. Dark Growth",
		body: "A master gardener of dark growth knows: every root is a sentence unfinished. Tend what thrives in shade. The bayou rewards patience and punishes haste the same way — slowly.",
		near: "cabin"
	},
	{
		id: "page-night",
		title: "VIII. Night’s Full Ledger",
		body: "When the fireflies rise and the frogs go quiet, the ledger balances. Cryptids clock in. The lantern is not courage — it is honesty about how little you can see.",
		near: "any"
	}
];
var NIGHT_CLIMAX = "Deep night settles on the blackwater. Fireflies clock in. Somewhere a bullfrog stops mid-croak. The grimoire’s last pages want finishing — and the moss has started walking.";
var SIGHTING_LINES = {
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
	"moss-bullfrog": "A crown of moss blinked once…"
};
/** Shorter gifts so one finishes before the next feels messy */
var PLACE_DEFS = [
	{
		id: "cabin-tin",
		kind: "cabin",
		propKinds: ["cabinTin"],
		title: "Fish camp — tin roof",
		note: "Somebody left a pot of coffee grounds and a rosary on the sill. The tin ticks in the heat like a second clock. On the wall, scratched: DON’T FEED WHAT ANSWERS AFTER DARK.",
		specimenId: "leaf",
		specimenName: "Pressed cypress leaf",
		specimenSprite: "/sprites/specimen-leaf.png",
		sketchSprite: "/sprites/cabin-tin.png",
		lanternColor: [
			180,
			200,
			90
		],
		effect: "dragonfly",
		effectDuration: 28,
		effectLabel: "Leaf-light dragonflies",
		effectDesc: "A pair of dragonflies follows you. Lantern takes on a green-gold tint."
	},
	{
		id: "cabin-sunk",
		kind: "cabin",
		propKinds: ["cabinSunk"],
		title: "Half-sunk camp",
		note: "Water takes an inch a year and never gives it back. Boots by the door still hold the shape of a man who walked into the channel following a green light. The rocker is gone. The posts remain.",
		specimenId: "moss",
		specimenName: "Spanish moss strand",
		specimenSprite: "/sprites/specimen-moss.png",
		sketchSprite: "/sprites/cabin-sunk.png",
		lanternColor: [
			90,
			170,
			110
		],
		effect: "glitter",
		effectDuration: 26,
		effectLabel: "Moss glitter",
		effectDesc: "Soft green glitter rises from your steps. Lantern glows wet-moss green."
	},
	{
		id: "cabin-boarded",
		kind: "cabin",
		propKinds: ["cabinBoarded"],
		title: "Boarded shack",
		note: "NO TRESPASSING, twice. Under the boards, a child’s chalk sun. Under that, adult handwriting: She sings on the old line. If you hear her, you already stayed too long.",
		specimenId: "bone",
		specimenName: "Small pale bone",
		specimenSprite: "/sprites/specimen-bone.png",
		sketchSprite: "/sprites/cabin-boarded.png",
		lanternColor: [
			210,
			220,
			230
		],
		effect: "firefly_dance",
		effectDuration: 24,
		effectLabel: "Firefly dance",
		effectDesc: "Lightning bugs circle you for a short while. Lantern turns bone-pale."
	},
	{
		id: "cabin-rocker",
		kind: "cabin",
		propKinds: ["cabinRocker"],
		title: "Lantern porch",
		note: "The rocker still moves when there’s no wind. Oil in the lantern smells of citrus and iron. A note under the cushion: For the one who documents — the moss remembers kindness. The water does not.",
		specimenId: "flower",
		specimenName: "Night-bloom flower",
		specimenSprite: "/sprites/specimen-flower.png",
		sketchSprite: "/sprites/cabin-rocker.png",
		lanternColor: [
			230,
			140,
			180
		],
		effect: "frog_friend",
		effectDuration: 30,
		effectLabel: "Friendly moss frog",
		effectDesc: "A little crowned frog hops after you. Lantern blushes rose-gold."
	},
	{
		id: "cabin-forest",
		kind: "cabin",
		propKinds: ["cabin"],
		title: "Old forest house",
		note: "Planks breathe. Spanish moss hangs like unfinished prayers. Someone stacked field guides and a cracked mirror. In the glass: not your face first — the trees behind you, closer than they should be.",
		specimenId: "mushroom",
		specimenName: "Bayou mushrooms",
		specimenSprite: "/sprites/specimen-mushroom.png",
		sketchSprite: "/sprites/cabin.png",
		lanternColor: [
			160,
			100,
			220
		],
		effect: "deer_friend",
		effectDuration: 30,
		effectLabel: "Gentle deer",
		effectDesc: "A soft-eyed deer walks with you a while. Lantern goes violet."
	},
	{
		id: "pier-nets",
		kind: "pier",
		propKinds: [
			"pierNets",
			"pierLantern",
			"pier"
		],
		title: "Old fishing pier",
		note: "Boards complain underfoot. A rusted nail holds a scrap of net and a feathered lure someone meant to cast again and never did. The channel below keeps its secrets.",
		specimenId: "lure",
		specimenName: "Feathered brass lure",
		specimenSprite: "/sprites/specimen-lure.png",
		sketchSprite: "/sprites/pier-nets.png",
		lanternColor: [
			220,
			160,
			60
		],
		effect: "lure_sparkle",
		effectDuration: 22,
		effectLabel: "Water sparkles",
		effectDesc: "Little gold sparks skip across nearby water. Lantern warms like pier-light."
	},
	{
		id: "canoe-find",
		kind: "boat",
		propKinds: ["canoe", "pierDock"],
		title: "Old canoe",
		note: "Pirogue wood swollen with years of blackwater. Under the seat: a corked bottle and a paddle charm. The note inside is water-soft — only a few words still clear: Come home before the moss walks.",
		specimenId: "bottle",
		specimenName: "Message bottle & paddle charm",
		specimenSprite: "/sprites/specimen-bottle.png",
		sketchSprite: "/sprites/canoe.png",
		lanternColor: [
			100,
			160,
			200
		],
		effect: "bottle_ripple",
		effectDuration: 24,
		effectLabel: "Channel ripples",
		effectDesc: "Soft blue ripples trail you in the shallows. Lantern cools to river-blue."
	}
];
function placeByProp(kind) {
	return PLACE_DEFS.find((p) => p.propKinds.includes(kind));
}
function placeById(id) {
	return PLACE_DEFS.find((p) => p.id === id);
}
function lanternMix(colors) {
	if (!colors.length) return [
		255,
		200,
		120
	];
	const n = colors.length;
	return [
		Math.round(colors.reduce((s, c) => s + c[0], 0) / n),
		Math.round(colors.reduce((s, c) => s + c[1], 0) / n),
		Math.round(colors.reduce((s, c) => s + c[2], 0) / n)
	];
}
/** Fixed map slots so cabins/boats stay well apart across the bayou */
var PLACE_SLOTS = [
	{
		id: "cabin-tin",
		x: 420,
		y: 380
	},
	{
		id: "cabin-sunk",
		x: 1980,
		y: 420
	},
	{
		id: "cabin-boarded",
		x: 520,
		y: 1420
	},
	{
		id: "cabin-rocker",
		x: 1880,
		y: 1480
	},
	{
		id: "cabin-forest",
		x: 1200,
		y: 280
	},
	{
		id: "pier-nets",
		x: 2100,
		y: 900
	},
	{
		id: "canoe-find",
		x: 320,
		y: 980
	}
];
var WORLD_W_HALF = 1200;
var WORLD_H_HALF = 900;
/** Ghost Hollow / Manchac edge — NW of the map */
var HOLLOW = {
	x0: 80,
	y0: 80,
	x1: 980,
	y1: 780,
	name: "Manchac Ghost Hollow",
	enterToast: "The air goes thin — you’ve entered Manchac Ghost Hollow…",
	leaveToast: "The birds return. Ghost Hollow falls behind."
};
/** Deep blackwater channel band across mid-map */
var CHANNEL = {
	cy: .52,
	thickness: .14
};
/** Lighter fishing-camp feel near center spawn */
var CAMP = {
	cx: WORLD_W_HALF,
	cy: WORLD_H_HALF,
	r: 280
};
function inHollow(x, y) {
	return x >= HOLLOW.x0 && x <= HOLLOW.x1 && y >= HOLLOW.y0 && y <= HOLLOW.y1;
}
function zoneAt(x, y) {
	if (inHollow(x, y)) return "hollow";
	const dx = x - CAMP.cx;
	const dy = y - CAMP.cy;
	if (Math.hypot(dx, dy) < CAMP.r) return "camp";
	const ny = y / 1800;
	if (Math.abs(ny - CHANNEL.cy) < CHANNEL.thickness * .5) return "channel";
	return "open";
}
/** Hollow cryptids prefer this region */
var HOLLOW_CREATURE_IDS = /* @__PURE__ */ new Set([
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
	"rail-passenger"
]);
/**
* Full bayou soundscape — synthesized, no external files.
* Master mute + music beds + SFX (frogs, water, birds, night).
*/
var ctx = null;
var unlocked = false;
var muted = false;
var masterGain = null;
var musicGain = null;
var sfxGain = null;
var ambienceNodes = [];
var musicPhase = null;
var timers = [];
function ac() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const AC = window.AudioContext || window.webkitAudioContext;
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
		masterGain.gain.value = muted ? 0 : .85;
		masterGain.connect(c.destination);
		musicGain = c.createGain();
		musicGain.gain.value = .22;
		musicGain.connect(masterGain);
		sfxGain = c.createGain();
		sfxGain.gain.value = .72;
		sfxGain.connect(masterGain);
	}
	return c;
}
function isMuted() {
	return muted;
}
function setMuted(m) {
	muted = m;
	if (masterGain) masterGain.gain.setTargetAtTime(m ? 0 : .85, ac()?.currentTime ?? 0, .05);
}
function toggleMute() {
	setMuted(!muted);
	return muted;
}
async function unlockAudio() {
	const c = ensureGraph();
	if (!c) return;
	if (c.state === "suspended") try {
		await c.resume();
	} catch {}
	unlocked = c.state === "running";
}
function envGain(c, t0, attack, hold, release, peak = .2) {
	const g = c.createGain();
	g.gain.setValueAtTime(1e-4, t0);
	g.gain.exponentialRampToValueAtTime(peak, t0 + attack);
	g.gain.setValueAtTime(peak, t0 + attack + hold);
	g.gain.exponentialRampToValueAtTime(1e-4, t0 + attack + hold + release);
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
function playBullfrog() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const triple = Math.random() > .55;
	const notes = [[
		92,
		54,
		.22
	], [
		108,
		68,
		.14
	]];
	if (triple) notes.push([
		78,
		48,
		.1
	]);
	for (const [i, [f0, f1, peak]] of notes.entries()) {
		const osc = c.createOscillator();
		const g = envGain(c, t0 + i * .15, .02, .08, .34, peak);
		osc.type = "triangle";
		osc.frequency.setValueAtTime(f0, t0 + i * .15);
		osc.frequency.exponentialRampToValueAtTime(f1, t0 + i * .15 + .28);
		const f = c.createBiquadFilter();
		f.type = "lowpass";
		f.frequency.value = 400;
		osc.connect(f);
		f.connect(g);
		g.connect(out);
		osc.start(t0 + i * .15);
		osc.stop(t0 + i * .15 + .5);
	}
}
function playBird() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const notes = 2 + Math.floor(Math.random() * 2);
	for (let i = 0; i < notes; i++) {
		const osc = c.createOscillator();
		const g = envGain(c, t0 + i * .08, .008, .03, .1, .055);
		osc.type = "sine";
		const base = 1600 + Math.random() * 900;
		osc.frequency.setValueAtTime(base, t0 + i * .08);
		osc.frequency.exponentialRampToValueAtTime(base * .78, t0 + i * .08 + .11);
		osc.connect(g);
		g.connect(out);
		osc.start(t0 + i * .08);
		osc.stop(t0 + i * .08 + .18);
	}
}
function playCicada() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const osc = c.createOscillator();
	const g = envGain(c, t0, .05, .2, .3, .035);
	osc.type = "sawtooth";
	osc.frequency.value = 4200 + Math.random() * 400;
	const f = c.createBiquadFilter();
	f.type = "bandpass";
	f.frequency.value = 4500;
	f.Q.value = 8;
	osc.connect(f);
	f.connect(g);
	g.connect(out);
	osc.start(t0);
	osc.stop(t0 + .55);
}
function playWaterEnter() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const len = .45;
	const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < data.length; i++) {
		const env = Math.pow(1 - i / data.length, 1.6);
		data[i] = (Math.random() * 2 - 1) * env + Math.sin(i * .02) * .15 * env;
	}
	const src = c.createBufferSource();
	src.buffer = buffer;
	const filter = c.createBiquadFilter();
	filter.type = "bandpass";
	filter.frequency.value = 780;
	filter.Q.value = .7;
	const g = envGain(c, t0, .01, .08, .3, .16);
	src.connect(filter);
	filter.connect(g);
	g.connect(out);
	src.start(t0);
	src.stop(t0 + len);
	const osc = c.createOscillator();
	const og = envGain(c, t0, .01, .04, .2, .08);
	osc.type = "sine";
	osc.frequency.setValueAtTime(180, t0);
	osc.frequency.exponentialRampToValueAtTime(70, t0 + .25);
	osc.connect(og);
	og.connect(out);
	osc.start(t0);
	osc.stop(t0 + .35);
}
function playOwl() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	for (const [i, f] of [400, 320].entries()) {
		const osc = c.createOscillator();
		const g = envGain(c, t0 + i * .22, .04, .12, .35, .085);
		osc.type = "sine";
		osc.frequency.setValueAtTime(f, t0 + i * .22);
		osc.frequency.exponentialRampToValueAtTime(f * .75, t0 + i * .22 + .3);
		osc.connect(g);
		g.connect(out);
		osc.start(t0 + i * .22);
		osc.stop(t0 + i * .22 + .55);
	}
}
function playThunder() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const len = 1.2;
	const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 1.5);
	const src = c.createBufferSource();
	src.buffer = buffer;
	const filter = c.createBiquadFilter();
	filter.type = "lowpass";
	filter.frequency.value = 280;
	const g = envGain(c, t0, .02, .2, .9, .18);
	src.connect(filter);
	filter.connect(g);
	g.connect(out);
	src.start(t0);
	src.stop(t0 + len);
}
function playWadestep() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const len = .12;
	const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
	const src = c.createBufferSource();
	src.buffer = buffer;
	const filter = c.createBiquadFilter();
	filter.type = "lowpass";
	filter.frequency.value = 700;
	const g = envGain(c, t0, .005, .02, .08, .07);
	src.connect(filter);
	filter.connect(g);
	g.connect(out);
	src.start(t0);
	src.stop(t0 + len);
}
function playWoodCreak() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const osc = c.createOscillator();
	const g = envGain(c, t0, .01, .08, .22, .06);
	osc.type = "sawtooth";
	osc.frequency.setValueAtTime(180, t0);
	osc.frequency.exponentialRampToValueAtTime(90, t0 + .25);
	const f = c.createBiquadFilter();
	f.type = "bandpass";
	f.frequency.value = 400;
	osc.connect(f);
	f.connect(g);
	g.connect(out);
	osc.start(t0);
	osc.stop(t0 + .35);
}
/** Soft approach creak when nearing a cabin (not only on Read) */
function playCabinApproach() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const osc = c.createOscillator();
	const g = envGain(c, t0, .015, .06, .28, .045);
	osc.type = "sawtooth";
	osc.frequency.setValueAtTime(140 + Math.random() * 40, t0);
	osc.frequency.exponentialRampToValueAtTime(70, t0 + .32);
	const f = c.createBiquadFilter();
	f.type = "bandpass";
	f.frequency.value = 320;
	f.Q.value = 1.2;
	osc.connect(f);
	f.connect(g);
	g.connect(out);
	osc.start(t0);
	osc.stop(t0 + .42);
}
/** Canoe: hull bump + rope-on-wood + soft water lap */
function playCanoe() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	{
		const osc = c.createOscillator();
		const g = envGain(c, t0, .005, .04, .18, .1);
		osc.type = "sine";
		osc.frequency.setValueAtTime(95, t0);
		osc.frequency.exponentialRampToValueAtTime(48, t0 + .2);
		osc.connect(g);
		g.connect(out);
		osc.start(t0);
		osc.stop(t0 + .28);
	}
	{
		const osc = c.createOscillator();
		const g = envGain(c, t0 + .08, .01, .05, .2, .04);
		osc.type = "sawtooth";
		osc.frequency.setValueAtTime(220, t0 + .08);
		osc.frequency.exponentialRampToValueAtTime(110, t0 + .28);
		const f = c.createBiquadFilter();
		f.type = "bandpass";
		f.frequency.value = 500;
		osc.connect(f);
		f.connect(g);
		g.connect(out);
		osc.start(t0 + .08);
		osc.stop(t0 + .38);
	}
	{
		const len = .4;
		const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
		const data = buffer.getChannelData(0);
		for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 1.8);
		const src = c.createBufferSource();
		src.buffer = buffer;
		const filter = c.createBiquadFilter();
		filter.type = "bandpass";
		filter.frequency.value = 700;
		const g = envGain(c, t0 + .05, .02, .08, .25, .09);
		src.connect(filter);
		filter.connect(g);
		g.connect(out);
		src.start(t0 + .05);
		src.stop(t0 + .05 + len);
	}
}
/** Old pier boards underfoot */
function playPierBoard() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const osc = c.createOscillator();
	const g = envGain(c, t0, .005, .03, .12, .055);
	osc.type = "triangle";
	osc.frequency.setValueAtTime(160 + Math.random() * 50, t0);
	osc.frequency.exponentialRampToValueAtTime(70, t0 + .14);
	const f = c.createBiquadFilter();
	f.type = "lowpass";
	f.frequency.value = 600;
	osc.connect(f);
	f.connect(g);
	g.connect(out);
	osc.start(t0);
	osc.stop(t0 + .22);
	const kn = c.createOscillator();
	const kg = envGain(c, t0 + .02, .002, .01, .08, .035);
	kn.type = "sine";
	kn.frequency.value = 380;
	kn.connect(kg);
	kg.connect(out);
	kn.start(t0 + .02);
	kn.stop(t0 + .12);
}
/** Very soft firefly tick at night */
function playFireflyTick() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const osc = c.createOscillator();
	const g = envGain(c, t0, .002, .008, .05, .018);
	osc.type = "sine";
	osc.frequency.value = 2400 + Math.random() * 1200;
	osc.connect(g);
	g.connect(out);
	osc.start(t0);
	osc.stop(t0 + .07);
}
var hollowWindNodes = [];
var hollowWindOn = false;
/** Soft Manchac hollow wind loop */
function startHollowWind() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted || hollowWindOn) return;
	hollowWindOn = true;
	const buffer = c.createBuffer(1, Math.floor(c.sampleRate * 3), c.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * .6;
	const src = c.createBufferSource();
	src.buffer = buffer;
	src.loop = true;
	const filter = c.createBiquadFilter();
	filter.type = "bandpass";
	filter.frequency.value = 280;
	filter.Q.value = .5;
	const g = c.createGain();
	g.gain.value = 1e-4;
	g.gain.exponentialRampToValueAtTime(.028, c.currentTime + 1.8);
	src.connect(filter);
	filter.connect(g);
	g.connect(out);
	src.start();
	hollowWindNodes = [
		src,
		filter,
		g
	];
}
function stopHollowWind() {
	for (const n of hollowWindNodes) try {
		if ("stop" in n && typeof n.stop === "function") n.stop();
		n.disconnect();
	} catch {}
	hollowWindNodes = [];
	hollowWindOn = false;
}
function playDocumentChime() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	for (const [i, f] of [
		523,
		659,
		784
	].entries()) {
		const osc = c.createOscillator();
		const g = envGain(c, t0 + i * .05, .01, .06, .25, .07);
		osc.type = "sine";
		osc.frequency.value = f;
		osc.connect(g);
		g.connect(out);
		osc.start(t0 + i * .05);
		osc.stop(t0 + i * .05 + .35);
	}
}
function playPageFind() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const osc = c.createOscillator();
	const g = envGain(c, t0, .02, .1, .4, .09);
	osc.type = "triangle";
	osc.frequency.setValueAtTime(220, t0);
	osc.frequency.exponentialRampToValueAtTime(440, t0 + .35);
	osc.connect(g);
	g.connect(out);
	osc.start(t0);
	osc.stop(t0 + .5);
}
function playSpecimenCollect() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	for (const [i, f] of [
		330,
		440,
		660,
		880
	].entries()) {
		const osc = c.createOscillator();
		const g = envGain(c, t0 + i * .06, .01, .06, .28, .055);
		osc.type = "sine";
		osc.frequency.value = f;
		osc.connect(g);
		g.connect(out);
		osc.start(t0 + i * .06);
		osc.stop(t0 + i * .06 + .4);
	}
}
/** Soft call when a creature is nearby — different flavors by family */
function playCreatureCall(kind) {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	if (kind === "tiny") for (const [i, f] of [
		880,
		1175,
		1480,
		1760
	].entries()) {
		const osc = c.createOscillator();
		const g = envGain(c, t0 + i * .045, .005, .05, .16, .09);
		osc.type = "sine";
		osc.frequency.value = f;
		osc.connect(g);
		g.connect(out);
		osc.start(t0 + i * .045);
		osc.stop(t0 + i * .045 + .28);
	}
	else if (kind === "frog") {
		const osc = c.createOscillator();
		const g = envGain(c, t0, .02, .08, .25, .18);
		osc.type = "triangle";
		osc.frequency.setValueAtTime(105, t0);
		osc.frequency.exponentialRampToValueAtTime(58, t0 + .22);
		osc.connect(g);
		g.connect(out);
		osc.start(t0);
		osc.stop(t0 + .4);
	} else if (kind === "bird") for (let i = 0; i < 2; i++) {
		const osc = c.createOscillator();
		const g = envGain(c, t0 + i * .07, .01, .04, .12, .1);
		osc.type = "sine";
		osc.frequency.setValueAtTime(1700 - i * 200, t0 + i * .07);
		osc.frequency.exponentialRampToValueAtTime(1200, t0 + i * .07 + .12);
		osc.connect(g);
		g.connect(out);
		osc.start(t0 + i * .07);
		osc.stop(t0 + i * .07 + .22);
	}
	else if (kind === "ghost") {
		const osc = c.createOscillator();
		const g = envGain(c, t0, .05, .2, .55, .1);
		osc.type = "sine";
		osc.frequency.setValueAtTime(240, t0);
		osc.frequency.exponentialRampToValueAtTime(120, t0 + .6);
		osc.connect(g);
		g.connect(out);
		osc.start(t0);
		osc.stop(t0 + .85);
		const o2 = c.createOscillator();
		const g2 = envGain(c, t0 + .05, .04, .2, .45, .05);
		o2.type = "triangle";
		o2.frequency.setValueAtTime(360, t0 + .05);
		o2.frequency.exponentialRampToValueAtTime(180, t0 + .55);
		o2.connect(g2);
		g2.connect(out);
		o2.start(t0 + .05);
		o2.stop(t0 + .8);
	} else if (kind === "water") {
		const len = .32;
		const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
		const data = buffer.getChannelData(0);
		for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 1.4);
		const src = c.createBufferSource();
		src.buffer = buffer;
		const f = c.createBiquadFilter();
		f.type = "bandpass";
		f.frequency.value = 650;
		const g = envGain(c, t0, .01, .06, .2, .14);
		src.connect(f);
		f.connect(g);
		g.connect(out);
		src.start(t0);
		src.stop(t0 + len);
	} else {
		const osc = c.createOscillator();
		const g = envGain(c, t0, .01, .06, .25, .12);
		osc.type = "sawtooth";
		osc.frequency.setValueAtTime(95, t0);
		osc.frequency.exponentialRampToValueAtTime(48, t0 + .28);
		const f = c.createBiquadFilter();
		f.type = "lowpass";
		f.frequency.value = 320;
		osc.connect(f);
		f.connect(g);
		g.connect(out);
		osc.start(t0);
		osc.stop(t0 + .4);
	}
}
var rainNodes = [];
var rainRunning = false;
function startRain() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted || rainRunning) return;
	rainRunning = true;
	const buffer = c.createBuffer(1, Math.floor(c.sampleRate * 2), c.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
	const src = c.createBufferSource();
	src.buffer = buffer;
	src.loop = true;
	const filter = c.createBiquadFilter();
	filter.type = "bandpass";
	filter.frequency.value = 1200;
	filter.Q.value = .4;
	const g = c.createGain();
	g.gain.value = 1e-4;
	g.gain.exponentialRampToValueAtTime(.045, c.currentTime + 1.2);
	src.connect(filter);
	filter.connect(g);
	g.connect(out);
	src.start();
	rainNodes = [
		src,
		filter,
		g
	];
}
function stopRain() {
	for (const n of rainNodes) try {
		if ("stop" in n && typeof n.stop === "function") n.stop();
		n.disconnect();
	} catch {}
	rainNodes = [];
	rainRunning = false;
}
function playSoftLightning() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	const len = .35;
	const buffer = c.createBuffer(1, Math.floor(c.sampleRate * len), c.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
	const src = c.createBufferSource();
	src.buffer = buffer;
	const filter = c.createBiquadFilter();
	filter.type = "highpass";
	filter.frequency.value = 800;
	const g = envGain(c, t0, .001, .02, .25, .12);
	src.connect(filter);
	filter.connect(g);
	g.connect(out);
	src.start(t0);
	src.stop(t0 + len);
	setTimeout(() => playThunder(), 280);
}
/** Soft heart-skip sting — entering Ghost Hollow */
function playHeartSkip() {
	const c = ensureGraph();
	const out = sfxOut();
	if (!c || !out || !unlocked || muted) return;
	const t0 = c.currentTime;
	for (const [i, f] of [90, 70].entries()) {
		const osc = c.createOscillator();
		const g = envGain(c, t0 + i * .14, .01, .05, .2, .12);
		osc.type = "sine";
		osc.frequency.value = f;
		osc.connect(g);
		g.connect(out);
		osc.start(t0 + i * .14);
		osc.stop(t0 + i * .14 + .35);
	}
	const h = c.createOscillator();
	const hg = envGain(c, t0 + .08, .02, .1, .45, .04);
	h.type = "triangle";
	h.frequency.value = 880;
	h.connect(hg);
	hg.connect(out);
	h.start(t0 + .08);
	h.stop(t0 + .7);
}
function stopAmbience() {
	for (const n of ambienceNodes) try {
		if ("stop" in n && typeof n.stop === "function") n.stop();
		n.disconnect();
	} catch {}
	ambienceNodes = [];
	musicPhase = null;
}
function setMusicPhase(phase) {
	if (musicPhase === phase) return;
	stopAmbience();
	musicPhase = phase;
	const c = ensureGraph();
	const out = musicOut();
	if (!c || !out || !unlocked) return;
	const t0 = c.currentTime;
	const baseFreq = phase === "night" || phase === "dusk" ? 55 : phase === "dawn" || phase === "title" ? 65 : phase === "evening" ? 70 : 80;
	const drone = c.createOscillator();
	const dg = c.createGain();
	drone.type = "sine";
	drone.frequency.value = baseFreq;
	dg.gain.value = 1e-4;
	dg.gain.exponentialRampToValueAtTime(phase === "night" ? .045 : .03, t0 + 1.5);
	drone.connect(dg);
	dg.connect(out);
	drone.start(t0);
	ambienceNodes.push(drone, dg);
	const partial = c.createOscillator();
	const pg = c.createGain();
	partial.type = "triangle";
	partial.frequency.value = baseFreq * 1.5;
	pg.gain.value = 1e-4;
	pg.gain.exponentialRampToValueAtTime(.012, t0 + 2);
	partial.connect(pg);
	pg.connect(out);
	partial.start(t0);
	ambienceNodes.push(partial, pg);
	if (phase === "night" || phase === "dusk" || phase === "title") {
		const chill = c.createOscillator();
		const cg = c.createGain();
		chill.type = "sine";
		chill.frequency.value = 220;
		cg.gain.value = 1e-4;
		cg.gain.exponentialRampToValueAtTime(.008, t0 + 2);
		chill.connect(cg);
		cg.connect(out);
		chill.start(t0);
		ambienceNodes.push(chill, cg);
	}
	if (phase === "morning" || phase === "sunrise" || phase === "dawn") {
		const chime = c.createOscillator();
		const cg = c.createGain();
		chime.type = "sine";
		chime.frequency.value = phase === "morning" || phase === "sunrise" ? 523 : phase === "dawn" ? 392 : 349;
		cg.gain.value = 1e-4;
		const pulse = c.createOscillator();
		const pgg = c.createGain();
		pulse.frequency.value = .08;
		pgg.gain.value = .012;
		pulse.connect(pgg);
		const base = c.createConstantSource();
		base.offset.value = .002;
		base.connect(cg.gain);
		pgg.connect(cg.gain);
		chime.connect(cg);
		cg.connect(out);
		chime.start(t0);
		pulse.start(t0);
		base.start(t0);
		ambienceNodes.push(chime, pulse, base, cg);
	}
}
function disposeAudio() {
	stopAmbience();
	stopRain();
	stopHollowWind();
	for (const t of timers) window.clearTimeout(t);
	timers.length = 0;
}
var WORLD_W = 2400;
var WORLD_H = 1800;
var MASK_SCALE = 8;
var MASK_W = Math.ceil(WORLD_W / MASK_SCALE);
var MASK_H = Math.ceil(WORLD_H / MASK_SCALE);
var PLAYER_R = 14;
var PLAYER_SPEED = 118;
var MAX_HEALTH = 100;
var DAY_DURATION = 520;
var DOC_HOLD = 1.55;
function clamp(v, a, b) {
	return Math.max(a, Math.min(b, v));
}
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function dist(ax, ay, bx, by) {
	return Math.hypot(ax - bx, ay - by);
}
function rand(a, b) {
	return a + Math.random() * (b - a);
}
function timePhaseFromProgress(p) {
	if (p < .08) return "dawn";
	if (p < .16) return "sunrise";
	if (p < .38) return "morning";
	if (p < .55) return "afternoon";
	if (p < .68) return "evening";
	if (p < .78) return "dusk";
	return "night";
}
function timeLabel(p) {
	const hours = 5.5 + p * 17;
	const h = Math.floor(hours) % 24;
	const m = Math.floor(hours % 1 * 60);
	const am = h < 12;
	return `${h % 12 === 0 ? 12 : h % 12}:${m.toString().padStart(2, "0")} ${am ? "AM" : "PM"}`;
}
function propSprite(kind) {
	return {
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
		blueLight: "/sprites/prop-blue-light.png"
	}[kind] ?? "/sprites/prop-1.png";
}
function propMeta(kind) {
	switch (kind) {
		case "cypress":
		case "cypressMoss": return {
			collides: true,
			radius: 22,
			tall: true,
			scale: 1.05
		};
		case "tupelo": return {
			collides: true,
			radius: 20,
			tall: true,
			scale: 1
		};
		case "pine":
		case "maple": return {
			collides: true,
			radius: 18,
			tall: true,
			scale: .95
		};
		case "cabin":
		case "cabinTin":
		case "cabinSunk":
		case "cabinBoarded":
		case "cabinRocker": return {
			collides: true,
			radius: 44,
			tall: true,
			scale: 1.1
		};
		case "pier":
		case "pierNets":
		case "pierLantern":
		case "pierBroken":
		case "pierDock": return {
			collides: false,
			radius: 34,
			tall: false,
			scale: 1
		};
		case "canoe":
		case "skiff": return {
			collides: false,
			radius: 28,
			tall: false,
			scale: .95
		};
		case "knees":
		case "stump":
		case "barrel":
		case "tire":
		case "trap": return {
			collides: true,
			radius: 14,
			tall: false,
			scale: .8
		};
		case "mossHang":
		case "moss": return {
			collides: false,
			radius: 12,
			tall: true,
			scale: .85
		};
		default: return {
			collides: false,
			radius: 12,
			tall: false,
			scale: .7
		};
	}
}
var BayouEngine = class {
	canvas;
	ctx;
	dpr = 1;
	viewW = 800;
	viewH = 600;
	camX = 0;
	camY = 0;
	running = false;
	raf = 0;
	lastT = 0;
	loaded = false;
	phase = "title";
	dayProgress = .05;
	health = MAX_HEALTH;
	shake = 0;
	muted = false;
	playerX = WORLD_W / 2;
	playerY = WORLD_H / 2;
	playerFacing = 0;
	playerBob = 0;
	keys = /* @__PURE__ */ new Set();
	touchMX = 0;
	touchMY = 0;
	touchActive = false;
	wasInWater = false;
	stepTimer = 0;
	nearCabinSfx = false;
	nearCanoeSfx = false;
	nearPierSfx = false;
	fireflyTickCd = 0;
	frogBurstCd = 0;
	creatureCallCd = 0;
	landMask = new Float32Array(MASK_W * MASK_H);
	depthMask = new Float32Array(MASK_W * MASK_H);
	props = [];
	creatures = [];
	pickups = [];
	particles = [];
	bugs = [];
	fogBands = [];
	companions = [];
	documented = /* @__PURE__ */ new Set();
	floraDocumented = /* @__PURE__ */ new Set();
	pagesFound = /* @__PURE__ */ new Set();
	specimens = /* @__PURE__ */ new Set();
	placeVisited = /* @__PURE__ */ new Map();
	placeSpecimen = /* @__PURE__ */ new Map();
	placePositions = /* @__PURE__ */ new Map();
	docCharge = 0;
	toasts = [];
	message = null;
	sighting = null;
	sightingCd = 0;
	cabinNoteTitle = null;
	cabinNoteBody = null;
	reading = false;
	readingTitle = null;
	readingKind = null;
	grimoireOpen = false;
	lastPageTitle = null;
	lastPageBody = null;
	pendingPlaceId = null;
	helpOpen = false;
	activeGift = null;
	rainActive = false;
	lightningFlash = 0;
	lightningCd = 0;
	nightClimaxShown = false;
	softWinShown = false;
	wasInHollow = false;
	spawnCooldowns = /* @__PURE__ */ new Map();
	uid = 1;
	images = /* @__PURE__ */ new Map();
	snapshotCb = null;
	emitAcc = 0;
	constructor(canvas) {
		this.canvas = canvas;
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("2d context missing");
		this.ctx = ctx;
		this.bindKeys();
		this.buildWorld();
	}
	onSnapshot(cb) {
		this.snapshotCb = cb;
	}
	emit() {
		this.snapshotCb?.(this.getSnapshot());
	}
	async load() {
		const urls = /* @__PURE__ */ new Set();
		for (const c of CREATURE_DEFS) urls.add(c.sprite);
		for (const f of FLORA_DEFS) urls.add(f.sprite);
		for (const p of PLACE_DEFS) {
			urls.add(p.specimenSprite);
			urls.add(p.sketchSprite);
		}
		for (const k of Object.keys(propMeta));
		for (const k of [
			"lilypad",
			"lily",
			"stump",
			"moss",
			"post",
			"cypress",
			"cypressMoss",
			"tupelo",
			"knees",
			"pine",
			"maple",
			"pier",
			"pierLantern",
			"pierBroken",
			"pierNets",
			"pierDock",
			"canoe",
			"cabin",
			"cabinTin",
			"cabinSunk",
			"cabinBoarded",
			"cabinRocker",
			"mushrooms",
			"duckweed",
			"algae",
			"duckweedMat",
			"algaeStrand",
			"mossHang",
			"scum",
			"cross",
			"headstone",
			"noHunting",
			"barrel",
			"tire",
			"trap",
			"nest",
			"bootsStump",
			"skiff",
			"railTies",
			"swing",
			"doghouse",
			"mailbox",
			"floatBottle",
			"blueLight"
		]) urls.add(propSprite(k));
		urls.add("/sprites/dir-1.png");
		urls.add("/sprites/dir-2.png");
		urls.add("/sprites/dir-3.png");
		urls.add("/sprites/dir-4.png");
		urls.add("/sprites/lantern.png");
		urls.add("/sprites/companion-deer.png");
		urls.add("/sprites/lightning-bug.png");
		await Promise.all([...urls].map((src) => new Promise((res) => {
			const im = new Image();
			im.onload = () => {
				this.images.set(src, im);
				res();
			};
			im.onerror = () => res();
			im.src = src;
		})));
		this.loaded = true;
		this.emit();
	}
	start() {
		if (this.running) return;
		this.running = true;
		this.lastT = performance.now();
		const loop = (t) => {
			if (!this.running) return;
			const dt = Math.min(.05, (t - this.lastT) / 1e3);
			this.lastT = t;
			this.update(dt);
			this.draw();
			this.emitAcc += dt;
			if (this.emitAcc > .08) {
				this.emitAcc = 0;
				this.emit();
			}
			this.raf = requestAnimationFrame(loop);
		};
		this.raf = requestAnimationFrame(loop);
		unlockAudio().then(() => setMusicPhase("title"));
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
	startGame() {
		unlockAudio();
		this.phase = "playing";
		this.dayProgress = .02;
		this.health = MAX_HEALTH;
		this.playerX = WORLD_W / 2;
		this.playerY = 940;
		this.playerFacing = 0;
		this.documented.clear();
		this.floraDocumented.clear();
		this.pagesFound.clear();
		this.specimens.clear();
		this.placeVisited.clear();
		this.placeSpecimen.clear();
		for (const p of PLACE_DEFS) {
			this.placeVisited.set(p.id, false);
			this.placeSpecimen.set(p.id, false);
		}
		this.creatures = [];
		this.particles = [];
		this.companions = [];
		this.toasts = [];
		this.activeGift = null;
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
		this.frogBurstCd = .3;
		this.ambienceTimer = .35;
		this.sighting = null;
		this.docCharge = 0;
		this.clearReading(false);
		this.helpOpen = false;
		this.spawnCooldowns.clear();
		for (const pk of this.pickups) pk.taken = false;
		this.bugs = this.makeBugs(90);
		this.pushToast("Walk toward soft glows. Names wait in your journal.", "#c4a35a");
		setMusicPhase("dawn");
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
	setTouchMove(x, y, active) {
		this.touchMX = x;
		this.touchMY = y;
		this.touchActive = active;
	}
	documentNearest() {
		if (this.phase !== "playing" || this.isReading()) return;
		const c = this.findNearestDocumentable();
		const f = this.findNearestFlora();
		if (c) {
			this.finishDocumentCreature(c);
			return;
		}
		if (f) {
			this.finishDocumentFlora(f.id);
			return;
		}
		let bestC = null;
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
		this.pushToast("Walk closer to a glow to document.", "#c4a35a");
	}
	tryInteract() {
		if (this.phase !== "playing") return false;
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
		if (this.phase === "journal") this.phase = "playing";
		else if (this.phase === "playing") {
			this.phase = "journal";
			this.helpOpen = false;
		}
		this.emit();
	}
	toggleMute() {
		this.muted = toggleMute();
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
		this.activateGift(pd);
		this.clearReading(true);
		this.pushToast(already ? "Gift reawakened…" : "Pressed into the book…", "#c4a35a");
	}
	toggleHelp() {
		this.helpOpen = !this.helpOpen;
		if (this.helpOpen && this.phase === "journal") this.phase = "playing";
		this.emit();
		return this.helpOpen;
	}
	setHelpOpen(open) {
		this.helpOpen = open;
		this.emit();
	}
	isReading() {
		return !!this.message || !!this.cabinNoteBody || this.phase === "journal" || this.helpOpen || this.reading;
	}
	getSnapshot() {
		const nearC = this.findNearestDocumentable();
		const nearF = this.findNearestFlora();
		const nearPlace = this.findNearPlace();
		const playerInHollow = inHollow(this.playerX, this.playerY);
		const z = zoneAt(this.playerX, this.playerY);
		const places = PLACE_DEFS.map((p) => {
			const pos = this.placePositions.get(p.id) ?? {
				x: 0,
				y: 0
			};
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
				effectDesc: p.effectDesc
			};
		});
		let pending = null;
		if (this.pendingPlaceId) {
			const pd = placeById(this.pendingPlaceId);
			if (pd) pending = {
				id: pd.specimenId,
				name: pd.specimenName,
				sprite: pd.specimenSprite,
				effectLabel: pd.effectLabel,
				effectDesc: pd.effectDesc,
				alreadyPressed: this.specimens.has(pd.specimenId)
			};
		}
		const [lr, lg, lb] = lanternMix(PLACE_DEFS.filter((p) => this.specimens.has(p.specimenId)).map((p) => p.lanternColor));
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
			lantern: this.dayProgress > .55 || !!this.activeGift,
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
			activeEffects: this.activeGift ? [{
				id: this.activeGift.placeId,
				label: this.activeGift.label,
				remaining: this.activeGift.life
			}] : [],
			lanternColor: `rgb(${lr},${lg},${lb})`,
			rainActive: this.rainActive,
			pendingSpecimen: pending,
			helpOpen: this.helpOpen,
			floraDocumented: [...this.floraDocumented],
			totalFlora: FLORA_DEFS.length,
			nearFlora: nearF ? {
				id: nearF.id,
				name: nearF.name,
				sprite: nearF.sprite
			} : null,
			inHollow: playerInHollow,
			zoneLabel: z === "hollow" ? HOLLOW.name : z === "channel" ? "Deep channel" : null
		};
	}
	buildWorld() {
		this.genTerrain();
		this.props = [];
		this.placePositions.clear();
		for (const slot of PLACE_SLOTS) {
			const def = placeById(slot.id);
			if (!def) continue;
			const kind = def.propKinds[0];
			const meta = propMeta(kind);
			const p = {
				kind,
				x: slot.x,
				y: slot.y,
				scale: meta.scale,
				rot: 0,
				collides: meta.collides,
				radius: meta.radius,
				tall: meta.tall,
				placeId: def.id,
				lamp: kind === "cabinRocker" || kind === "pierLantern"
			};
			this.props.push(p);
			this.placePositions.set(def.id, {
				x: slot.x,
				y: slot.y
			});
			this.placeVisited.set(def.id, false);
			this.placeSpecimen.set(def.id, false);
		}
		this.scatterProp("cypress", 28, (x, y) => this.sampleLand(x, y) > .48 && !inHollow(x, y), 110);
		this.scatterProp("cypressMoss", 18, (x, y) => this.sampleLand(x, y) > .42, 120);
		this.scatterProp("cypressMoss", 14, (x, y) => inHollow(x, y) && this.sampleLand(x, y) > .35, 100);
		this.scatterProp("tupelo", 12, (x, y) => this.sampleLand(x, y) > .35 && this.sampleLand(x, y) < .7, 100);
		this.scatterProp("pine", 10, (x, y) => this.sampleLand(x, y) > .62, 120);
		this.scatterProp("maple", 8, (x, y) => this.sampleLand(x, y) > .55, 120);
		this.scatterProp("knees", 22, (x, y) => this.sampleLand(x, y) > .25 && this.sampleLand(x, y) < .55, 70);
		this.scatterProp("mossHang", 16, (x, y) => this.sampleLand(x, y) > .4, 90);
		this.scatterProp("mushrooms", 14, (x, y) => this.sampleLand(x, y) > .5, 80);
		this.scatterProp("lilypad", 40, (x, y) => this.sampleLand(x, y) < .35, 55);
		this.scatterProp("lily", 18, (x, y) => this.sampleLand(x, y) < .32, 70);
		this.scatterProp("duckweed", 30, (x, y) => this.sampleLand(x, y) < .4, 50);
		this.scatterProp("algae", 20, (x, y) => this.sampleLand(x, y) < .38, 55);
		this.scatterProp("stump", 10, (x, y) => this.sampleLand(x, y) > .5, 90);
		this.scatterProp("barrel", 6, (x, y) => this.sampleLand(x, y) > .45, 140);
		this.scatterProp("tire", 5, (x, y) => this.sampleLand(x, y) < .5, 140);
		this.scatterProp("trap", 6, (x, y) => this.sampleLand(x, y) < .55, 130);
		this.scatterProp("floatBottle", 8, (x, y) => this.sampleLand(x, y) < .4, 120);
		this.scatterProp("cross", 4, (x, y) => inHollow(x, y) || this.sampleLand(x, y) > .5, 160);
		this.scatterProp("headstone", 5, (x, y) => inHollow(x, y), 140);
		this.scatterProp("railTies", 6, (x, y) => inHollow(x, y) || this.sampleLand(x, y) > .4, 150);
		this.scatterProp("noHunting", 4, (x, y) => this.sampleLand(x, y) > .5, 180);
		this.scatterProp("blueLight", 8, (x, y) => inHollow(x, y), 100);
		this.placeGrimoire();
		this.fogBands = Array.from({ length: 12 }, () => ({
			x: rand(0, WORLD_W),
			y: rand(0, WORLD_H),
			w: rand(180, 360),
			h: rand(40, 90),
			phase: rand(0, Math.PI * 2)
		}));
		this.bugs = this.makeBugs(90);
	}
	scatterProp(kind, count, ok, minDist = 80) {
		const meta = propMeta(kind);
		let placed = 0;
		let tries = 0;
		while (placed < count && tries < count * 40) {
			tries++;
			const x = rand(60, WORLD_W - 60);
			const y = rand(60, WORLD_H - 60);
			if (!ok(x, y)) continue;
			let blocked = false;
			for (const slot of PLACE_SLOTS) if (dist(x, y, slot.x, slot.y) < 90) {
				blocked = true;
				break;
			}
			if (blocked) continue;
			if (meta.tall) {
				for (const p of this.props) if (p.tall && dist(x, y, p.x, p.y) < minDist) {
					blocked = true;
					break;
				}
			}
			if (blocked) continue;
			this.props.push({
				kind,
				x,
				y,
				scale: meta.scale * rand(.85, 1.15),
				rot: rand(-.15, .15),
				collides: meta.collides,
				radius: meta.radius,
				tall: meta.tall,
				driftX: kind === "duckweed" || kind === "floatBottle" ? rand(-6, 6) : 0,
				driftY: kind === "duckweed" || kind === "floatBottle" ? rand(-4, 4) : 0
			});
			placed++;
		}
	}
	genTerrain() {
		for (let y = 0; y < MASK_H; y++) for (let x = 0; x < MASK_W; x++) {
			const nx = x / MASK_W;
			const ny = y / MASK_H;
			const island = Math.sin(nx * 6.2 + 1.2) * Math.cos(ny * 5.1) * .35 + Math.sin(nx * 14) * Math.cos(ny * 11) * .12;
			const channel = Math.exp(-Math.pow((ny - .52) / .12, 2)) * .45;
			const camp = Math.exp(-((nx - .5) ** 2 + (ny - .5) ** 2) / .035) * .5;
			const hollowEdge = nx < .42 && ny < .45 ? .12 : 0;
			let land = .42 + island - channel + camp - hollowEdge;
			land = clamp(land, 0, 1);
			const depth = clamp(1 - land + channel * .5, 0, 1);
			this.landMask[y * MASK_W + x] = land;
			this.depthMask[y * MASK_W + x] = depth;
		}
	}
	sampleLand(wx, wy) {
		const mx = clamp(Math.floor(wx / MASK_SCALE), 0, MASK_W - 1);
		const my = clamp(Math.floor(wy / MASK_SCALE), 0, MASK_H - 1);
		return this.landMask[my * MASK_W + mx];
	}
	sampleDepth(wx, wy) {
		const mx = clamp(Math.floor(wx / MASK_SCALE), 0, MASK_W - 1);
		const my = clamp(Math.floor(wy / MASK_SCALE), 0, MASK_H - 1);
		return this.depthMask[my * MASK_W + mx];
	}
	isWater(wx, wy) {
		return this.sampleLand(wx, wy) < .42;
	}
	placeGrimoire() {
		this.pickups = [];
		for (const page of GRIMOIRE_PAGES) {
			let x = rand(200, WORLD_W - 200);
			let y = rand(200, WORLD_H - 200);
			if (page.near === "water") for (let i = 0; i < 40; i++) {
				x = rand(100, WORLD_W - 100);
				y = rand(100, WORLD_H - 100);
				if (this.sampleLand(x, y) < .4) break;
			}
			else if (page.near === "deep" || page.near === "cabin") {
				const slot = PLACE_SLOTS[Math.floor(Math.random() * PLACE_SLOTS.length)];
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
				pageId: page.id
			});
		}
	}
	makeBugs(n) {
		return Array.from({ length: n }, () => ({
			x: rand(0, WORLD_W),
			y: rand(0, WORLD_H),
			phase: rand(0, Math.PI * 2),
			blinkRate: rand(1.5, 3.5),
			size: rand(1.5, 3),
			hue: rand(40, 70)
		}));
	}
	update(dt) {
		if (!this.loaded) return;
		if (this.phase === "title") {
			this.dayProgress = (this.dayProgress + dt * .01) % .15;
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
				this.dayProgress = 0;
				this.nightClimaxShown = false;
				this.pushToast("Another dawn on the blackwater…", "#c4a35a");
				this.checkSoftWin();
			}
			setMusicPhase(timePhaseFromProgress(this.dayProgress));
			this.syncRain();
			if (this.dayProgress > .72 && !this.nightClimaxShown) {
				this.nightClimaxShown = true;
				this.pushToast(NIGHT_CLIMAX, "#9ee8ff");
			}
		}
		if (this.phase === "playing" && !this.helpOpen) {
			if (!this.reading && !this.message && !this.cabinNoteBody) this.updatePlayer(dt);
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
	updatePlayer(dt) {
		let mx = 0;
		let my = 0;
		if (this.keys.has("KeyW") || this.keys.has("ArrowUp")) my -= 1;
		if (this.keys.has("KeyS") || this.keys.has("ArrowDown")) my += 1;
		if (this.keys.has("KeyA") || this.keys.has("ArrowLeft")) mx -= 1;
		if (this.keys.has("KeyD") || this.keys.has("ArrowRight")) mx += 1;
		if (this.touchActive) {
			const tx = Math.abs(this.touchMX) < .12 ? 0 : this.touchMX;
			const ty = Math.abs(this.touchMY) < .12 ? 0 : this.touchMY;
			mx += tx;
			my += ty;
		}
		const len = Math.hypot(mx, my);
		if (len > .01) {
			mx /= len;
			my /= len;
			if (Math.abs(mx) > Math.abs(my)) this.playerFacing = mx > 0 ? 2 : 1;
			else this.playerFacing = my > 0 ? 0 : 3;
		}
		const water = this.isWater(this.playerX, this.playerY);
		const spd = PLAYER_SPEED * (water ? .62 : 1);
		let nx = this.playerX + mx * spd * dt;
		let ny = this.playerY + my * spd * dt;
		nx = clamp(nx, 24, WORLD_W - 24);
		ny = clamp(ny, 24, WORLD_H - 24);
		for (const p of this.props) {
			if (!p.collides) continue;
			const d = dist(nx, ny, p.x, p.y);
			const minD = PLAYER_R + p.radius * .5;
			if (d < minD && d > .01) {
				const push = (minD - d) / d;
				nx += (nx - p.x) * push;
				ny += (ny - p.y) * push;
			}
		}
		this.playerX = clamp(nx, 24, WORLD_W - 24);
		this.playerY = clamp(ny, 24, WORLD_H - 24);
		this.playerBob += dt * (len > .01 ? 10 : 3);
		if (water && !this.wasInWater) playWaterEnter();
		this.wasInWater = water;
		if (len > .01) {
			this.stepTimer -= dt;
			if (this.stepTimer <= 0) {
				this.stepTimer = water ? .38 : .32;
				if (water) playWadestep();
				if (this.nearPierSfx && !water) playPierBoard();
				if (water) this.particles.push({
					x: this.playerX,
					y: this.playerY + 8,
					vx: 0,
					vy: 0,
					life: .6,
					maxLife: .6,
					size: 8,
					color: "rgba(180,220,200,0.35)",
					kind: "ripple"
				});
			}
		}
		this.updateProximitySfx();
	}
	updateProximitySfx() {
		let cabin = false;
		let canoe = false;
		let pier = false;
		for (const p of this.props) {
			const d = dist(this.playerX, this.playerY, p.x, p.y);
			const def = placeByProp(p.kind);
			if (def?.kind === "cabin" && d < 78) cabin = true;
			if ((p.kind === "canoe" || def?.kind === "boat") && d < 62) canoe = true;
			if ((def?.kind === "pier" || p.kind === "pier" || p.kind === "pierNets" || p.kind === "pierDock") && d < 70) pier = true;
		}
		if (cabin && !this.nearCabinSfx) playCabinApproach();
		if (canoe && !this.nearCanoeSfx) playCanoe();
		if (pier && !this.nearPierSfx) playPierBoard();
		this.nearCabinSfx = cabin;
		this.nearCanoeSfx = canoe;
		this.nearPierSfx = pier;
	}
	updateCamera(dt) {
		const tx = clamp(this.playerX - this.viewW / 2, 0, Math.max(0, WORLD_W - this.viewW));
		const ty = clamp(this.playerY - this.viewH / 2, 0, Math.max(0, WORLD_H - this.viewH));
		const k = 1 - Math.pow(.001, dt);
		this.camX = lerp(this.camX, tx, k);
		this.camY = lerp(this.camY, ty, k);
		if (this.shake > 0) {
			this.camX += (Math.random() - .5) * this.shake * 10;
			this.camY += (Math.random() - .5) * this.shake * 10;
		}
	}
	updateHollowZone() {
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
	updateAmbience(dt) {
		if (this.dayProgress >= .72) {
			this.fireflyTickCd -= dt;
			if (this.fireflyTickCd <= 0) {
				this.fireflyTickCd = rand(1.8, 4.5);
				if (Math.random() < .7) playFireflyTick();
			}
		}
		this.frogBurstCd -= dt;
		if (this.frogBurstCd <= 0) {
			const tp = timePhaseFromProgress(this.dayProgress);
			this.frogBurstCd = tp === "night" || tp === "dusk" ? rand(2.8, 5.5) : rand(1.8, 3.8);
			playBullfrog();
			if (Math.random() < .4) window.setTimeout(() => playBullfrog(), 220 + Math.random() * 380);
		}
		this.creatureCallCd -= dt;
		if (this.creatureCallCd <= 0) {
			this.creatureCallCd = rand(1.8, 3.5);
			let nearest = null;
			let bestD = 200;
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
				else if (id === "ghost-gar" || id === "spirit-catfish" || id === "mossy-gator" || id === "slider-turtle") playCreatureCall("water");
				else if (nearest.def.behavior === "drift" || nearest.def.behavior === "haunt" || nearest.def.rarity === "legendary") playCreatureCall("ghost");
				else playCreatureCall("beast");
			}
		}
		this.ambienceTimer -= dt;
		if (this.ambienceTimer > 0) return;
		this.ambienceTimer = rand(.9, 2.4);
		const tp = timePhaseFromProgress(this.dayProgress);
		const hollow = inHollow(this.playerX, this.playerY);
		const r = Math.random();
		if (tp === "night" || tp === "dusk") {
			if (r < .4) playOwl();
			else if (r < .85) playBullfrog();
			else playFireflyTick();
			return;
		}
		if (hollow) {
			if (r < .25) playBird();
			else if (r < .45) playCicada();
			else playBullfrog();
			return;
		}
		if (r < .32) playBird();
		else if (r < .55) playCicada();
		else playBullfrog();
	}
	ambienceTimer = 2;
	syncRain() {
		const shouldRain = this.dayProgress > .38 && this.dayProgress < .52;
		if (shouldRain && !this.rainActive) {
			this.rainActive = true;
			startRain();
			this.lightningCd = rand(2, 5);
		} else if (!shouldRain && this.rainActive) {
			this.rainActive = false;
			stopRain();
		}
		if (this.rainActive) for (let i = 0; i < 3; i++) this.particles.push({
			x: this.camX + rand(0, this.viewW),
			y: this.camY + rand(-20, this.viewH * .3),
			vx: rand(-20, -5),
			vy: rand(180, 280),
			life: .6,
			maxLife: .6,
			size: 1.5,
			color: "rgba(180,200,220,0.35)",
			kind: "rain"
		});
	}
	trySpawn(dt) {
		for (const [id, cd] of this.spawnCooldowns) this.spawnCooldowns.set(id, cd - dt);
		const p = this.dayProgress;
		for (const def of CREATURE_DEFS) {
			if (p < Math.max(0, def.appearFrom - .12) || p > def.appearTo) continue;
			if (this.documented.has(def.id)) continue;
			const alive = this.creatures.filter((c) => c.alive && c.def.id === def.id);
			const maxAlive = def.rarity === "legendary" ? 1 : def.rarity === "rare" ? 1 : def.rarity === "common" ? 3 : 2;
			if (alive.length >= maxAlive) continue;
			if ((this.spawnCooldowns.get(def.id) ?? 0) > 0) continue;
			this.spawnCooldowns.set(def.id, def.rarity === "legendary" ? rand(18, 35) : rand(6, 14));
			this.spawnOne(def);
		}
	}
	spawnOne(def) {
		let x = 0;
		let y = 0;
		let best = -1;
		for (let i = 0; i < 30; i++) {
			let tx = rand(80, WORLD_W - 80);
			let ty = rand(80, WORLD_H - 80);
			if (HOLLOW_CREATURE_IDS.has(def.id) && Math.random() < .28) {
				tx = rand(HOLLOW.x0 + 40, HOLLOW.x1 - 40);
				ty = rand(HOLLOW.y0 + 40, HOLLOW.y1 - 40);
			}
			if ((def.id === "ghost-gar" || def.id === "spirit-catfish" || def.id === "mossy-gator") && this.sampleLand(tx, ty) > .45) continue;
			let minD = 9999;
			for (const c of this.creatures) {
				if (!c.alive) continue;
				if (c.def.rarity === "legendary" || def.rarity === "legendary") minD = Math.min(minD, dist(tx, ty, c.x, c.y));
			}
			const dPlayer = dist(tx, ty, this.playerX, this.playerY);
			if (dPlayer < 160) continue;
			const score = minD + (dPlayer > 400 ? 50 : 0);
			if (score > best) {
				best = score;
				x = tx;
				y = ty;
			}
		}
		if (best < 0) {
			x = this.playerX + rand(200, 350) * (Math.random() < .5 ? 1 : -1);
			y = this.playerY + rand(150, 300) * (Math.random() < .5 ? 1 : -1);
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
			scale: rand(.92, 1.08)
		});
	}
	updateCreatures(dt) {
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
			if (c.def.danger > 0 && dPlayer < c.def.radius + PLAYER_R + 6 && c.biteCd <= 0 && (c.def.behavior === "aggressive" || c.def.behavior === "haunt")) {
				c.biteCd = 2.6;
				this.shake = .45;
				const ang = Math.atan2(this.playerY - c.y, this.playerX - c.x);
				this.playerX = clamp(this.playerX + Math.cos(ang) * 24, 30, WORLD_W - 30);
				this.playerY = clamp(this.playerY + Math.sin(ang) * 24, 30, WORLD_H - 30);
				this.pushToast("Startled — keep documenting.", "#c4a35a");
				playCreatureCall("ghost");
			}
			if (!c.documented && dPlayer < 220 && dPlayer > 100 && this.sightingCd <= 0 && SIGHTING_LINES[c.def.id] && Math.random() < .002) {
				this.sighting = SIGHTING_LINES[c.def.id];
				this.sightingCd = 4;
			}
		}
		this.creatures = this.creatures.filter((c) => c.alive);
	}
	applyBehavior(c, dt, dPlayer) {
		const def = c.def;
		const speed = def.speed;
		const docRange = def.id === "lutin" || def.id === "feu-follet" ? def.docRange + 24 : def.id === "crawfish" ? def.docRange + 28 : def.docRange;
		if (!c.documented && dPlayer < docRange && this.docCharge > .08) {
			c.vx = 0;
			c.vy = 0;
			return;
		}
		if (def.id === "lutin" || def.id === "feu-follet") {
			if (dPlayer < docRange) {
				c.vx = Math.cos(c.bob * .6 + c.uid) * speed * .15;
				c.vy = Math.sin(c.bob * .5 + c.uid) * speed * .15;
				return;
			}
			c.vx = Math.cos(c.bob * .4 + c.uid) * speed * .35;
			c.vy = Math.sin(c.bob * .35 + c.uid) * speed * .3;
			return;
		}
		const fleeDist = def.id === "crawfish" ? 40 : def.id === "slider-turtle" ? 50 : def.id === "grunch" ? 70 : 95;
		if (c.fleeTimer > 0 || def.behavior === "shy" && dPlayer < fleeDist && !c.documented) {
			const ang = Math.atan2(c.y - this.playerY, c.x - this.playerX);
			const fleeSpd = def.id === "crawfish" || def.id === "slider-turtle" ? speed * .75 : speed * 1.15;
			c.vx = Math.cos(ang) * fleeSpd;
			c.vy = Math.sin(ang) * fleeSpd;
			return;
		}
		if (def.behavior === "aggressive" && dPlayer < 130) {
			const ang = Math.atan2(this.playerY - c.y, this.playerX - c.x);
			c.vx = Math.cos(ang) * speed * .7;
			c.vy = Math.sin(ang) * speed * .7;
			return;
		}
		if (def.behavior === "haunt" && dPlayer < 160) {
			const ang = Math.atan2(this.playerY - c.y, this.playerX - c.x);
			c.vx = Math.cos(ang) * speed * .55;
			c.vy = Math.sin(ang) * speed * .55;
			return;
		}
		if (def.behavior === "drift") {
			c.vx = Math.cos(c.bob * .4 + c.uid) * speed * .4;
			c.vy = Math.sin(c.bob * .35 + c.uid) * speed * .35;
			return;
		}
		if (Math.random() < .02) {
			const a = rand(0, Math.PI * 2);
			c.vx = Math.cos(a) * speed * .5;
			c.vy = Math.sin(a) * speed * .5;
		} else {
			c.vx *= .98;
			c.vy *= .98;
		}
	}
	updateDocumentCharge(dt) {
		const nearC = this.findNearestDocumentable();
		const nearF = this.findNearestFlora();
		if (nearC || nearF) {
			this.docCharge = Math.min(1, this.docCharge + dt / DOC_HOLD);
			if (this.docCharge >= 1) {
				if (nearC) this.finishDocumentCreature(nearC);
				else if (nearF) this.finishDocumentFlora(nearF.id);
				this.docCharge = 0;
			}
		} else this.docCharge = Math.max(0, this.docCharge - dt * 1.2);
	}
	finishDocumentCreature(c) {
		if (this.documented.has(c.def.id)) return;
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
	finishDocumentFlora(id) {
		if (this.floraDocumented.has(id)) return;
		const def = FLORA_DEFS.find((f) => f.id === id);
		if (!def) return;
		this.floraDocumented.add(id);
		playDocumentChime();
		this.reading = true;
		this.readingKind = "flora";
		this.readingTitle = def.name;
		this.message = def.lore;
		this.cabinNoteTitle = def.name;
		this.cabinNoteBody = def.lore;
		this.docCharge = 0;
		this.emit();
	}
	findNearestDocumentable() {
		let best = null;
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
	findNearestFlora() {
		let best = null;
		let bestD = 9999;
		for (const p of this.props) {
			const f = floraByProp(p.kind);
			if (!f || this.floraDocumented.has(f.id)) continue;
			const d = dist(p.x, p.y, this.playerX, this.playerY);
			if (d < f.docRange && d < bestD) {
				bestD = d;
				best = f;
			}
		}
		return best;
	}
	findNearPlace() {
		for (const p of this.props) {
			if (!p.placeId) continue;
			if (dist(p.x, p.y, this.playerX, this.playerY) < 70) {
				const def = placeById(p.placeId);
				if (def) return def;
			}
		}
		return null;
	}
	openPlace(pd) {
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
	updatePickups() {
		for (const pk of this.pickups) {
			if (pk.taken) continue;
			if (dist(pk.x, pk.y, this.playerX, this.playerY) < 36) {
				pk.taken = true;
				this.pagesFound.add(pk.pageId);
				const page = GRIMOIRE_PAGES.find((g) => g.id === pk.pageId);
				if (page) {
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
					this.pushToast("Ghost Swamp page found", "#c4a35a");
					this.checkSoftWin();
					this.emit();
				}
			}
		}
	}
	activateGift(pd) {
		this.activeGift = {
			placeId: pd.id,
			effect: pd.effect,
			life: pd.effectDuration,
			maxLife: pd.effectDuration,
			label: pd.effectLabel
		};
		this.companions = [];
		if (pd.effect === "frog_friend") this.companions.push({
			kind: "frog",
			x: this.playerX - 30,
			y: this.playerY,
			life: pd.effectDuration,
			phase: 0
		});
		else if (pd.effect === "deer_friend") this.companions.push({
			kind: "deer",
			x: this.playerX - 40,
			y: this.playerY + 10,
			life: pd.effectDuration,
			phase: 0
		});
		else if (pd.effect === "dragonfly") this.companions.push({
			kind: "dragonfly",
			x: this.playerX + 20,
			y: this.playerY - 20,
			life: pd.effectDuration,
			phase: 0
		});
	}
	updateGift(dt) {
		if (!this.activeGift) return;
		this.activeGift.life -= dt;
		const g = this.activeGift;
		if (g.effect === "glitter" || g.effect === "lure_sparkle") {
			if (Math.random() < .4) this.particles.push({
				x: this.playerX + rand(-20, 20),
				y: this.playerY + rand(-10, 10),
				vx: rand(-10, 10),
				vy: rand(-40, -10),
				life: .8,
				maxLife: .8,
				size: 3,
				color: g.effect === "lure_sparkle" ? "#ffd070" : "#90e0a0",
				kind: "glitter"
			});
		}
		if (g.effect === "firefly_dance") {
			if (Math.random() < .5) this.particles.push({
				x: this.playerX + Math.cos(performance.now() / 200) * 40,
				y: this.playerY + Math.sin(performance.now() / 200) * 40,
				vx: 0,
				vy: -10,
				life: .5,
				maxLife: .5,
				size: 3,
				color: "#ffe080",
				kind: "firefly"
			});
		}
		if (g.effect === "bottle_ripple" && Math.random() < .3) this.particles.push({
			x: this.playerX,
			y: this.playerY + 8,
			vx: 0,
			vy: 0,
			life: .7,
			maxLife: .7,
			size: 12,
			color: "rgba(100,180,220,0.35)",
			kind: "ripple"
		});
		if (g.life <= 0) this.activeGift = null;
	}
	updateCompanions(dt) {
		for (const c of this.companions) {
			c.life -= dt;
			c.phase += dt;
			const tx = this.playerX - 28 + Math.sin(c.phase) * 10;
			const ty = this.playerY + (c.kind === "dragonfly" ? -24 : 8);
			c.x = lerp(c.x, tx, 1 - Math.pow(.02, dt));
			c.y = lerp(c.y, ty, 1 - Math.pow(.02, dt));
		}
		this.companions = this.companions.filter((c) => c.life > 0);
	}
	updateBugs(dt) {
		if (this.dayProgress < .65) return;
		for (const b of this.bugs) {
			b.phase += dt * b.blinkRate;
			b.x += Math.sin(b.phase) * 8 * dt;
			b.y += Math.cos(b.phase * .7) * 6 * dt;
		}
	}
	updateFog(dt) {
		for (const f of this.fogBands) {
			f.phase += dt * .2;
			f.x += Math.sin(f.phase) * 4 * dt;
		}
	}
	driftProps(dt) {
		for (const p of this.props) if (p.driftX) {
			p.x += Math.sin(performance.now() / 2e3 + p.y) * (p.driftX || 0) * dt * .05;
			p.y += Math.cos(performance.now() / 2500 + p.x) * (p.driftY || 0) * dt * .05;
		}
	}
	updateParticles(dt) {
		for (const p of this.particles) {
			p.life -= dt;
			p.x += p.vx * dt;
			p.y += p.vy * dt;
		}
		this.particles = this.particles.filter((p) => p.life > 0);
	}
	updateToasts(dt) {
		for (const t of this.toasts) t.life -= dt;
		this.toasts = this.toasts.filter((t) => t.life > 0);
	}
	pushToast(text, color) {
		if (this.toasts[0]?.text === text) return;
		this.toasts.unshift({
			text,
			life: 3.2,
			color
		});
		if (this.toasts.length > 2) this.toasts.length = 2;
	}
	clearReading(emitAfter) {
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
	checkSoftWin() {
		if (this.softWinShown) return;
		if (this.documented.size >= CREATURE_DEFS.length && this.pagesFound.size >= GRIMOIRE_PAGES.length) {
			this.softWinShown = true;
			this.phase = "win";
			this.pushToast("Every legend & page recorded.", "#c4a35a");
			this.emit();
		}
	}
	img(src) {
		return this.images.get(src);
	}
	draw() {
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
		this.drawProps(ctx, true, .7);
		this.drawCreatures(ctx);
		this.drawCompanions(ctx);
		this.drawPlayer(ctx);
		this.drawPickups(ctx);
		this.drawParticles(ctx);
		this.drawFireflies(ctx);
		this.drawHollowOverlay(ctx);
		ctx.restore();
		this.drawLightingOverlay(ctx, w, h);
		if (this.lightningFlash > 0) {
			ctx.fillStyle = `rgba(220,230,255,${.25 * this.lightningFlash})`;
			ctx.fillRect(0, 0, w, h);
		}
		if (this.phase === "title") {
			ctx.fillStyle = "rgba(8,12,10,0.35)";
			ctx.fillRect(0, 0, w, h);
		}
		ctx.restore();
	}
	skyColor() {
		return {
			dawn: "#1a2830",
			sunrise: "#2a3a40",
			morning: "#2f4a48",
			afternoon: "#2a4840",
			evening: "#2a3840",
			dusk: "#1a2430",
			night: "#0a1218"
		}[timePhaseFromProgress(this.dayProgress)];
	}
	drawTerrain(ctx) {
		const x0 = Math.max(0, Math.floor(this.camX / MASK_SCALE) - 1);
		const y0 = Math.max(0, Math.floor(this.camY / MASK_SCALE) - 1);
		const x1 = Math.min(MASK_W, Math.ceil((this.camX + this.viewW) / MASK_SCALE) + 1);
		const y1 = Math.min(MASK_H, Math.ceil((this.camY + this.viewH) / MASK_SCALE) + 1);
		const night = this.dayProgress > .65 ? (this.dayProgress - .65) / .35 : 0;
		for (let my = y0; my < y1; my++) for (let mx = x0; mx < x1; mx++) {
			const land = this.landMask[my * MASK_W + mx];
			const depth = this.depthMask[my * MASK_W + mx];
			const wx = mx * MASK_SCALE;
			const wy = my * MASK_SCALE;
			const hollow = inHollow(wx + 2, wy + 2);
			if (land >= .42) {
				const g = 70 + land * 40 - night * 25;
				ctx.fillStyle = hollow ? `rgb(${28 + g * .2},${40 + g * .35},${38 + g * .25})` : `rgb(${40 + g * .35},${55 + g * .5},${40 + g * .3})`;
			} else {
				const d = depth;
				ctx.fillStyle = `rgb(${Math.floor(lerp(28, 12, d) - (hollow ? 6 : 0))},${Math.floor(lerp(48, 22, d) - (hollow ? 4 : 0))},${Math.floor(lerp(42, 28, d) + (hollow ? 8 : 0))})`;
			}
			ctx.fillRect(wx, wy, 8.5, 8.5);
		}
	}
	drawFog(ctx) {
		const mist = this.dayProgress < .15 ? .25 : this.dayProgress > .7 ? .15 : .06;
		for (const f of this.fogBands) {
			if (f.x + f.w < this.camX || f.x > this.camX + this.viewW || f.y + f.h < this.camY || f.y > this.camY + this.viewH) continue;
			const g = ctx.createRadialGradient(f.x, f.y, 10, f.x, f.y, f.w * .5);
			g.addColorStop(0, `rgba(200,220,220,${mist})`);
			g.addColorStop(1, "rgba(200,220,220,0)");
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.ellipse(f.x, f.y, f.w * .5, f.h * .5, 0, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	drawProps(ctx, tallOnly, alpha = 1) {
		const vis = this.props.filter((p) => tallOnly ? p.tall : !p.tall).filter((p) => p.x > this.camX - 80 && p.x < this.camX + this.viewW + 80 && p.y > this.camY - 120 && p.y < this.camY + this.viewH + 80);
		vis.sort((a, b) => a.y - b.y);
		for (const p of vis) if (alpha < 1) {
			ctx.save();
			ctx.globalAlpha = alpha;
			this.drawProp(ctx, p);
			ctx.restore();
		} else this.drawProp(ctx, p);
	}
	drawProp(ctx, p) {
		const src = propSprite(p.kind);
		const im = this.img(src);
		const bob = p.kind === "floatBottle" || p.kind === "lilypad" || p.kind === "lily" ? Math.sin(performance.now() / 700 + p.x * .01) * 2 : 0;
		const flora = floraByProp(p.kind);
		if (flora && !this.floraDocumented.has(flora.id)) {
			const pulse = .35 + Math.sin(performance.now() / 450 + p.x * .02) * .15;
			const g = ctx.createRadialGradient(p.x, p.y - 8, 4, p.x, p.y - 8, 34);
			g.addColorStop(0, `rgba(120, 220, 140, ${pulse})`);
			g.addColorStop(1, "rgba(120, 220, 140, 0)");
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.arc(p.x, p.y - 8, 34, 0, Math.PI * 2);
			ctx.fill();
		}
		if (p.placeId && !this.placeSpecimen.get(p.placeId)) {
			const pulse = .3 + Math.sin(performance.now() / 500 + p.y) * .12;
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
			const iw = im.naturalWidth * sc * .55;
			const ih = im.naturalHeight * sc * .55;
			ctx.save();
			ctx.translate(p.x, p.y + bob);
			ctx.rotate(p.rot);
			ctx.fillStyle = "rgba(0,0,0,0.2)";
			ctx.beginPath();
			ctx.ellipse(0, ih * .15, iw * .28, ih * .08, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.drawImage(im, -iw / 2, -ih * .85, iw, ih);
			ctx.restore();
		} else {
			ctx.fillStyle = "#4a6a40";
			ctx.beginPath();
			ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	drawPickups(ctx) {
		for (const pk of this.pickups) {
			if (pk.taken) continue;
			if (pk.x < this.camX - 100 || pk.x > this.camX + this.viewW + 100 || pk.y < this.camY - 100 || pk.y > this.camY + this.viewH + 100) continue;
			const t = performance.now() / 400 + pk.x * .01;
			const pulse = .6 + Math.sin(t) * .22;
			const bob = Math.sin(t * .8) * 5;
			const g = ctx.createRadialGradient(pk.x, pk.y + bob, 6, pk.x, pk.y + bob, 72);
			g.addColorStop(0, `rgba(255, 230, 150, ${.75 * pulse})`);
			g.addColorStop(.35, `rgba(240, 200, 100, ${.4 * pulse})`);
			g.addColorStop(1, "rgba(240, 190, 80, 0)");
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.arc(pk.x, pk.y + bob, 72, 0, Math.PI * 2);
			ctx.fill();
			ctx.save();
			ctx.translate(pk.x, pk.y + bob);
			ctx.rotate(Math.sin(t * .3) * .06);
			ctx.fillStyle = "rgba(0,0,0,0.4)";
			ctx.fillRect(-20, -26, 42, 52);
			ctx.fillStyle = `rgba(250, 236, 200, 0.95)`;
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
			ctx.strokeStyle = `rgba(90, 70, 40, ${.4 + pulse * .2})`;
			ctx.lineWidth = 1.5;
			for (let i = 0; i < 5; i++) {
				ctx.beginPath();
				ctx.moveTo(-12, -12 + i * 7);
				ctx.lineTo(12, -12 + i * 7);
				ctx.stroke();
			}
			ctx.fillStyle = `rgba(210, 165, 50, ${.85 + pulse * .15})`;
			ctx.beginPath();
			ctx.arc(0, 14, 5, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
	}
	drawCreatures(ctx) {
		const list = this.creatures.filter((c) => c.alive && c.x > this.camX - 60 && c.x < this.camX + this.viewW + 60 && c.y > this.camY - 60 && c.y < this.camY + this.viewH + 60).sort((a, b) => a.y - b.y);
		for (const c of list) {
			const bob = Math.sin(c.bob) * 3;
			const im = this.img(c.def.sprite);
			const sc = (c.def.id === "egret" || c.def.id === "nutria" || c.def.id === "slider-turtle" ? .34 : c.def.id === "crawfish" || c.def.id === "lutin" || c.def.id === "feu-follet" ? .45 : c.def.rarity === "legendary" ? .56 : .5) * (.85 + Math.min(c.def.radius, 32) / 90) * c.scale;
			if (!this.documented.has(c.def.id)) {
				const pulse = .4 + Math.sin(performance.now() / 400 + c.uid) * .15;
				const g = ctx.createRadialGradient(c.x, c.y - 8, 4, c.x, c.y - 8, 36);
				g.addColorStop(0, `${c.def.color}${Math.floor(pulse * 180).toString(16).padStart(2, "0")}`);
				g.addColorStop(1, "rgba(0,0,0,0)");
				ctx.save();
				ctx.globalAlpha = pulse * .7;
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
				if (c.documented) ctx.globalAlpha = .75;
				ctx.drawImage(im, -iw / 2, -ih * .8, iw, ih);
				ctx.restore();
			} else {
				ctx.fillStyle = c.def.color;
				ctx.beginPath();
				ctx.arc(c.x, c.y + bob, Math.min(c.def.radius * .4, 16), 0, Math.PI * 2);
				ctx.fill();
			}
			if (!this.documented.has(c.def.id)) {
				const d = dist(c.x, c.y, this.playerX, this.playerY);
				let range = c.def.docRange;
				if (c.def.id === "crawfish") range += 28;
				if (c.def.id === "lutin" || c.def.id === "feu-follet") range += 18;
				if (d < range) {
					ctx.strokeStyle = `rgba(255,200,80,${.5 + this.docCharge * .5})`;
					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.arc(c.x, c.y, range * .5, 0, Math.PI * 2 * Math.max(.05, this.docCharge || .12));
					ctx.stroke();
				}
			}
		}
	}
	drawPlayer(ctx) {
		const dirs = [
			"/sprites/dir-1.png",
			"/sprites/dir-2.png",
			"/sprites/dir-3.png",
			"/sprites/dir-4.png"
		];
		const src = dirs[this.playerFacing] ?? dirs[0];
		const im = this.img(src);
		const bob = Math.sin(this.playerBob) * 2;
		ctx.fillStyle = "rgba(0,0,0,0.25)";
		ctx.beginPath();
		ctx.ellipse(this.playerX, this.playerY + 10, 12, 5, 0, 0, Math.PI * 2);
		ctx.fill();
		if (im && im.complete && im.naturalWidth > 0) ctx.drawImage(im, this.playerX - 20, this.playerY - 40 + bob, 40, 48);
		else {
			ctx.fillStyle = "#d4b896";
			ctx.beginPath();
			ctx.arc(this.playerX, this.playerY + bob, 12, 0, Math.PI * 2);
			ctx.fill();
		}
		if (this.dayProgress > .55 || this.activeGift) {
			const [lr, lg, lb] = lanternMix(PLACE_DEFS.filter((p) => this.specimens.has(p.specimenId)).map((p) => p.lanternColor));
			const pulse = .7 + Math.sin(performance.now() / 350) * .15;
			const grd = ctx.createRadialGradient(this.playerX, this.playerY, 4, this.playerX, this.playerY, 90);
			grd.addColorStop(0, `rgba(${lr},${lg},${lb},${.35 * pulse})`);
			grd.addColorStop(1, "rgba(0,0,0,0)");
			ctx.fillStyle = grd;
			ctx.beginPath();
			ctx.arc(this.playerX, this.playerY, 90, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	drawCompanions(ctx) {
		for (const comp of this.companions) if (comp.kind === "deer") {
			const im = this.img("/sprites/companion-deer.png");
			if (im && im.complete) ctx.drawImage(im, comp.x - 22, comp.y - 36, 44, 48);
			else {
				ctx.fillStyle = "#c4a882";
				ctx.beginPath();
				ctx.ellipse(comp.x, comp.y, 16, 10, 0, 0, Math.PI * 2);
				ctx.fill();
			}
		} else if (comp.kind === "frog") {
			ctx.fillStyle = "#6b9e3e";
			ctx.beginPath();
			ctx.arc(comp.x, comp.y, 8, 0, Math.PI * 2);
			ctx.fill();
		} else {
			ctx.fillStyle = "#7ef0c0";
			ctx.beginPath();
			ctx.ellipse(comp.x, comp.y, 6, 3, comp.phase, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	drawParticles(ctx) {
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
	drawFireflies(ctx) {
		if (this.dayProgress < .65) return;
		for (const b of this.bugs) {
			if (b.x < this.camX || b.x > this.camX + this.viewW || b.y < this.camY || b.y > this.camY + this.viewH) continue;
			const blink = (Math.sin(b.phase) + 1) * .5;
			if (blink < .35) continue;
			ctx.fillStyle = `rgba(255,230,120,${blink * .85})`;
			ctx.beginPath();
			ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	drawHollowOverlay(ctx) {
		if (!inHollow(this.playerX, this.playerY)) return;
		for (let i = 0; i < 5; i++) {
			const x = HOLLOW.x0 + i * 137 % (HOLLOW.x1 - HOLLOW.x0);
			const y = HOLLOW.y0 + i * 97 % (HOLLOW.y1 - HOLLOW.y0);
			const pulse = .15 + Math.sin(performance.now() / 600 + i) * .08;
			const g = ctx.createRadialGradient(x, y, 2, x, y, 40);
			g.addColorStop(0, `rgba(120,220,255,${pulse})`);
			g.addColorStop(1, "rgba(120,220,255,0)");
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.arc(x, y, 40, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	drawLightingOverlay(ctx, w, h) {
		const night = this.dayProgress > .55 ? (this.dayProgress - .55) / .45 : 0;
		if (night <= .05) return;
		const hollow = inHollow(this.playerX, this.playerY);
		ctx.fillStyle = `rgba(${hollow ? 4 : 6},${hollow ? 8 : 10},${hollow ? 14 : 12},${.15 + night * .55})`;
		ctx.fillRect(0, 0, w, h);
		const grd = ctx.createRadialGradient(w / 2, h / 2, 40, w / 2, h / 2, Math.max(w, h) * .55);
		grd.addColorStop(0, "rgba(0,0,0,0)");
		grd.addColorStop(1, `rgba(0,0,0,${night * .55})`);
		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, w, h);
	}
	bindKeys() {
		this.onKeyDown = (e) => {
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
		this.onKeyUp = (e) => {
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
			}
		};
	}
	onKeyDown = () => {};
	onKeyUp = () => {};
	unbindKeys() {
		window.removeEventListener("keydown", this.onKeyDown);
		window.removeEventListener("keyup", this.onKeyUp);
		delete window.__bayouGame;
	}
};
var emptySnap = {
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
	totalFlora: FLORA_DEFS.length,
	nearFlora: null,
	inHollow: false,
	zoneLabel: null
};
function TimeIcon({ phase }) {
	const cls = "size-4 shrink-0";
	if (phase === "dawn") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudFog, { className: cls });
	if (phase === "sunrise") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunrise, { className: cls });
	if (phase === "morning") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunrise, { className: cls });
	if (phase === "afternoon") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: cls });
	if (phase === "evening") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunset, { className: cls });
	if (phase === "dusk") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sunset, { className: cls });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: cls });
}
function phaseLabel(phase) {
	switch (phase) {
		case "dawn": return "Early mist";
		case "sunrise": return "Sunrise";
		case "morning": return "Morning";
		case "afternoon": return "Afternoon";
		case "evening": return "Evening";
		case "dusk": return "Dusk";
		case "night": return "Deep night";
	}
}
function readingKindLabel(kind) {
	if (kind === "creature") return "Field entry";
	if (kind === "page") return "Ghost Swamp page";
	if (kind === "cabin" || kind === "place") return "Place note";
	if (kind === "flora") return "Bayou flora";
	if (kind === "story") return "Field note";
	return "Reading";
}
function BayouGame() {
	const canvasRef = (0, import_react.useRef)(null);
	const engineRef = (0, import_react.useRef)(null);
	const stickRef = (0, import_react.useRef)(null);
	const [snap, setSnap] = (0, import_react.useState)(emptySnap);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [journalTab, setJournalTab] = (0, import_react.useState)("creatures");
	const [knob, setKnob] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const stickActive = (0, import_react.useRef)(false);
	const STICK_R = 48;
	(0, import_react.useEffect)(() => {
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
	const start = (0, import_react.useCallback)(() => {
		unlockAudio();
		engineRef.current?.startGame();
	}, []);
	const onDoc = (0, import_react.useCallback)(() => {
		engineRef.current?.documentNearest();
	}, []);
	const onInteract = (0, import_react.useCallback)(() => {
		engineRef.current?.tryInteract();
	}, []);
	const onJournal = (0, import_react.useCallback)(() => {
		engineRef.current?.openJournal();
	}, []);
	const onMute = (0, import_react.useCallback)(() => {
		engineRef.current?.toggleMute();
	}, []);
	const dismissReading = (0, import_react.useCallback)(() => {
		engineRef.current?.dismissReading();
	}, []);
	const pressSpecimen = (0, import_react.useCallback)(() => {
		engineRef.current?.pressSpecimen();
	}, []);
	const onHelp = (0, import_react.useCallback)(() => {
		engineRef.current?.toggleHelp();
	}, []);
	const closeHelp = (0, import_react.useCallback)(() => {
		engineRef.current?.setHelpOpen(false);
	}, []);
	const onStickMove = (0, import_react.useCallback)((clientX, clientY) => {
		const el = stickRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height / 2;
		let dx = clientX - cx;
		let dy = clientY - cy;
		const len = Math.hypot(dx, dy);
		if (len > STICK_R && len > .001) {
			dx = dx / len * STICK_R;
			dy = dy / len * STICK_R;
		}
		setKnob({
			x: dx,
			y: dy
		});
		engineRef.current?.setTouchMove(dx / STICK_R, dy / STICK_R, true);
	}, []);
	const onStickEnd = (0, import_react.useCallback)(() => {
		stickActive.current = false;
		setKnob({
			x: 0,
			y: 0
		});
		engineRef.current?.setTouchMove(0, 0, false);
	}, []);
	const playing = snap.phase === "playing" || snap.phase === "journal";
	const near = snap.nearCreature;
	const nearFlora = snap.nearFlora;
	const canDoc = !!(near || nearFlora);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh w-full overflow-hidden bg-bg text-fg touch-none select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "block h-full w-full"
				})
			}),
			snap.phase === "title" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-20 flex flex-col items-center justify-end pb-10 sm:justify-center sm:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-cover bg-center",
						style: { backgroundImage: "url(/images/title-bg.jpg)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/35" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto flex w-full max-w-lg flex-col items-center gap-4 px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs font-medium uppercase tracking-[0.28em] text-primary",
								children: "Louisiana · mist to night"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl",
								children: "Document Ghost Swamp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-sm leading-relaxed text-muted sm:text-base",
								children: "A walk through Louisiana folklore, cryptids, and bayou creatures. Collect, read, and wander until dark."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: start,
								disabled: !ready,
								className: "mt-2 min-h-12 rounded-full bg-primary px-10 py-3 font-sans text-base font-semibold text-primary-fg shadow-lg shadow-primary/20 transition hover:brightness-110 disabled:opacity-50",
								children: ready ? "Enter Ghost Swamp" : "Loading…"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onHelp,
								className: "min-h-11 text-sm font-medium text-primary underline-offset-4 hover:underline",
								children: "How to play"
							})
						]
					})
				]
			}),
			playing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-30 p-3 sm:p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-auto flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 rounded-xl border border-border/80 bg-surface/85 px-3 py-2 text-sm shadow-lg backdrop-blur-md",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeIcon, { phase: snap.timePhase }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: phaseLabel(snap.timePhase)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: snap.timeLabel
											}),
											snap.rainActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudRain, { className: "size-4 text-primary" })
										]
									}),
									snap.zoneLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-xl border border-primary/30 bg-surface/85 px-3 py-2 text-xs text-primary shadow-lg backdrop-blur-md",
										children: snap.zoneLabel
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: onHelp,
										className: "flex size-11 items-center justify-center rounded-xl border border-border/80 bg-surface/85 shadow-lg backdrop-blur-md",
										"aria-label": "How to play",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-5 text-primary" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: onMute,
										className: "flex size-11 items-center justify-center rounded-xl border border-border/80 bg-surface/85 shadow-lg backdrop-blur-md",
										"aria-label": snap.muted ? "Unmute" : "Mute",
										children: snap.muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4 text-muted" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 text-primary" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onJournal,
								className: "pointer-events-auto flex min-h-11 items-center gap-2 rounded-xl border border-border/80 bg-surface/85 px-3 py-2 text-sm font-medium shadow-lg backdrop-blur-md transition hover:bg-surface-raised",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										snap.documented.length,
										"/",
										snap.totalCreatures
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, { className: "size-3.5 text-muted" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [
											snap.pagesFound.length,
											"/",
											snap.totalPages
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-muted" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [
											snap.specimens.length,
											"/",
											snap.totalSpecimens
										]
									})
								]
							})]
						}),
						snap.sighting && !snap.reading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pointer-events-none mx-auto rounded-full border border-border/50 bg-surface/80 px-4 py-1.5 text-center text-xs italic text-muted backdrop-blur-md",
							children: snap.sighting
						}),
						snap.nearInteract && !snap.reading && snap.phase === "playing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onInteract,
							className: "pointer-events-auto mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-2xl border border-border bg-surface/95 px-4 py-3 text-sm font-semibold text-fg shadow-lg active:scale-[0.98] sm:max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, { className: "size-5 text-primary" }), snap.nearInteract]
						}),
						(near || nearFlora) && !snap.reading && snap.phase === "playing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onDoc,
							className: "pointer-events-auto mx-auto flex w-full max-w-md items-center gap-3 rounded-2xl border-2 border-primary/80 bg-primary/95 px-4 py-3 text-left text-primary-fg shadow-xl shadow-primary/30 active:scale-[0.98] sm:max-w-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-6 shrink-0 opacity-90" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs font-medium uppercase tracking-wide opacity-80",
										children: "Something glows nearby"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-base font-bold leading-tight",
										children: "Hold still or tap to document"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-fg/15 text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "absolute inset-0 size-12 -rotate-90",
										viewBox: "0 0 48 48",
										"aria-hidden": true,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "24",
											cy: "24",
											r: "20",
											fill: "none",
											stroke: "currentColor",
											strokeOpacity: "0.25",
											strokeWidth: "4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "24",
											cy: "24",
											r: "20",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "4",
											strokeLinecap: "round",
											strokeDasharray: `${snap.docCharge * 125.6} 125.6`
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative z-10",
										children: [Math.round(snap.docCharge * 100), "%"]
									})]
								})
							]
						}),
						snap.toast && !snap.reading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pointer-events-none mx-auto max-w-md rounded-xl border border-border/60 bg-surface/90 px-4 py-2 text-center text-sm text-fg shadow-lg backdrop-blur-md",
							children: snap.toast
						}),
						snap.activeEffects[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "pointer-events-none mx-auto text-center text-xs text-primary",
							children: [
								snap.activeEffects[0].label,
								" · ",
								Math.ceil(snap.activeEffects[0].remaining),
								"s"
							]
						})
					]
				})
			}), snap.phase === "playing" && !snap.reading && !snap.helpOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute bottom-5 left-3 z-40 flex flex-col items-start gap-3 sm:bottom-8 sm:left-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: stickRef,
					className: "pointer-events-auto relative size-[112px] touch-none rounded-full border-2 border-border/80 bg-surface/70 shadow-xl backdrop-blur-md active:bg-surface/85",
					style: { touchAction: "none" },
					onPointerDown: (e) => {
						e.preventDefault();
						e.stopPropagation();
						stickActive.current = true;
						e.currentTarget.setPointerCapture(e.pointerId);
						onStickMove(e.clientX, e.clientY);
					},
					onPointerMove: (e) => {
						if (!stickActive.current) return;
						e.preventDefault();
						onStickMove(e.clientX, e.clientY);
					},
					onPointerUp: (e) => {
						e.preventDefault();
						stickActive.current = false;
						try {
							e.currentTarget.releasePointerCapture(e.pointerId);
						} catch {}
						onStickEnd();
					},
					onPointerCancel: onStickEnd,
					onLostPointerCapture: onStickEnd,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-3 rounded-full border border-border/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute size-12 rounded-full border-2 border-primary/50 bg-primary shadow-md",
						style: {
							left: `calc(50% + ${knob.x}px)`,
							top: `calc(50% + ${knob.y}px)`,
							transform: "translate(-50%, -50%)"
						}
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onPointerDown: (e) => {
							e.preventDefault();
							e.stopPropagation();
							onDoc();
						},
						className: `min-h-12 min-w-[4.5rem] rounded-2xl border-2 px-4 text-sm font-bold shadow-lg backdrop-blur-md ${canDoc ? "border-primary bg-primary text-primary-fg" : "border-border/80 bg-surface/90 text-muted"}`,
						children: canDoc ? "Document" : "Doc"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onPointerDown: (e) => {
							e.preventDefault();
							e.stopPropagation();
							onInteract();
						},
						className: `min-h-12 min-w-[4.5rem] rounded-2xl border-2 px-4 text-sm font-bold shadow-lg backdrop-blur-md ${snap.nearInteract ? "border-primary bg-primary text-primary-fg" : "border-border/80 bg-surface/90 text-fg"}`,
						children: "Read"
					})]
				})]
			})] }),
			snap.helpOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-50 flex items-end justify-center bg-bg/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex max-h-[min(92dvh,760px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-primary/25 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[#2a1f14] via-[#1a140e] to-[#0e0a08]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2 rounded-xl border border-primary/15 bg-gradient-to-b from-[#3d2e1c]/85 to-[#1c1610]/92" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col overflow-hidden rounded-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3 border-b border-primary/20 px-5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 flex size-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 text-primary" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-primary",
											children: "Field guide · time paused"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-2xl font-semibold text-[#f0e6d0]",
											children: "How to walk Ghost Swamp"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: closeHelp,
										className: "min-h-11 rounded-lg border border-primary/30 bg-[#f0e6d0]/10 px-3 text-sm font-medium text-[#f0e6d0]",
										children: "Close"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-y-auto px-5 py-4 text-sm leading-relaxed text-[#c8b898]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
											className: "mb-5 border-b border-primary/15 pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mb-1 font-display text-lg text-[#f0e6d0]",
												children: "The idea"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												"A ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#f0e6d0]",
													children: "documenting"
												}),
												" walk — not a race. Soft glows mark what still needs a page. Names wait in your journal."
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
											className: "mb-5 border-b border-primary/15 pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mb-1 font-display text-lg text-[#f0e6d0]",
												children: "Move & document"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "list-disc space-y-1.5 pl-5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[#f0e6d0]",
														children: "Move"
													}), " with stick or WASD"] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[#90e0a0]",
														children: "Green glow"
													}), " — flora to identify"] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[#f0d070]",
														children: "Gold glow"
													}), " — creatures, pages, specimens"] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Walk near a glow; hold still or tap Document" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Read cabins / pier / canoe — press specimens for gifts" })
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
											className: "mb-5 rounded-xl border border-primary/25 bg-primary/10 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mb-1 font-display text-lg text-primary",
												children: "Pressed into the book"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
												className: "list-decimal space-y-1.5 pl-5 text-[#e8dcc0]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Walk up and tap Read" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tap Press specimen (or re-awaken gift later)" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Keep walking — the gift plays around you" })
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
											className: "mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mb-1 font-display text-lg text-[#f0e6d0]",
												children: "Journal"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Book button or J — Creatures, Flora, Pages, Places, Pressed. Day freezes while open." })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-primary/20 p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: closeHelp,
										className: "min-h-12 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-fg",
										children: "Close the guide · resume walk"
									})
								})
							]
						})
					]
				})
			}),
			snap.phase === "journal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-40 flex items-end justify-center bg-bg/60 p-2 backdrop-blur-sm sm:items-center sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex max-h-[min(92dvh,820px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-primary/20 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[#2a1f14] via-[#1a140e] to-[#0e0a08]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2 rounded-xl border border-primary/15 bg-gradient-to-b from-[#3d2e1c]/80 to-[#1c1610]/90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex flex-col overflow-hidden rounded-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 border-b border-primary/20 px-4 py-3 sm:px-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-primary",
											children: "Field journal · time paused"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-2xl font-semibold text-[#f0e6d0]",
											children: "Document Ghost Swamp"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-[#a89878]",
											children: [
												snap.documented.length,
												"/",
												snap.totalCreatures,
												" creatures ·",
												" ",
												snap.pagesFound.length,
												"/",
												snap.totalPages,
												" pages · ",
												snap.specimens.length,
												"/",
												snap.totalSpecimens,
												" specimens · ",
												snap.floraDocumented.length,
												"/",
												snap.totalFlora,
												" flora"
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: onJournal,
										className: "min-h-11 rounded-lg border border-primary/30 bg-[#f0e6d0]/10 px-4 text-sm font-medium text-[#f0e6d0]",
										children: "Close · resume day"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 border-b border-primary/15 px-4 py-2 sm:px-6",
									children: [
										["creatures", "Creatures"],
										["flora", "Flora"],
										["grimoire", "Pages"],
										["places", "Places"],
										["pressed", "Pressed"]
									].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setJournalTab(id),
										className: `min-h-10 rounded-lg px-3 text-sm font-medium ${journalTab === id ? "bg-primary/25 text-primary" : "text-[#a89878] hover:bg-[#f0e6d0]/5"}`,
										children: label
									}, id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-y-auto px-4 py-4 sm:px-6",
									style: { maxHeight: "60dvh" },
									children: [
										journalTab === "creatures" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-3",
											children: CREATURE_DEFS.map((c) => {
												const got = snap.documented.includes(c.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: `rounded-xl border p-3 ${got ? "border-primary/20 bg-[#f0e6d0]/5" : "border-primary/10 bg-black/20 opacity-70"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-display text-lg text-[#f0e6d0]",
														children: got ? c.name : "?????"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-[#a89878]",
														children: got ? c.lore : "Not yet documented."
													})]
												}, c.id);
											})
										}),
										journalTab === "flora" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-3",
											children: FLORA_DEFS.map((f) => {
												const got = snap.floraDocumented.includes(f.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: `rounded-xl border p-3 ${got ? "border-primary/20 bg-[#f0e6d0]/5" : "border-primary/10 bg-black/20 opacity-70"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-display text-lg text-[#f0e6d0]",
														children: got ? f.name : "?????"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-[#a89878]",
														children: got ? f.lore : "Walk near a green glow to identify."
													})]
												}, f.id);
											})
										}),
										journalTab === "grimoire" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-3",
											children: GRIMOIRE_PAGES.map((page) => {
												const got = snap.pagesFound.includes(page.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: `rounded-xl border p-3 ${got ? "border-primary/20 bg-[#f0e6d0]/5" : "border-primary/10 bg-black/20 opacity-70"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-display text-lg text-[#f0e6d0]",
														children: got ? page.title : "Sealed leaf"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-[#a89878]",
														children: got ? page.body : "Find the parchment glow in the swamp."
													})]
												}, page.id);
											})
										}),
										journalTab === "places" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mb-3 flex items-center gap-2 text-sm text-[#a89878]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, { className: "size-4" }), " Bayou map · places you’ve been"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mb-4 h-40 overflow-hidden rounded-xl border border-primary/20 bg-[#0a1210]",
												children: [snap.places.map((pl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${pl.visited ? "bg-primary" : "bg-[#3a3020]"}`,
													style: {
														left: `${pl.x / 2400 * 100}%`,
														top: `${pl.y / 1800 * 100}%`
													},
													title: pl.visited ? pl.title : "Unknown"
												}, pl.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7ec8e8]",
													style: {
														left: "50%",
														top: "52%"
													},
													title: "You start near center"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-3",
												children: snap.places.map((pl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: `rounded-xl border p-3 ${pl.visited ? "border-primary/20 bg-[#f0e6d0]/5" : "border-primary/10 bg-black/20 opacity-70"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-display text-lg text-[#f0e6d0]",
														children: pl.visited ? pl.title : "Unmarked place"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-[#a89878]",
														children: pl.visited ? pl.note : "Visit to open its note."
													})]
												}, pl.id))
											})
										] }),
										journalTab === "pressed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-3",
											children: snap.places.map((pl, i) => {
												const got = pl.specimenCollected;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: `rounded-xl border p-3 ${got ? "border-primary/20 bg-[#f0e6d0]/5" : "border-primary/10 bg-black/20 opacity-70"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "font-display text-lg text-[#f0e6d0]",
														children: ["Pressed specimen ", i + 1]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm text-[#a89878]",
														children: got ? "Awakened from a place you visited. Press again in the world to reawaken its gift." : "Visit a place and press its specimen"
													})]
												}, pl.id);
											})
										})
									]
								})
							]
						})
					]
				})
			}),
			snap.reading && snap.cabinNoteBody && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-40 flex items-end justify-center bg-bg/50 p-3 backdrop-blur-sm sm:items-center sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-lg overflow-hidden rounded-2xl border border-primary/25 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[#3d2e1c] via-[#2a2014] to-[#1a140e]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] font-semibold uppercase tracking-[0.25em] text-primary",
								children: [readingKindLabel(snap.readingKind), " · time paused"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl font-semibold text-[#f0e6d0]",
								children: snap.readingTitle || snap.cabinNoteTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-h-[40dvh] overflow-y-auto text-sm leading-relaxed text-[#d4c4a0]",
								children: snap.cabinNoteBody || snap.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-2",
								children: [snap.pendingSpecimen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: pressSpecimen,
									className: "min-h-12 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-fg",
									children: snap.pendingSpecimen.alreadyPressed ? "Awaken gift again" : "Press specimen · awaken its gift"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: dismissReading,
									className: "min-h-12 w-full rounded-full bg-[#2a2014] py-3 text-sm font-semibold text-[#f0e6d0]",
									children: snap.pendingSpecimen ? "Just close the note" : "Close · continue walking"
								})]
							})
						]
					})]
				})
			}),
			(snap.phase === "win" || snap.phase === "lose") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-40 flex items-center justify-center bg-bg/80 p-6 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-2xl border border-border bg-surface p-8 text-center shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.25em] text-primary",
							children: snap.phase === "win" ? "Journal complete" : "The night closed in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold",
							children: snap.phase === "win" ? "Every page & legend recorded" : "Ghost Swamp keeps its own"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: start,
							className: "mt-6 min-h-12 rounded-full bg-primary px-8 py-3 font-semibold text-primary-fg",
							children: "Walk the bayou again"
						})
					]
				})
			})
		]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BayouGame, {});
}
//#endregion
export { HomePage as component };
