import { StockableGood } from "../stockable-good.js";
import { FixedGood } from "../fixed-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { NEXUS, GOODS } from '../../constants.js'

export class Excavation extends Action {
    constructor() {
        super('excavation', 'Excavation', NEXUS.AND_OR);
        
        const subaction1 = new SubAction();
        subaction1.goods.push(new StockableGood(GOODS.STONE, 2, 1));

        const subaction2 = new SubAction();
        subaction2.goods.push(new FixedGood(GOODS.CAVERN_TUNNEL_OR_CAVERN_CAVERN, 1));
        
        this.subactions.push(subaction1);
        this.subactions.push(subaction2);
    }
}