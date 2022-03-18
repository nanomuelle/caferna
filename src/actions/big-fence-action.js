import { AbstractAction } from './abstract-action.js';

export class BigFenceAction extends AbstractAction {
    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - big fence action', params);
    }
}
