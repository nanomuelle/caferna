import { StockableGood } from "../stockable-good.js";
import { Action } from "../action.js";
import { SubAction } from "../subaction.js";
import { GOODS } from '../../constants.js'

export class RubyMining extends Action {
    constructor() {
        super('ruby-mining', 'Ruby mining');
        
        const subaction1 = new SubAction();
        subaction1.goods.push(new StockableGood(GOODS.RUBY, 1, 1));
        subaction1.havingRubyMine = 1;

        this.subactions.push(subaction1);
    }
}