import { Ship, createCarrier, createBattleship, createCruiser, createSubmarine, createDestroyer } from "./src/ship";

// initialize ship object with length 3
const myShip = new Ship(3);

test('correctly increments number of hits on ship', () => {
    myShip.hit();
    expect(myShip.numHits).toBe(1);
    myShip.hit();
    myShip.hit();
    expect(myShip.numHits).toBe(3);
});

test('sunk is true when ship has been hit enough times', () => {
    expect(myShip.isSunk()).toBe(true);
});

test('carrier factory function returns ship with correct length', () => {
    const carrier = createCarrier();
    expect(carrier.length).toBe(5);
});

test('battleship factory function returns ship with correct length', () => {
    const battleship = createBattleship();
    expect(battleship.length).toBe(4);
});

test('cruiser factory function returns ship with correct length', () => {
    const cruiser = createCruiser();
    expect(cruiser.length).toBe(3);
});

test('submarine factory function returns ship with correct length', () => {
    const submarine = createSubmarine();
    expect(submarine.length).toBe(3);
});

test('destroyer factory function returns ship with correct length', () => {
    const destroyer = createDestroyer();
    expect(destroyer.length).toBe(2);
});