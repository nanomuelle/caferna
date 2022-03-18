import { GOODS } from '../constants.js';
import { FixedGood } from '../entities/fixed-good.js';
import { StockableGood } from '../entities/stockable-good.js';
import { GoodsAction } from './goods-action.js';

const EXTRA_RUBY = 1;
export class RubyMiningAction extends GoodsAction {
    constructor() {
        super();

        this.goods.push(new StockableGood(GOODS.RUBY, 1, 1));
    }

    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;
        if (player.numOfRubyMines > 0) {
            player.addGood(new FixedGood(GOODS.RUBY, EXTRA_RUBY));
        }
    }
}
