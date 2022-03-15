// const goods
// W	S	G	V	O	F	C	R	d	s	k	tiles
export const driftMining = {
    name: 'Drift mining',
    actions: [
        {
            stone: 2,
            tiles: 'CT'
        }
    ]
};
export const imitation = {
    name: 'Imitation',
    actions: [
        {
            food: -2
        }
    ]
};
export const loggingAndExpedition = {
    name: 'Logging & Expedition',
    actions: [
        {
            wood: 3
        },
        {
            expedition: 1
        }
    ]
};
export const forestExploration = {
    name: 'Forest exploration',
    actions: [
        {
            wood: 2,
            food: 2
        }
    ]
};
export const excavation = {
    name: 'Excavation',
    actions: [
        {
            stone: 2,
            tiles: 'CC/CT'
        }
    ]
};
export const growth = {
    name: 'Growth',
    actions: [
        {
            wood: 1,
            stone: 1,
            ore: 1,
            food: 1,
            gold: 2
        },
        {
            dwarf: 1
        }
    ]
};
export const clearing = {
    name: 'Clearing',
    actions: [
        {
            wood: 2,
            tiles: 'MF'
        }
    ]
};
export const startingPlayer = {
    name: 'Starting player',
    actions: [
        {
            food: 1,
            ruby: 1,
            initialPlayer: true
        }
    ]
};
export const oreMine = {
    name: 'Ore mine',
    actions: [
        {
            ore: 3
        }
    ]
};
export const sustenance = {
    name: 'Sustenance',
    actions: [
        {
            grain: 1,
            veggy: 0,
            tiles: 'MF'
        }
    ]
};
export const rubyMining = {
    name: 'Ruby mining',
    actions: [
        {
            ruby: 1
        }
    ]
};
export const housework = {
    name: 'Housework',
    actions: [
        {
            dog: 1
        }
    ]
};
export const slashAndBurn = {
    name: 'Slash-and-burn',
    actions: [
        {
            tiles: 'MF',
            sow: true
        }
    ]
};
export const blacksmithing = {
    name: 'Blacksmithing',
    actions: [
        {
            forge: true, // 1-8 ore,
            expedition: 3
        }
    ]
};
export const oreMineConstruction = {
    name: 'Ore mine construction',
    actions: [
        {
            ore: 3,
            tiles: 'DO',
            expedition: 2
        }
    ]
};
export const sheepFarming = {
    name: 'Sheep farming',
    actions: [
        {
            sheep: 1
        }
    ]
};
