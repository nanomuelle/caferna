import { StockableGood } from "../stockable-good.js";
import { FixedGood } from "../fixed-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { GOODS } from '../../constants.js'

export class StartingPlayer extends Action {
    constructor() {
        super('starting-player', 'Starting Player');
        
        const subaction1 = new SubAction();
        subaction1.goods.push(new StockableGood(GOODS.FOOD, 1, 1));
        subaction1.goods.push(new FixedGood(GOODS.RUBY, 1));
        subaction1.initialPlayer = true;
    }
}