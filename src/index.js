import './style.css';
import { createBoardOnDOM, placeShipOnDOM, addBoxListeners, displayPlayerBoard } from './dom';
import { createPlayer } from './gameboard';

let playerOne = createPlayer(true); //createBoardOnDOM(true, document.querySelector('.gameboard-container'));

createBoardOnDOM(playerOne, document.querySelector('.gameboard-container'), '.gameboard-container');

let playerOneBoxes = document.querySelectorAll(".gameboard-container .gameboard-box");
let playerOneBoxesArray = Array.from(playerOneBoxes);

// place ships on DOM for player one
placeShipOnDOM('C', playerOne, playerOneBoxesArray);
placeShipOnDOM('B', playerOne, playerOneBoxesArray);
placeShipOnDOM('R', playerOne, playerOneBoxesArray);
placeShipOnDOM('S', playerOne, playerOneBoxesArray);
placeShipOnDOM('D', playerOne, playerOneBoxesArray);

let playerTwo = createPlayer(false); //createBoardOnDOM(false, document.querySelector('.second-gameboard-container'));

createBoardOnDOM(playerTwo, document.querySelector('.second-gameboard-container'), '.second-gameboard-container');

let playerTwoBoxes = document.querySelectorAll('.second-gameboard-container .gameboard-box');
let playerTwoBoxesArray = Array.from(playerTwoBoxes);

// place ships on DOM for player two
placeShipOnDOM('C', playerTwo, playerTwoBoxesArray);
placeShipOnDOM('B', playerTwo, playerTwoBoxesArray);
placeShipOnDOM('R', playerTwo, playerTwoBoxesArray);
placeShipOnDOM('S', playerTwo, playerTwoBoxesArray);
placeShipOnDOM('D', playerTwo, playerTwoBoxesArray);

// add box listeners to both players' boards
addBoxListeners(playerTwo, playerTwoBoxesArray, true, playerOne, playerTwo);
addBoxListeners(playerOne, playerOneBoxesArray, false, playerOne, playerTwo);

// make the opposing player's board invisible other than hits and misses
displayPlayerBoard(true, playerOne, playerTwo);

// disable boxes of playerOne to start off with
for (const box of playerOneBoxesArray) {
    box.style.pointerEvents = 'none';
}
let currPlayer = playerOne;