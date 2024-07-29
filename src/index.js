import './style.css';
import { createBoardOnDOM, placeShipListeners } from './dom';
import { createPlayer } from './gameboard';

// begin with a human player
let playerOne = createPlayer(true);

// hide elements until form is complete
document.querySelector('.orientation-explanation').style.display = 'none';
document.querySelector('.checkbox-container').style.display = 'none';

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // create player based on user input (whether or not they checked the box)
    let playerTwo = createPlayer(!document.querySelector('#computer').checked);

    // clean up DOM
    document.querySelector('#beginning-form').remove();

    document.querySelector('.orientation-explanation').style.display = 'block';
    document.querySelector('.checkbox-container').style.display = 'block';

    // begin by creating player 1's board on the DOM
    createBoardOnDOM(document.querySelector('.gameboard-container'));

    // make second board take up no space
    document.querySelector('.second-gameboard-container').style.display = 'none';

    const playerTurn = document.querySelector('.player-turn');
    const currShip = document.querySelector('.current-ship');

    const playerOneBoxes = document.querySelectorAll(".gameboard-container .gameboard-box");
    let playerOneBoxesArray = Array.from(playerOneBoxes);

    // start off with the beginning text on the screen
    playerTurn.textContent = "Player 1: Place your";
    currShip.textContent = "Carrier (length 5)";

    placeShipListeners(playerOne, playerOneBoxesArray, 'C', true, playerOne, playerTwo, playerTwo.human)
});