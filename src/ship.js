// factory functions for different types of ships of varying lengths
function createCarrier() {
    return new Ship(5, 'C');
}

function createBattleship() {
    return new Ship(4, 'B');
}

function createCruiser() {
    return new Ship(3, 'R');
}

function createSubmarine() {
    return new Ship(3, 'S');
}

function createDestroyer() {
    return new Ship(2, 'D');
}

class Ship {
    constructor(length, symbol) {
        this.length = length;
        this.symbol = symbol;
        this.numHits = 0;
        this.sunk = false;
    }

    hit() {
        ++this.numHits;
    }

    // return true or false if the ship is sunk or not
    isSunk() {
        // ship is sunk when it has been hit as many times as its length
        if (this.numHits === this.length) {
            this.sunk = true;
        }

        return this.sunk;
    }
}

export { Ship, createCarrier, createBattleship, createCruiser, createSubmarine, createDestroyer };