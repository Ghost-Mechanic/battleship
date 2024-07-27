import { Gameboard, createPlayer } from "./gameboard";

function test(box) {
    box.addEventListener("click", () => {
        console.log("this is a test");
    });
}

// this function creates a new player's board on the DOM
function createBoardOnDOM(player, gameboard, boardContainer) {
    //const newPlayer = createPlayer(human);

    // initialize currLetter to the ascii character before A
    let currLetter = '@';

    // create first row
    let emptyBox = document.createElement('div');
    emptyBox.classList.add('gameboard-item');
    gameboard.appendChild(emptyBox);

    for (let i = 1; i <= 10; ++i) {
        let newCol = document.createElement('div');
        newCol.textContent = i;
        newCol.classList.add('gameboard-item');
        gameboard.appendChild(newCol);
    }

    for (let i = 0; i < 100; ++i) {
        // for every 10th index on the board, create a new row with a letter symbolizing it
        if (i % 10 === 0) {
            currLetter = String.fromCharCode((currLetter.charCodeAt(0) + 1));
            let newRow = document.createElement('div');
            newRow.textContent = currLetter;
            newRow.classList.add('gameboard-item');
            gameboard.appendChild(newRow);
        }

        // create new box for each coordinate and give the correct coordinates to its dataset
        let newBox = document.createElement('div');
        newBox.classList.add('gameboard-item', 'gameboard-box');
        newBox.dataset.coord = currLetter + String(i % 10 + 1);

        // add event listeners to each box that attacks a ship and updates the DOM
        newBox.addEventListener("click", () => {
            let playerBoxes = document.querySelectorAll(`${boardContainer} .gameboard-box`);
            let playerBoxesArray = Array.from(playerBoxes);
            player.receiveAttack(newBox.dataset.coord);
            updateBoard(player, playerBoxesArray);
        });
        
        test(newBox);
        gameboard.appendChild(newBox);
    }

    //return newPlayer;
}

// this function places the ship on the DOM given the type of ship, the player, and the player's board
function placeShipOnDOM(ship, player, gameboard) {
    if (ship === 'C') {
        player.placeCarrier('B4', true);
    }
    else if (ship === 'B') {
        player.placeBattleship('H2', false);
    }
    else if (ship === 'R') {
        player.placeCruiser('C7', false);
    }
    else if (ship === 'S') {
        player.placeSubmarine('E8', true);
    }
    else if (ship === 'D') {
        player.placeDestroyer('I7', false);
    }

    // use the correct symbol for the ship on the gameboard
    updateBoard(player, gameboard);
}

// this function updates the board to display hits and misses after turns
function updateBoard(player, gameboard) {
    // iterate through the board to ensure the DOM display matches the class board
    for (let i = 0; i < gameboard.length; ++i) {
        if (player.board[i] !== 0) {
            gameboard[i].textContent = player.board[i];

            // add the correct class to each box depending on it's symbol on the board
            switch (player.board[i]) {
                case 'X':
                    gameboard[i].classList.add('hit');
                    break;
                case 'M':
                    gameboard[i].classList.add('miss');
                    break;
                default:
                    gameboard[i].classList.add('ship');
            }
        }
    }
}

export { createBoardOnDOM, placeShipOnDOM };