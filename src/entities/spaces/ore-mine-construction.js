import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';
import { FixedGood } from '../fixed-good.js';
import { ExpeditionAction } from '../../actions/expedition-action.js';

// export const oreMineConstruction = {
//     id: 'ore-mine-construction',
//     name: 'Ore mine construction',
//     nexus: 'and then / or',
//     actions: [
//         {
//             tiles: ['DO'],
//             always: { ore: 3 },
//         },
//         {
//             expedition: 2,
//         },
//     ],
// };
export class OreMineConstruction extends Space {
    constructor() {
        super('ore-mine-construction', 'Ore Mine Construction', NEXUS.AND_OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.DEEP_TUNNEL_ORE_MINE, 1));
        action1.goods.push(new FixedGood(GOODS.ORE, 3));

        const action2 = new ExpeditionAction(2);

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
