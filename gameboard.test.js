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

// test gameboard's attack functions
let attackBoard = new Gameboard();
attackBoard.placeSubmarine("B5", false);

test('ship in gameboard correctly receives attack', () => {
    expect(attackBoard.submarine.numHits).toBe(0);
    expect(attackBoard.board[16]).toBe('S');

    attackBoard.receiveAttack("B7");

    expect(attackBoard.submarine.numHits).toBe(1);
    expect(attackBoard.board[16]).toBe('X');
    expect(attackBoard.board[14]).toBe('S');

    attackBoard.receiveAttack("B5");

    expect(attackBoard.submarine.numHits).toBe(2);
    expect(attackBoard.board[14]).toBe('X');
});

test('gameboard correctly keeps track of missed attacks', () => {
    expect(attackBoard.missedCoords.length).toBe(0);

    attackBoard.receiveAttack("J10");

    expect(attackBoard.missedCoords.length).toBe(1);
    expect(attackBoard.missedCoords[0]).toBe(99);
});

// test allShipsSunk

let shipsSunkBoard = new Gameboard();
shipsSunkBoard.placeCarrier("B2", true);
shipsSunkBoard.placeBattleship("C3", false);
shipsSunkBoard.placeCruiser("H2", false);
shipsSunkBoard.placeSubmarine("E1", true);
shipsSunkBoard.placeDestroyer("J8", false);

test('gameboard correctly reports if all ships are sunk', () => {
    expect(shipsSunkBoard.allShipsSunk()).toBe(false);

    // sink all ships
    for (let i = 0; i < 5; ++i) {
        if (i < 2) {
            shipsSunkBoard.destroyer.hit();
        }
        if (i < 3) {
            shipsSunkBoard.submarine.hit();
            shipsSunkBoard.cruiser.hit();
        }
        if (i < 4) {
            shipsSunkBoard.battleship.hit();
        }

        shipsSunkBoard.carrier.hit();
    }

    expect(shipsSunkBoard.allShipsSunk()).toBe(true);
});