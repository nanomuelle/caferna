import { StockableGood } from "../stockable-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { NEXUS, GOODS } from '../../constants.js'

export class OreMine extends Action {
    constructor() {
        super('ore-mine', 'OreMine', NEXUS.AND_OR);
        
        const subaction1 = new SubAction();
        subaction1.goods.push(new StockableGood(GOODS.ORE, 3, 2));
        subaction1.forEachMineralMine = 2;

        this.subactions.push(subaction1);
    }
}