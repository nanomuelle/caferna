import { Space } from './abstract-space.js';
import { RubyMiningAction } from '../../actions/ruby-mining-action.js';

export class RubyMining extends Space {
    constructor() {
        super('ruby-mining', 'Ruby mining');

        const action1 = new RubyMiningAction();
        this.actions.push(action1);
    }
}
