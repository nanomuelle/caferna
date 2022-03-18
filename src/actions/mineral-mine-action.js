import { GOODS } from '../constants.js';
import { FixedGood } from '../entities/fixed-good.js';
import { AbstractAction } from './abstract-action.js';

const ORE_PER_MINE = 2;
export class MineralMineAction extends AbstractAction {
    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;

        player.addGood(
            new FixedGood(GOODS.ORE, ORE_PER_MINE * player.numOfMineralMines())
        );
    }
}
