import { FixedGood } from "./fixed-good.js";

export class StockableGood {
    constructor(
        name,
        initialStock,
        replenishStock
    ) {
        this.name = name;
        this.initialStock = initialStock;
        this.replenishStock = replenishStock;
        this._stock = 0;
    }

    get stock() {
        return this._stock;
    }

    replenish() {
        this._stock = (this._stock === 0)
            ? this.initialStock
            : this._stock += this.replenishStock
        ;
    }

    obtainStock() {
        const good = new FixedGood(this.name, this._stock);
        this._stock = 0;
        return good;
    }
}