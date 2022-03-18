import { StockableGood } from '../stockable-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';
import { ExpeditionAction } from '../../actions/expedition-action.js';

export class Logging extends Space {
    constructor() {
        super('logging', 'Logging', NEXUS.AND_THEN_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.WOOD, 3, 3));

        const action2 = new ExpeditionAction(1);

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
