import { Ship, createCarrier, createBattleship, createCruiser, createSubmarine, createDestroyer } from "./ship";

// this function converts a coordinate to an index on the board
function coordToIndex(coord) {
    // split coordinate into its letter and number
    let coordLetter = coord[0];
    let coordNum = Number(coord.slice(1));

    // create string by combining the correct index of the letter and number
    let index = String(coordLetter.charCodeAt(0) - 65) + String(coordNum - 1);

    return Number(index);
}

// this function returns true if a placement is valid and false otherwise
function placementValid(index, vertical, length, board) {

    // check if the vertical placement is valid with a for loop
    if (vertical) {
        // check if the board already has a ship there or the ship goes out of bounds
        for (let i = index; i < index + (length * 10); i += 10) {
            if (board[i] !== 0 || i > 99) {
                return false;
            }
        }

        return true;
    }
    else {
        for (let i = index; i < index + length; ++i) {
            if (board[i] !== 0 || ((i % 10 === 0) && (i > index))) {
                return false;
            }
        }

        return true;
    }
}

class Gameboard {
    constructor() {
        this.board = Array(100).fill(0);
        this.carrier = createCarrier();
        this.battleship = createBattleship();
        this.cruiser = createCruiser();
        this.submarine = createSubmarine();
        this.destroyer = createDestroyer();
    }

    // these functions place a ship at a given coordinate with a given orientation
    // returns true if successfully placed, false otherwise
    placeCarrier(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.carrier.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.carrier.length * 10); i += 10) {
                    this.board[i] = this.carrier.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.carrier.length; ++i) {
                    this.board[i] = this.carrier.symbol;
                }
            }

            return true;
        }

        return false;
    }

    placeBattleship(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.battleship.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.battleship.length * 10); i += 10) {
                    this.board[i] = this.battleship.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.battleship.length; ++i) {
                    this.board[i] = this.battleship.symbol;
                }
            }

            return true;
        }

        return false;
    }

    placeCruiser(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.cruiser.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.cruiser.length * 10); i += 10) {
                    this.board[i] = this.cruiser.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.cruiser.length; ++i) {
                    this.board[i] = this.cruiser.symbol;
                }
            }

            return true;
        }

        return false;
    }

    placeSubmarine(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.submarine.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.submarine.length * 10); i += 10) {
                    this.board[i] = this.submarine.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.submarine.length; ++i) {
                    this.board[i] = this.submarine.symbol;
                }
            }

            return true;
        }

        return false;
    }

    placeDestroyer(coord, vertical) {
        const newShipIndex = coordToIndex(coord);

        // ensure placement is valid before placing at the index
        if (placementValid(newShipIndex, vertical, this.destroyer.length, this.board)) {
            // place the ship in the correct orientation
            if (vertical) {
                for (let i = newShipIndex; i < newShipIndex + (this.destroyer.length * 10); i += 10) {
                    this.board[i] = this.destroyer.symbol;
                }
            }
            else {
                for (let i = newShipIndex; i < newShipIndex + this.destroyer.length; ++i) {
                    this.board[i] = this.destroyer.symbol;
                }
            }

            return true;
        }

        return false;
    }
}

export { Gameboard, coordToIndex, placementValid };