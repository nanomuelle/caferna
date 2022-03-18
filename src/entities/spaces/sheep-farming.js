import { StockableGood } from '../stockable-good.js';
import { NEXUS, GOODS } from '../../constants.js';
import { Space } from './abstract-space.js';
import { StableAction } from '../../actions/stable-action.js';
import { LittleFenceAction } from '../../actions/little-fence-action.js';
import { BigFenceAction } from '../../actions/big-fence-action.js';
import { NexusAndOrAction } from '../../actions/nexus-and-or-actions.js';

// export const sheepFarming = {
//     id: 'sheep-farming',
//     name: 'Sheep farming',
//     nexus: 'and then / or',
//     actions: [
//         {
//             littleFence: { wood: -2 },
//             bigFence: { wood: -4 },
//             stable: { stone: -1 },
//         },
//         {
//             initial: { sheep: 1 },
//             replenish: { sheep: 1 },
//             current: { sheep: 0 },
//         },
//     ],
// };

export class SheepFarming extends Space {
    constructor() {
        super('excavation', 'Excavation', NEXUS.AND_THEN_OR);

        const action1 = new NexusAndOrAction();
        action1.addAction(new LittleFenceAction());
        action1.addAction(new BigFenceAction());
        action1.addAction(new StableAction());

        const action2 = new StockableGood(GOODS.SHEEP, 1, 1);

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
