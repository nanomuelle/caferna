import { FixedGood } from '../fixed-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';
import { SowAction } from '../../actions/sow-action.js';

export class SlashAndBurn extends Space {
    constructor() {
        super('slash-and-burn', 'Slash-and-burn', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.MEADOW_FIELD, 1));

        const action2 = new SowAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
