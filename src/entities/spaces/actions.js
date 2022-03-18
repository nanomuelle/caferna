// const goods
// W	S	G	V	O	F	C	R	d	s	k	tiles
// export const driftMining = {
//     id: 'drift-mining',
//     name: 'Drift mining',
//     nexus: 'and / or',
//     actions: [
//         {
//             initial: { stone: 2 },
//             replenish: { stone: 2 },
//             current: { stone: 0 },
//         },
//         {
//             tiles: ['CT'],
//         },
//     ],
// };

// export const imitation = {
//     id: 'imitation',
//     name: 'Imitation',
//     actions: [
//         {
//             always: { food: -2 },
//             imitates: '',
//         },
//     ],
// };
// export const logging = {
//     id: 'logging',
//     name: 'Logging',
//     nexus: 'and then / or',
//     actions: [
//         {
//             initial: { wood: 3 },
//             replenish: { wood: 3 },
//             current: { wood: 0 },
//         },
//         {
//             expedition: 1,
//         },
//     ],
// };
// export const forestExploration = {
//     id: 'forest-exploration',
//     name: 'Forest exploration',
//     actions: [
//         {
//             initial: { wood: 2 },
//             replenish: { wood: 1 },
//             current: { wood: 0 },
//             always: { food: 2 },
//         },
//     ],
// };
// export const excavation = {
//     id: 'excavation',
//     name: 'Excavation',
//     nexus: 'and / or',
//     actions: [
//         {
//             initial: { stone: 2 },
//             replenish: { stone: 1 },
//             current: { stone: 0 },
//         },
//         {
//             tiles: ['CC', 'CT'],
//         },
//     ],
// };
// export const growth = {
//     id: 'growth',
//     name: 'Growth',
//     nexus: 'or',
//     actions: [
//         {
//             always: {
//                 wood: 1,
//                 stone: 1,
//                 ore: 1,
//                 food: 1,
//                 gold: 2,
//             },
//         },
//         {
//             dwarf: 1,
//         },
//     ],
// };
// export const clearing = {
//     id: 'clearing',
//     name: 'Clearing',
//     nexus: 'and / or',
//     actions: [
//         {
//             initial: { wood: 2 },
//             replenish: { wood: 2 },
//             current: { wood: 0 },
//         },
//         {
//             tiles: ['MF'],
//         },
//     ],
// };
// export const startingPlayer = {
//     id: 'starting-player',
//     name: 'Starting player',
//     actions: [
//         {
//             initial: { food: 1 },
//             replenish: { food: 1 },
//             current: { food: 0 },
//             always: { ruby: 1 },
//             initialPlayer: true,
//         },
//     ],
// };
// export const oreMine = {
//     id: 'ore-mine',
//     name: 'Ore mine',
//     actions: [
//         {
//             initial: { ore: 3 },
//             replenish: { ore: 2 },
//             forEachMineralMine: { ore: 2 },
//         },
//     ],
// };
// export const sustenance = {
//     id: 'sustenance',
//     name: 'Sustenance',
//     nexus: 'and / or',
//     actions: [
//         {
//             initial: { grain: 1 },
//             replenish: { veggy: 1 },
//             current: { grain: 0, veggy: 0 },
//         },
//         {
//             tiles: ['MF'],
//         },
//     ],
// };
// export const rubyMining = {
//     id: 'ruby-mining',
//     name: 'Ruby mining',
//     actions: [
//         {
//             initial: { ruby: 1 },
//             replenish: { ruby: 1 },
//             havingRubyMine: { ruby: 1 },
//         },
//     ],
// };
// export const housework = {
//     id: 'housework',
//     name: 'Housework',
//     nexus: 'and / or',
//     actions: [
//         {
//             always: { dog: 1 },
//         },
//         {
//             furnishCavern: true,
//         },
//     ],
// };
// export const slashAndBurn = {
//     id: 'slash-and-burn',
//     name: 'Slash-and-burn',
//     nexus: 'and then / or',
//     actions: [
//         {
//             tiles: ['MF'],
//         },
//         {
//             sow: true,
//         },
//     ],
// };
// export const blacksmithing = {
//     id: 'blacksmithing',
//     name: 'Blacksmithing',
//     nexus: 'and then / or',
//     actions: [
//         {
//             forge1to8: true, // 1-8 ore,
//         },
//         {
//             expedition: 3,
//         },
//     ],
// };
// export const oreMineConstruction = {
//     id: 'ore-mine-construction',
//     name: 'Ore mine construction',
//     nexus: 'and then / or',
//     actions: [
//         {
//             tiles: ['DO'],
//             always: { ore: 3 },
//         },
//         {
//             expedition: 2,
//         },
//     ],
// };
// export const sheepFarming = {
//     id: 'sheep-farming',
//     name: 'Sheep farming',
//     nexus: 'and then / or',
//     actions: [
//         {
//             littleFence: { wood: -2 },
//             bigFence: { wood: -4 },
//             stable: { stone: -1 },
//         },
//         {
//             initial: { sheep: 1 },
//             replenish: { sheep: 1 },
//             current: { sheep: 0 },
//         },
//     ],
// };

// export const haveChildren = {
//     id: 'have-children',
//     name: 'Have children',
//     nexus: 'or',
//     actions: [
//         {
//             dwarf: 1,
//         },
//         {
//             furnishDwelling: true,
//         },
//     ],
// };
