import * as actions from './actions.js'

const createForest = () => [
    ' x ', ' x ', ' x ', ' x ',
    ' x ', '   ', '   ', ' b ',
    ' x ', '   ', '   ', '   ',
    ' x ', ' b ', '   ', '   ',
    ' x ', '   ', ' f ', '  <',
    ' x ', ' x ', ' x ', ' x ',
];

const createMountain = () => [
    ' x ', ' x ', ' x ', ' x ',
    '   ', '   ', ' ff', ' x ',
    '   ', '   ', '   ', ' x ',
    ' . ', '   ', '   ', ' x ',
    ' I ', ' f ', '   ', ' x ',
    ' x ', ' x ', ' x ', ' x ',
];

const createDwarf = (id, color) => ({
    id,
    color,
    weapon: 0
});

const createPlayer = (id, color) => ({
    id,
    color,
    dwarfs: [createDwarf(color), createDwarf(color)],
    forest: createForest(),
    mountain: createMountain()
});

const stage1Actions = [
    actions.blacksmithing ,
    actions.oreMineConstruction ,
    actions.sheepFarming,
].sort(() => Math.random() >= 0.5 ? -1 : 1);

const createRound = (number, initialPlayer) => ({
    number,
    initialPlayer,
    turn: initialPlayer,
    spaces: [
        { dwarf: '', action: actions.driftMining },
        { dwarf: '', action: actions.imitation },
        { dwarf: '', action: actions.loggingAndExpedition },
        { dwarf: '', action: actions.forestExploration },
        { dwarf: '', action: actions.excavation },
        { dwarf: '', action: actions.growth },
        { dwarf: '', action: actions.clearing },
        { dwarf: '', action: actions.startingPlayer },
        { dwarf: '', action: actions.oreMine },
        { dwarf: '', action: actions.sustenance },
        { dwarf: '', action: actions.rubyMining },
        { dwarf: '', action: actions.housework },
        { dwarf: '', action: actions.slashAndBurn },
        // stage 1
        { dwarf: '', action: stage1Actions.pop() }
    ]
});

const createPlayers = () => [
    createPlayer('p1', 'red'),
    createPlayer('p2', 'blue'),
    createPlayer('p3', 'fuchsia'),
    createPlayer('p4', 'green')
];

export const createState = () => ({
    players: createPlayers(),
    rounds: [
        createRound(1, 'p1'),
    ]
});