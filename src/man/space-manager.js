import { FurnishDwellingAction } from '../actions/furnish-dwelling-action.js';
import { Blacksmithing } from '../entities/spaces/blacksmithing.js';
import { Clearing } from '../entities/spaces/clearing.js';
import { DriftMining } from '../entities/spaces/drift-mining.js';
import { Excavation } from '../entities/spaces/excavation.js';
import { ForestExploration } from '../entities/spaces/forest-exploration.js';
import { Growth } from '../entities/spaces/growth.js';
import { Housework } from '../entities/spaces/housework.js';
import { Imitation } from '../entities/spaces/imitation.js';
import { Logging } from '../entities/spaces/logging.js';
import { OreMineConstruction } from '../entities/spaces/ore-mine-construction.js';
import { OreMine } from '../entities/spaces/ore-mine.js';
import { RubyMining } from '../entities/spaces/ruby-mining.js';
import { SheepFarming } from '../entities/spaces/sheep-farming.js';
import { SlashAndBurn } from '../entities/spaces/slash-and-burn.js';
import { StartingPlayer } from '../entities/spaces/starting-player.js';
import { Sustenance } from '../entities/spaces/sustenance.js';

const randomComparer = () => (Math.random() >= 0.5 ? -1 : 1);

const STAGE_1 = [
    new Blacksmithing(),
    new OreMineConstruction(),
    new SheepFarming(),
];
const STAGE_2 = [];
const STAGE_3 = [];
const STAGE_4 = [];

export class SpaceManager {
    init() {
        this.spaces = [
            new DriftMining(),
            new Imitation(),
            new Logging(),
            new ForestExploration(),
            new Excavation(),
            new Growth(),
            new Clearing(),
            new StartingPlayer(),
            new OreMine(),
            new Sustenance(),
            new RubyMining(),
            new Housework(),
            new SlashAndBurn(),
        ];

        this.nextSpaces = [
            [...STAGE_1].sort(randomComparer),
            [new FurnishDwellingAction()],
            [...STAGE_2].sort(randomComparer),
            [...STAGE_3].sort(randomComparer),
            [...STAGE_4].sort(randomComparer),
        ].flatMap();
    }

    addNext() {
        this.spaces = [...this.spaces, this.nextSpaces.shift()];
    }

    replenish() {
        this.spaces.forEach(space => space.replenish());
    }
}
