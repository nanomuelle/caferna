import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { FixedGood } from "../fixed-good.js";
import { GOODS } from "../../constants.js";

export class Imitation extends Action {
    constructor() {
        super('imitation', 'Imitation');
        
        const subaction1 = new SubAction();
        subaction1.goods.push( new FixedGood(GOODS.FOOD, -2)); 
        this.subactions.push(subaction1);

        this.imitateSpace = null;
    }

    use(dwarf, space, params) {
        this.imitateSpace = space;
        this.imitateSpace.use(dwarf, params);
    }
}