export class Action {
    constructor(id, name, nexus = null) {
        this.id = id;
        this.name = name;
        this.nexus = nexus;
        this.subactions = [];
    }

    replenish() {
        this.subactions.forEach(
            subaction => subaction.replenish()
        );
    }
}