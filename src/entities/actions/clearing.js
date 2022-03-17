import { StockableGood } from "../stockable-good.js";
import { FixedGood } from "../fixed-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { NEXUS, GOODS } from '../../constants.js'

export class Clearing extends Action {
    constructor() {
        super('clearing', 'Clearing', NEXUS.AND_OR);
        
        const subaction1 = new SubAction();
        subaction1.goods.push(new StockableGood(GOODS.WOOD, 2, 2));

        const subaction2 = new SubAction();
        subaction2.goods.push(new FixedGood(GOODS.MEDOW_FIELD, 1));
        
        this.subactions.push(subaction1);
        this.subactions.push(subaction2);
    }
}