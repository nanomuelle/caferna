import { FixedGood } from "./fixed-good.js";
import { GOODS } from "../constants.js";

export class SubAction {
    constructor() {
        this.goods = [];
        this.expedition = 0;
        this.initialPlayer = false;
        this.forEachMineralMine = 0;
        this.havingRubyMine = 0;
    }

    replenish() {
        this.goods.forEach(
            good => {
                if (good.replenish) {
                    good.replenish();
                }
            }
        );
    }

    use(dwarf) {
        const { player } = dwarf;

        if (this.goods) {
            this.goods.forEach(
                good => player.addGood(good.obtainStock())
            );
        }

        if (this.expedition) {
            // TODO
            console.log('TODO Expedition: ', this.expedition);
        }

        if (this.initialPlayer) {
            player.setInitialPlayer();
        }

        if (this.forEachMineralMine) {
            player.addGood(new FixedGood(
                GOODS.ORE, 
                2 * player.numOfMineralMines()
            ));
        }

        if (this.havingRubyMine) {
            player.addGood(new FixedGood(
                GOODS.RUBY,
                1
            ));
        }
    }
}