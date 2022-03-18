import { GOODS } from '../constants.js';
import { StockableGood } from '../entities/stockable-good.js';
import { SustenanceVeggyGood } from '../entities/sustenance-veggy-good.js';
import { GoodsAction } from './goods-action.js';

export class SustenanceAction extends GoodsAction {
    constructor() {
        super(GOODS.VEGGY, 0, 1);
        const grainGood = new StockableGood(GOODS.GRAIN, 1, 0);
        const veggyGood = new SustenanceVeggyGood(grainGood);

        this.goods.push(grainGood);
        this.goods.push(veggyGood);
    }
}
