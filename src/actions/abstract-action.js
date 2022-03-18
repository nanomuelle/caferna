/* eslint-disable class-methods-use-this */
export class AbstractAction {
    constructor() {
        this.dwarf = null;
    }

    replenish() {}

    use(dwarf) {
        this.dwarf = dwarf;
    }
}
