import { AbstractAction } from './abstract-action.js';

export class ExpeditionAction extends AbstractAction {
    constructor(numExpeditions) {
        super();
        this.numExpeditions = numExpeditions;
    }

    // TODO
    // eslint-disable-next-line class-methods-use-this
    expedition_(dwarf, params) {
        console.error('TODO Expedition: ', dwarf, params);
    }

    use(dwarf, params) {
        super.use(dwarf);

        for (let index = 0; index < this.numExpeditions; index += 1) {
            this.expedition_(dwarf, params[index]);
        }
    }
}
