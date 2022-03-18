import { FixedGood } from '../fixed-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';
import { SustenanceAction } from '../../actions/sustenance-action.js';

export class Sustenance extends Space {
    constructor() {
        super('sustenance', 'Sustenance', NEXUS.AND_OR);

        const action1 = new SustenanceAction();
        const action2 = new GoodsAction();
        action2.goods.push(new FixedGood(GOODS.MEADOW_FIELD, 1));

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
