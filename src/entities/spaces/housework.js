import { FixedGood } from '../fixed-good.js';
import { GOODS, NEXUS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';
import { FurnishCavernAction } from '../../actions/furnish-cavern-action.js';

export class Housework extends Space {
    constructor() {
        super('housework', 'Housework', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.DOG, 1));

        const action2 = new FurnishCavernAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
