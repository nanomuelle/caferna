import { FixedGood } from "../fixed-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { NEXUS, GOODS } from '../../constants.js'

    
export class Growth extends Action {
    constructor() {
        super('growth', 'Growth', NEXUS.OR);
        
        const subaction1 = new SubAction();
        subaction1.goods.push(new FixedGood(GOODS.WOOD, 1));
        subaction1.goods.push(new FixedGood(GOODS.STONE, 1));
        subaction1.goods.push(new FixedGood(GOODS.ORE, 1));
        subaction1.goods.push(new FixedGood(GOODS.FOOD, 1));
        subaction1.goods.push(new FixedGood(GOODS.GOLD, 2));

        const subaction2 = new SubAction();
        subaction2.goods.push(new FixedGood(GOODS.NEW_BORN, 1));
        
        this.subactions.push(subaction1);
        this.subactions.push(subaction2);
    }
}