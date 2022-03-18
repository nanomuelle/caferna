export class Space {
    constructor(id, name, nexus = null) {
        this.id = id;
        this.name = name;
        this.nexus = nexus;
        this.actions = [];

        this.dwarf = null;
    }

    replenish() {
        this.actions.forEach(action => {
            if (action.replenish) {
                action.replenish();
            }
        });
    }

    useAction(index, params) {
        this.actions[index].use(this.dwarf, params);
    }

    use(dwarf) {
        this.dwarf = dwarf;
    }
}
