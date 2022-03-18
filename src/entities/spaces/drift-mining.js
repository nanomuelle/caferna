import { StockableGood } from '../stockable-good.js';
import { FixedGood } from '../fixed-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';

export class DriftMining extends Space {
    constructor() {
        super('drift-mining', 'Drift mining', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.STONE, 2, 2));

        const action2 = new GoodsAction();
        action2.goods.push(new FixedGood(GOODS.CAVERN_TUNNEL, 1));

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
