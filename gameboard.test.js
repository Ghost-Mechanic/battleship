import { Gameboard, coordToIndex, placementValid } from "./src/gameboard";

let coordToIndexMap = new Map();
coordToIndexMap.set('A1', 0);
coordToIndexMap.set('D4', 33);
coordToIndexMap.set('J10', 99);

coordToIndexMap.forEach((value, key) => {
    test('coordinate correctly converts to index', () => {
        expect(coordToIndex(key)).toBe(value);
    });
});

// placementValid function tests

let board = Array(100).fill(0);

test('placementValid returns true for valid vertical placement', () => {
    expect(placementValid(0, true, 5, board)).toBe(true);
});

test('placementValid returns false for invalid vertical placement', () => {
    board[30] = 1;
    expect(placementValid(0, true, 5, board)).toBe(false);
});

test('placementValid returns false for invalid out of bounds vertical placement', () => {
    expect(placementValid(85, true, 3, board)).toBe(false);
});

test('placementValid returns true for valid horizontal placement', () => {
    expect(placementValid(45, false, 5, board)).toBe(true);
});

test('placementValid returns false for invalid horizontal placement', () => {
    board[48] = 1;
    expect(placementValid(45, false, 5, board)).toBe(false);
});

test('placementValid returns false for invalid out of bounds horizontal placement', () => {
    expect(placementValid(67, false, 4, board)).toBe(false);
});

// test creation and placement of ships

let newBoard = new Gameboard();
newBoard.placeCarrier("A1", false);

for (let i = 0; i < 5; ++i) {
    test('gameboard class correctly places carrier', () => {
        expect(newBoard.board[i]).toBe('C');
    });
}

test('gameboard class correctly DOES NOT place battleship in invalid position', () => {
    expect(newBoard.placeBattleship("A3", false)).toBe(false);
    for (let i = 2; i < 6; ++i) {
        expect(newBoard.board[i]).not.toBe('B');
    }
});

newBoard.placeBattleship("D5", true);

for (let i = 34; i < 65; i += 10) {
    test('gameboard class correctly places battleship', () => {
        expect(newBoard.board[i]).toBe('B');
    });
}