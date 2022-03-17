import { StockableGood } from "../stockable-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { NEXUS, GOODS } from '../../constants.js'

export class Logging extends Action {
    constructor() {
        super('logging', 'Logging', NEXUS.AND_THEN_OR);

        const subaction1 = new SubAction();
        subaction1.goods.push(new StockableGood(GOODS.WOOD, 3, 3));

        const subaction2 = new SubAction();
        subaction2.expedition = 1;

        this.subactions.push(subaction1);
        this.subactions.push(subaction2);
    }
}