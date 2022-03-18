import { AbstractAction } from './abstract-action.js';

export class StableAction extends AbstractAction {
    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - stable action', params);
    }
}
