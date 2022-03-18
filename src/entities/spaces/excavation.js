import { StockableGood } from '../stockable-good.js';
import { FixedGood } from '../fixed-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';

export class Excavation extends Space {
    constructor() {
        super('excavation', 'Excavation', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.STONE, 2, 1));

        const action2 = new GoodsAction();
        action2.goods.push(
            new FixedGood(GOODS.CAVERN_TUNNEL_OR_CAVERN_CAVERN, 1)
        );

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
