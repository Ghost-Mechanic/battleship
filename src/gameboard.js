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
    constructor(human) {
        this.board = Array(100).fill(0);
        this.carrier = createCarrier();
        this.human = human
        this.battleship = createBattleship();
        this.cruiser = createCruiser();
        this.submarine = createSubmarine();
        this.destroyer = createDestroyer();
        this.missedCoords = [];
        this.usedCoords = [];
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

    // receives an attack on a pair of coordinates and determines whether or not it hit a ship
    receiveAttack(coord) {
        const attackIndex = coordToIndex(coord);

        // use switch statement to call hit on correct ship when it is hit and mark hits with an X
        switch (this.board[attackIndex]) {
            case 'C':
                this.carrier.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                break;
            case 'B':
                this.battleship.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                break;
            case 'R':
                this.cruiser.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                break;
            case 'S':
                this.submarine.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                break;
            case 'D':
                this.destroyer.hit();
                this.board[attackIndex] = 'X';
                this.usedCoords.push(attackIndex);
                break;
            case 'X':
                break;
            default:
                this.board[attackIndex] = 'M';
                this.missedCoords.push(attackIndex);
                this.usedCoords.push(attackIndex);
        }
    }

    // return true if all ships are sunk
    allShipsSunk() {
        if (this.carrier.isSunk() && 
            this.battleship.isSunk() && 
            this.cruiser.isSunk() &&
            this.submarine.isSunk() &&
            this.destroyer.isSunk()) 
            {
                return true;
        }

        return false;
    }
}

function createPlayer(human) {
    return new Gameboard(human);
}

export { Gameboard, coordToIndex, placementValid, createPlayer };