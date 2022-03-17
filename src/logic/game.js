import { SpaceManager } from '../man/space-manager.js';
import { createPlayers } from './players.js';

export const findInitialPlayer = state =>
    state.players.find(player => player.isInitial);

// const createOrder = state => {
//     const initialPlayer = findInitialPlayer(state);
//     const initialPlayerIndex = state.players.indexOf(initialPlayer);
//     return [
//         initialPlayerIndex,
//         (initialPlayerIndex + 1) % 4,
//         (initialPlayerIndex + 2) % 4,
//         (initialPlayerIndex + 3) % 4,
//     ].map(index => state.players[index].id);
// };


// const createRound = (number, players) => ({
//     number,

//     phases: ['discover', 'replenish', 'turns', 'home', 'harvest'],
//     phaseIndex: 0,

//     order: createOrder(players),
//     orderIndex: 0,
// });

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


// export const createState = () => ({
//     spaces: createSpaces(),
//     nextSpaces: createNextSpaces(),
//     // rounds: [createRound(1, players)],
    
//     roundNumber: 0,

//     phases: ['discover', 'replenish', 'turns', 'home', 'harvest'],
//     phaseIndex: 0,

//     order: null, // createOrder(players),
//     orderIndex: 0,
// });

// export const getCurrentRound = state => state.rounds[state.rounds.length - 1];
export class GameManager {
    constructor() {
        this.spaceManager = new SpaceManager();
    }

    init() {
        this.players = createPlayers();
        this.spaceManager.init();

        this.roundNumber = 0;
        this.phases = ['discover', 'replenish', 'turns', 'home', 'harvest'];
        this.phaseIndex = 0;
        this.turn = 0;
    }
    
    discover() {
        this.spaceManager.addNext();
        this.phaseIndex += 1;
    }

//     replenish () {
//     }

}