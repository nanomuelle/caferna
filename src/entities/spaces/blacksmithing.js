import { ExpeditionAction } from '../../actions/expedition-action.js';
import { ForgeAction } from '../../actions/forge-action.js';
import { NEXUS } from '../../constants.js';
import { Space } from './abstract-space.js';

export class Blacksmithing extends Space {
    constructor() {
        super('blacksmithing', 'Blacksmithing', NEXUS.AND_THEN_OR);

        const action1 = new ForgeAction();
        const action2 = new ExpeditionAction(3);

        this.actions.push(action1);
        this.actions.push(action2);
    }
}
