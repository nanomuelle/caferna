import * as actions from './actions.js';
import { createPlayers } from './players.js';

const randomSortComparer = () => (Math.random() >= 0.5 ? -1 : 1);

const stage1 = [
    actions.blacksmithing,
    actions.oreMineConstruction,
    actions.sheepFarming,
];
const stage2 = [];
const stage3 = [];
const stage4 = [];

const createSpace = (col, action, flexGrow = 1) => ({
    col,
    dwarf: '',
    action,
    flexGrow,
});

// ...
export const createNextSpaces = () =>
    [
        stage1.sort(randomSortComparer).map(action => createSpace(1, action)),
        [actions.haveChildren].map(action => createSpace(5, action)),
        stage2.sort(randomSortComparer).map(action => createSpace(5, action)),
        stage3.sort(randomSortComparer).map(action => createSpace(6, action)),
        stage4.sort(randomSortComparer.map(action => createSpace(7, action))),
    ].flatMap();

export const findInitialPlayer = state =>
    state.players.find(player => player.isInitial);

const createOrder = state => {
    const initialPlayer = findInitialPlayer(state);
    const initialPlayerIndex = state.players.indexOf(initialPlayer);
    return [
        initialPlayerIndex,
        (initialPlayerIndex + 1) % 4,
        (initialPlayerIndex + 2) % 4,
        (initialPlayerIndex + 3) % 4,
    ].map(index => state.players[index].id);
};

export const createSpaces = () => [
    createSpace(1, actions.driftMining),
    createSpace(1, actions.imitation, 0.5),
    createSpace(1, actions.logging, 0.8),
    createSpace(1, actions.forestExploration),
    createSpace(2, actions.excavation),
    createSpace(2, actions.growth),
    createSpace(2, actions.clearing),
    createSpace(3, actions.startingPlayer),
    createSpace(3, actions.oreMine),
    createSpace(3, actions.sustenance),
    createSpace(4, actions.rubyMining),
    createSpace(4, actions.housework),
    createSpace(4, actions.slashAndBurn),
];

const createRound = (number, players) => ({
    number,

    phases: ['discover', 'replenish', 'turns', 'home', 'harvest'],
    phaseIndex: 0,

    order: createOrder(players),
    orderIndex: 0,
});

export const endPlayerTurn = state => ({
    ...state,
    rounds: [
        ...state.rounds.map((round, index) => {
            if (index === state.rounds.length - 1) {
                return {
                    ...round,
                    orderIndex: (round.orderIndex + 1) % round.order.length,
                };
            }
            return round;
        }),
    ],
});

const players = createPlayers();
export const createState = () => ({
    players,
    spaces: createSpaces(),
    nextSpaces: createNextSpaces(),
    rounds: [createRound(1, players)],
});

// export const getCurrentRound = state => state.rounds[state.rounds.length - 1];
export const executeDiscoverPhase = state => ({
    ...state,
    spaces: [...state.spaces, state.nextSpaces.shift()],
    rounds: state.map((round, index) => {
        const isCurrentRound = index === state.rounds.length - 1;
        if (!isCurrentRound) {
            return round;
        }

        return {
            ...round,
            phaseIndex: round.phaseIndex + 1,
        };
    }),
});
