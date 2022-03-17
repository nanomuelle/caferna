import { GOODS } from "../constants.js";
import { StockableGood } from "./stockable-good.js";

export class SustenanceStockableVeggy extends StockableGood {
    constructor(grainStock) {
        super(GOODS.VEGGY, 0, 1);

        this.grainStock = grainStock;
    }

    replenish() {
        if (this.grainStock === 1) {
            this._stock += this.replenishStock;
        }
    }
}