import { StockableGood } from '../stockable-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';
import { MineralMineAction } from '../../actions/mineral-mine-action.js';

export class OreMine extends Space {
    constructor() {
        super('ore-mine', 'OreMine', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new StockableGood(GOODS.ORE, 3, 2));
        action1.forEachMineralMine = 2;

        const action2 = new MineralMineAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
