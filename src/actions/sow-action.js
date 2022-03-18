import { AbstractAction } from './abstract-action.js';

export class SowAction extends AbstractAction {
    constructor() {
        super();
        this.furnishing = null;
    }

    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - sow action', params);
    }
}
