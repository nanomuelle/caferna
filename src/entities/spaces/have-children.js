import { FixedGood } from '../fixed-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { GoodsAction } from '../../actions/goods-action.js';
import { FurnishDwellingAction } from '../../actions/furnish-dwelling-action.js';

// export const haveChildren = {
//     id: 'have-children',
//     name: 'Have children',
//     nexus: 'or',
//     actions: [
//         {
//             dwarf: 1,
//         },
//         {
//             furnishDwelling: true,
//         },
//     ],
// };
export class HaveChildren extends Space {
    constructor() {
        super('have-children', 'Have Children', NEXUS.OR);

        const action1 = new GoodsAction();
        action1.goods.push(new FixedGood(GOODS.NEW_BORN, 1));

        const action2 = new FurnishDwellingAction();

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
