import { AbstractAction } from './abstract-action.js';

export class FurnishCavernAction extends AbstractAction {
    constructor() {
        super();
        this.furnishing = null;
    }

    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - furnisch cavern action', params);
    }
}
