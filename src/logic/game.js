import * as actions from './actions.js';
import { createPlayers } from './players.js';

const stage1Actions = [
    actions.blacksmithing,
    actions.oreMineConstruction,
    actions.sheepFarming,
].sort(() => (Math.random() >= 0.5 ? -1 : 1));

export const findInitialPlayer = players =>
    players.find(player => player.isInitial);

const createOrder = players => {
    const initialPlayer = findInitialPlayer(players);
    const initialPlayerIndex = players.indexOf(initialPlayer);
    return [
        initialPlayerIndex,
        (initialPlayerIndex + 1) % 4,
        (initialPlayerIndex + 2) % 4,
        (initialPlayerIndex + 3) % 4,
    ].map(index => players[index].id);
};

const createRound = (number, players) => ({
    number,
    order: createOrder(players),
    orderIndex: 0,
    spaces: [
        { col: 1, dwarf: '', action: actions.driftMining, flexGros: 1 },
        { col: 1, dwarf: '', action: actions.imitation, flexGrow: 0.5 },
        { col: 1, dwarf: '', action: actions.loggingAndExpedition, flexGrow: 0.8 },
        { col: 1, dwarf: '', action: actions.forestExploration, flexGrow: 0.7 },

        { col: 2, dwarf: '', action: actions.excavation, flexGrow: 1 },
        { col: 2, dwarf: '', action: actions.growth, flexGrow: 1 },
        { col: 2, dwarf: '', action: actions.clearing, flexGrow: 1 },
        
        { col: 3, dwarf: '', action: actions.startingPlayer, flexGrow: 1 },
        { col: 3, dwarf: '', action: actions.oreMine, flexGrow: 1 },
        { col: 3, dwarf: '', action: actions.sustenance, flexGrow: 1 },
        
        { col: 4, dwarf: '', action: actions.rubyMining, flexGrow: 1 },
        { col: 4, dwarf: '', action: actions.housework, flexGrow: 1 },
        { col: 4, dwarf: '', action: actions.slashAndBurn, flexGrow: 1 },

        // stage 1
        { col: 5, dwarf: '', action: stage1Actions.pop(), flexGrow: 1 },
    ],
});

const players = createPlayers();
export const createState = () => ({
    players,
    rounds: [createRound(1, players)],
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
