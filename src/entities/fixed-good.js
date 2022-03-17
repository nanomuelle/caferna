export class FixedGood {
    constructor(
        name,
        stock
    ) {
        this.name = name;
        this._stock = stock;
    }

    get stock() {
        return this._stock;
    }
    
    obtainStock() {
        return this;
    }
}