import { Player } from '../entities/player.js';
import { SpaceManager } from './space-manager.js';

// export const findInitialPlayer = state =>
//     state.players.find(player => player.isInitial);

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

// export const endPlayerTurn = state => ({
//     ...state,
//     rounds: [
//         ...state.rounds.map((round, index) => {
//             if (index === state.rounds.length - 1) {
//                 return {
//                     ...round,
//                     orderIndex: (round.orderIndex + 1) % round.order.length,
//                 };
//             }
//             return round;
//         }),
//     ],
// });

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
        this.players = [
            new Player(this, 'A', 'red', 1, true),
            new Player(this, 'B', 'blue', 1, false),
            new Player(this, 'C', 'fuchsia', 2, false),
            new Player(this, 'D', 'green', 3, false),
        ];

        this.spaceManager.init();

        this.roundNumber = 0;
        this.phases = ['discover', 'replenish', 'workday', 'home', 'harvest'];
        this.phaseIndex = 0;

        this.playerTurnIndex = 0;
    }

    get initialPlayer() {
        return this.players.find(player => player.isInitial);
    }

    get initialPlayerIndex() {
        return this.players.indexOf(this.initialPlayer);
    }

    setInitialPlayer(playerId) {
        this.players.forEach(player => {
            if (player.id === playerId) {
                player.setInitialPlayer();
            } else {
                player.removeInitialPlayer();
            }
        });
    }

    discoverPhase() {
        this.spaceManager.addNext();
        this.phaseIndex += 1;
    }

    replenishPhase() {
        this.spaceManager.spaces.forEach(space => space.replenish());
    }

    workdayPhase() {
        this.playerTurnIndex = this.initialPlayerIndex;
    }

    nextPlayerTurn() {
        this.playerTurnIndex = (this.playerTurnIndex + 1) % 4; // num-players: 4
    }

    // homePhase() {
    //     // TODO: increase weapon of adventurers
    // }

    // harvestPhase() {
    //     // TODO: harvest phase when procedent
    // }
}
