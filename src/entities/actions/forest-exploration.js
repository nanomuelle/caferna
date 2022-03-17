import { StockableGood } from "../stockable-good.js";
import { FixedGood } from "../fixed-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { GOODS } from '../../constants.js'

export class ForestExploration extends Action {
    constructor() {
        super('forest-exploration', 'Forest exploration');

        const subaction1 = new SubAction();
        subaction1.goods.push(new StockableGood(GOODS.WOOD, 2, 1));
        subaction1.goods.push(new FixedGood(GOODS.FOOD, 2));

        this.subactions.push(subaction1);
    }
}