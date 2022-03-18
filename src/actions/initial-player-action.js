import { AbstractAction } from './abstract-action.js';

export class InitialPlayerAction extends AbstractAction {
    use(dwarf) {
        super.use(dwarf);

        const { player } = dwarf;
        player.game.setInitialPlayer(player);
    }
}
