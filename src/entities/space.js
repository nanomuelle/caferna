import { NEXUS } from "../constants.js";

export class Space {
    constructor(stage, action, column, flexGrow = 1) {
        this.stage = stage;
        this.dwarfId = null;
        this.action = action;

        this.column = column;
        this.flexGrow = flexGrow;
    }

    replenish() {
        this.action.replenish();
    }

    use(dwarf, subactionIndex) {
        this.dwarfId = dwarf.id;
        switch (this.action.nexus) {
            case NEXUS.OR:
                this.subaction[subactionIndex].use(dwarf);
            break;

            default:
                this.action.subactions.forEach(
                    subaction => subaction.use(dwarf)
                );
        }
    }
}