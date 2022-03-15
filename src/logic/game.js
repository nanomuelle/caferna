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
        { dwarf: '', action: stage1Actions.pop() },
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
