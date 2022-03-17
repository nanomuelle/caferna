import * as actions from '../entities/actions.js';
import { Space } from '../entities/space.js';

const randomComparer = () => (Math.random() >= 0.5 ? -1 : 1);

const STAGE_1 = [
    actions.blacksmithing,
    actions.oreMineConstruction,
    actions.sheepFarming
];
const STAGE_2 = [];
const STAGE_3 = [];
const STAGE_4 = [];

export class SpaceManager {
    init() {
        this.spaces = [
            new Space(0, actions.driftMining, 1),
            new Space(0, actions.imitation, 1, 0.5),
            new Space(0, actions.logging, 1, 0.8),
            new Space(0, actions.forestExploration, 1),
            new Space(0, actions.excavation, 2),
            new Space(0, actions.growth, 2),
            new Space(0, actions.clearing, 2),
            new Space(0, actions.startingPlayer, 3),
            new Space(0, actions.oreMine, 3),
            new Space(0, actions.sustenance, 3),
            new Space(0, actions.rubyMining, 4),
            new Space(0, actions.housework, 4),
            new Space(0, actions.slashAndBurn, 4),
        ];

        this.nextSpaces = [
            [...STAGE_1].sort(randomComparer).map(action => new Space(1, action, 5)),
            [ actions.haveChildren ].map(action => new Space(2, action, 5)),
            [...STAGE_2].sort(randomComparer).map(action => new Space(2, action, 5)),
            [...STAGE_3].sort(randomComparer).map(action => new Space(3, action, 6)),
            [...STAGE_4].sort(randomComparer).map(action => new Space(4, action, 7))
        ].flatMap();
    }

    addNext() {
        this.spaces = [ ...this.spaces, this.nextSpaces.shift() ];
    }

    replenish() {
        this.spaces.forEach(space => space.replenish());
    }
}