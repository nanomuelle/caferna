import { FixedGood } from '../fixed-good.js';
import { GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';

export class Imitation extends Space {
    constructor() {
        super('imitation', 'Imitation');

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.FOOD, -2));
        this.actions.push(action1);

        this.imitateSpace = null;
    }

    use(dwarf, space, params) {
        this.imitateSpace = space;
        this.imitateSpace.use(dwarf, params);
    }
}
