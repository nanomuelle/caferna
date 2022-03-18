import { GOODS } from '../constants.js';
import { Dwarf } from './dwarf.js';
import { Forest } from './Forest.js';
import { Mountain } from './Mountain.js';

export class Player {
    constructor(game, id, color, food, isInitial) {
        this.game = game;

        this.id = id;
        this.color = color;

        this.dwarfs = [new Dwarf(this), new Dwarf(this)];

        this.forest = new Forest(this);
        this.mountain = new Mountain(this);
        this._isInitialPlayer = isInitial;

        this.goods = {
            [GOODS.WOOD]: 0,
            [GOODS.STONE]: 0,
            [GOODS.ORE]: 0,
            [GOODS.RUBY]: 0,

            [GOODS.GRAIN]: 0,
            [GOODS.VEGGY]: 0,

            [GOODS.FOOD]: food,
            [GOODS.GOLD]: 0,

            /* UNPLACED ANIMALS */
            [GOODS.DOG]: 0,
            [GOODS.SHEEP]: 0,
            [GOODS.BOAR]: 0,
            [GOODS.DONKEY]: 0,
            [GOODS.COW]: 0,

            /* UNPLACED TILES */
            [GOODS.CAVERN_CAVERN]: 0,
            [GOODS.CAVERN_TUNNEL]: 0,
            [GOODS.MEADOW_FIELD]: 0,
            [GOODS.DEEP_TUNNEL_ORE_MINE]: 0,
            [GOODS.RUBY_MINE]: 0,
            [GOODS.CAVERN]: 0,
            [GOODS.TUNNEL]: 0,
            [GOODS.MEADOW]: 0,
            [GOODS.FIELD]: 0,

            [GOODS.NEW_BORN]: 0,
        };
    }

    addGood({ name, stock }) {
        this.goods[name] += stock;
    }

    get isInitialPlayer() {
        return this._isInitialPlayer;
    }

    setInitialPlayer() {
        this._isInitialPlayer = true;
    }

    removeInitialPlayer() {
        this._isInitialPlayer = false;
    }

    // numOfMineralMines() {
    //     // TODO
    //     return 0;
    // }

    // numOfRubyMines() {
    //     // TODOs
    //     return false;
    // }
}
