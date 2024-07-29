import './style.css';
import { createBoardOnDOM, placeShipOnDOM, addBoxListeners, displayPlayerBoard, addBoxListenersBot, placeShipListeners } from './dom';
import { createPlayer } from './gameboard';

let playerOne = createPlayer(true);
let playerTwo = createPlayer(true); 

createBoardOnDOM(playerOne, document.querySelector('.gameboard-container'), '.gameboard-container');

document.querySelector('.second-gameboard-container').style.display = 'none';

const playerTurn = document.querySelector('.player-turn');
const currShip = document.querySelector('.current-ship');

const playerOneBoxes = document.querySelectorAll(".gameboard-container .gameboard-box");
let playerOneBoxesArray = Array.from(playerOneBoxes);

playerTurn.textContent = "Player 1: Place your";
currShip.textContent = "Carrier (length 5)";

placeShipListeners(playerOne, playerOneBoxesArray, 'C')
// place ships on DOM for player one

// placeShipOnDOM('C', playerOne, playerOneBoxesArray);
// placeShipOnDOM('B', playerOne, playerOneBoxesArray);
// placeShipOnDOM('R', playerOne, playerOneBoxesArray);
// placeShipOnDOM('S', playerOne, playerOneBoxesArray);
// placeShipOnDOM('D', playerOne, playerOneBoxesArray);

if (false) {



createBoardOnDOM(playerTwo, document.querySelector('.second-gameboard-container'), '.second-gameboard-container');

let playerTwoBoxes = document.querySelectorAll('.second-gameboard-container .gameboard-box');
let playerTwoBoxesArray = Array.from(playerTwoBoxes);

// place ships on DOM for player two
placeShipOnDOM('C', playerTwo, playerTwoBoxesArray);
placeShipOnDOM('B', playerTwo, playerTwoBoxesArray);
placeShipOnDOM('R', playerTwo, playerTwoBoxesArray);
placeShipOnDOM('S', playerTwo, playerTwoBoxesArray);
placeShipOnDOM('D', playerTwo, playerTwoBoxesArray);

// add box listeners to both players' boards if both are human
if (playerTwo.human) {
    addBoxListeners(playerTwo, playerTwoBoxesArray, true, playerOne, playerTwo);
    addBoxListeners(playerOne, playerOneBoxesArray, false, playerOne, playerTwo);
}
else {
    let possibleBotAttacks = [];

    let currCoord;
    
    // fill the possibleBotAttacks array with all the coordinates
    for (let i = 65; i <= 74; ++i) {
        for (let j = 1; j <= 10; ++j) {
            currCoord = String.fromCharCode(i) + String(j);
            possibleBotAttacks.push(currCoord);
        }
    }

    addBoxListenersBot(playerTwo, playerTwoBoxesArray, true, playerOne, playerTwo, possibleBotAttacks);
}

// make the opposing player's board invisible other than hits and misses
displayPlayerBoard(true, playerOne, playerTwo);

// disable boxes of playerOne to start off with
for (const box of playerOneBoxesArray) {
    box.style.pointerEvents = 'none';
}
let currPlayer = playerOne;

}