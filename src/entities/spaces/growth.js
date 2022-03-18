import { FixedGood } from '../fixed-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';

export class Growth extends Space {
    constructor() {
        super('growth', 'Growth', NEXUS.OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.WOOD, 1));
        action1.goods.push(new FixedGood(GOODS.STONE, 1));
        action1.goods.push(new FixedGood(GOODS.ORE, 1));
        action1.goods.push(new FixedGood(GOODS.FOOD, 1));
        action1.goods.push(new FixedGood(GOODS.GOLD, 2));

        const action2 = new GoodsAction();
        action2.goods.push(new FixedGood(GOODS.NEW_BORN, 1));

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
