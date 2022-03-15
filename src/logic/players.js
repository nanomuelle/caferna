import * as board from './boards.js';

const createDwarf = (id, color) => ({
    id,
    color,
    weapon: 0,
});

const createPlayer = (id, color, food, isInitial) => ({
    id,
    color,
    dwarfs: [createDwarf(`${id}1`, color), createDwarf(`${id}2`, color)],
    forest: board.createForest(),
    mountain: board.createMountain(),
    isInitial,

    wood: 0,
    stone: 0,
    ore: 0,
    ruby: 0,

    grain: 0,
    veggy: 0,

    food,
    gold: 0,

    dog: 0,

    sheep: 0,
    boar: 0,
    donkey: 0,
    cow: 0,
});

// TODO: random initial player
export const createPlayers = () => [
    createPlayer('A', 'red', 1, true),
    createPlayer('B', 'blue', 1, false),
    createPlayer('C', 'fuchsia', 2, false),
    createPlayer('D', 'green', 3, false),
];
