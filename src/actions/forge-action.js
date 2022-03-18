import { AbstractAction } from './abstract-action.js';

export class ForgeAction extends AbstractAction {
    constructor() {
        super();
        this.furnishing = null;
    }

    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - forge action', params);
    }
}
