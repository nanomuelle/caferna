import { StockableGood } from "../stockable-good.js";
import { FixedGood } from "../fixed-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { NEXUS, GOODS } from '../../constants.js'
import { SustenanceStockableVeggy } from '../sustenance-stockable-veggy.js'

export class Sustenance extends Action {
    constructor() {
        super('sustenance', 'Sustenance', NEXUS.AND_OR);
        
        const subaction1 = new SubAction();
        const stockableGrain = new StockableGood(GOODS.GRAIN, 1, 0);
        const stockableVeggy = new SustenanceStockableVeggy(stockableGrain);

        subaction1.goods.push(stockableGrain);
        subaction1.goods.push(stockableVeggy);

        const subaction2 = new SubAction();
        subaction2.goods.push(new FixedGood(GOODS.MEDOW_FIELD, 1));
        
        this.subactions.push(subaction1);
        this.subactions.push(subaction2);
    }
}