export class Dwarf {
    constructor(player) {
        this.player = player;
        this.id = `dwarf-${player.id}-${player.dwarfs.length}`;
        this.weapon = 0;
        this.isNewBorn = false;
    }
}
