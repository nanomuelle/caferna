import { StockableGood } from '../stockable-good.js';
import { FixedGood } from '../fixed-good.js';
import { GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';
import { InitialPlayerAction } from '../../actions/initial-player-action.js';

export class StartingPlayer extends Space {
    constructor() {
        super('starting-player', 'Starting Player');

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.FOOD, 1, 1));
        action1.goods.push(new FixedGood(GOODS.RUBY, 1));

        const action2 = new InitialPlayerAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
