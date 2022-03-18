import { AbstractAction } from './abstract-action.js';

export class FurnishDwellingAction extends AbstractAction {
    constructor() {
        super();
        this.furnishing = null;
    }

    use(dwarf, params) {
        super.use(dwarf);

        console.log('TODO - furnish dwelling action', params);
    }
}
