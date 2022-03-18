import { AbstractAction } from './abstract-action.js';

export class GoodsAction extends AbstractAction {
    constructor() {
        super();
        this.goods = [];
    }

    replenish() {
        super.replenish();

        this.goods.forEach(good => {
            if (good.replenish) {
                good.replenish();
            }
        });
    }

    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;
        if (this.goods) {
            this.goods.forEach(good => player.addGood(good.obtainStock()));
        }
    }
}
