import { AbstractAction } from './abstract-action.js';

export class LittleFenceAction extends AbstractAction {
    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - little fence action', params);
    }
}
