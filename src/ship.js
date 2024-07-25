// factory functions for different types of ships of varying lengths
function createCarrier() {
    return new Ship(5);
}

function createBattleship() {
    return new Ship(4);
}

function createCruiser() {
    return new Ship(3);
}

function createSubmarine() {
    return new Ship(3);
}

function createDestroyer() {
    return new Ship(2);
}

class Ship {
    constructor(length) {
        this.length = length;
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