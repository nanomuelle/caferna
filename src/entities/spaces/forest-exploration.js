import { StockableGood } from '../stockable-good.js';
import { FixedGood } from '../fixed-good.js';
import { GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';

export class ForestExploration extends Space {
    constructor() {
        super('forest-exploration', 'Forest exploration');

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.WOOD, 2, 1));
        action1.goods.push(new FixedGood(GOODS.FOOD, 2));

        this.actions.push(action1);
    }
}
