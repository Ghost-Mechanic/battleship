import { Gameboard, createPlayer, coordToIndex } from "./gameboard";

// this function creates a new player's board on the DOM
function createBoardOnDOM(player, gameboard, boardContainer) {
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

        gameboard.appendChild(newBox);
    }
}

// this function displays the correct boards based on whos turn it is
// basically makes the opposing player's board invisible except for known hits and misses
function displayPlayerBoard(playerOneTurn, playerOne, playerTwo) {
    const playerOneBoard = document.querySelectorAll('.gameboard-container .gameboard-box');
    const playerTwoBoard = document.querySelectorAll('.second-gameboard-container .gameboard-box');
    const playerOneBoardArray = Array.from(playerOneBoard);
    const playerTwoBoardArray = Array.from(playerTwoBoard);

    // call updateBoard for the correct player's boards
    if (playerOneTurn) {
        updateBoard(playerOne, playerOneBoardArray);
        updateBoardForOpp(playerTwo, playerTwoBoardArray);
    }
    else {
        updateBoard(playerTwo, playerTwoBoardArray);
        updateBoardForOpp(playerOne, playerOneBoardArray)
    }
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

// this function adds event listeners to each of the boxes in the given array that run the game
function addBoxListeners(player, playerBoxesArray, playerOneTurn, playerOne, playerTwo) {
    for (const box of playerBoxesArray) {
        box.addEventListener("click", () => {
            // only run event listener if the box clicked on has not been attacked already
            if (!player.usedCoords.includes(coordToIndex(box.dataset.coord))) {
                // call the receiveAttack function for the given player and update the board for that player
                player.receiveAttack(box.dataset.coord);
                updateBoard(player, playerBoxesArray);

                let currBoard;

                // get the opponents board to enable and disable the correct boards after each turn
                if (playerOneTurn) {
                    currBoard = '.gameboard-container';
                }
                else {
                    currBoard = '.second-gameboard-container';
                }

                // disable opponent boxes to take turns
                for (const box of playerBoxesArray) {
                    box.style.pointerEvents = 'none';
                }

                let currBoxes = document.querySelectorAll(`${currBoard} .gameboard-box`);
                let currBoxesArray = Array.from(currBoxes);

                // enable opponent boxes after taking turn
                for (const box of currBoxesArray) {
                    box.style.pointerEvents = 'auto';
                }

                // handle victory if game is over
                if (player.allShipsSunk()) {
                    handleWin(playerOneTurn, currBoxesArray);
                }
                else {
                    turnScreen(playerOneTurn, playerOne, playerTwo);
                }
            }
        });
    }
}

// this function adds the box listeners to the boards for playing against the computer
function addBoxListenersBot(player, playerBoxesArray, playerOneTurn, playerOne, playerTwo, possibleBotAttacks) {
    for (const box of playerBoxesArray) {
        box.addEventListener("click", () => {
            // only run event listener if the box clicked on has not been attacked already
            if (!player.usedCoords.includes(coordToIndex(box.dataset.coord))) {
                // call the receiveAttack function for the given player and update the board for that player
                player.receiveAttack(box.dataset.coord);
                updateBoardForOpp(player, playerBoxesArray);

                let currBoxes = document.querySelectorAll('.gameboard-container .gameboard-box');
                let currBoxesArray = Array.from(currBoxes);

                // handle victory if game is over
                if (playerTwo.allShipsSunk()) {
                    handleWin(playerOneTurn, currBoxesArray);

                    // disable event listeners for the opposing board
                    const opposingBoard = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                    const opposingBoardArray = Array.from(opposingBoard);
                    for (const box of opposingBoardArray) {
                        box.style.pointerEvents = 'none';
                    }
                }
                else {
                    botAttack(playerOne, possibleBotAttacks, currBoxesArray);
                }
            }
        });
    }
}

// this function has the opposing bot player pick a random spot to attack from its array of possible attacks
function botAttack(playerOne, possibleBotAttacks, currBoxesArray) {
    // get random attack from array and remove it so that it is not repeated
    const randomAttack = possibleBotAttacks[Math.floor(Math.random() * possibleBotAttacks.length)];
    possibleBotAttacks.splice(possibleBotAttacks.indexOf(randomAttack), 1);

    playerOne.receiveAttack(randomAttack);
    updateBoard(playerOne, currBoxesArray);

    // handle victory if game is over
    if (playerOne.allShipsSunk()) {
        handleWin(false, currBoxesArray);
        
        // disable event listeners for the opposing board
        const opposingBoard = document.querySelectorAll('.second-gameboard-container .gameboard-box');
        const opposingBoardArray = Array.from(opposingBoard);
        for (const box of opposingBoardArray) {
            box.style.pointerEvents = 'none';
        }
    }
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

// this function updates the board to display the opponent's board, only showing hits and misses
function updateBoardForOpp(player, gameboard) {
    // iterate through the board to ensure the DOM display matches the class board
    for (let i = 0; i < gameboard.length; ++i) {
        if (player.board[i] !== 0) {
            gameboard[i].textContent = '';

            // add the correct class to each box depending on it's symbol on the board
            switch (player.board[i]) {
                case 'X':
                    gameboard[i].textContent = player.board[i];
                    gameboard[i].classList.add('hit');
                    break;
                case 'M':
                    gameboard[i].textContent = player.board[i];
                    gameboard[i].classList.add('miss');
                    break;
                default:
                    gameboard[i].classList.remove('ship');
            }
        }
    }
}

// handle the victory by disabling the rest of the buttons and displaying a message
function handleWin(playerOneTurn, currBoxesArray) {
    for (const box of currBoxesArray) {
        box.style.pointerEvents = 'none';
    }

    const winMessage = document.createElement('div');

    if (playerOneTurn) {
        winMessage.textContent = 'Player 1 has won!';
    }
    else {
        winMessage.textContent = 'Player 2 has won!';
    }

    document.body.appendChild(winMessage);
}

// this screen shows up once a turn is complete, with a button to move on to the next turn
// so that the players cannot see each other's boards
function turnScreen(playerOneTurn, playerOne, playerTwo) {
    // start off by hiding the boards
    const leftBoard = document.querySelector('.gameboard-container');
    const rightBoard = document.querySelector('.second-gameboard-container');
    leftBoard.style.display = 'none';
    rightBoard.style.display = 'none';

    // create new elements for the turn screen
    const turnTitle = document.createElement('h1');
    turnTitle.textContent = 'Pass Device';

    const turnDescription = document.createElement('h3');
    turnDescription.textContent = 'Pass the device to the opposing player! When you are ready for the next turn click the button';

    const turnButton = document.createElement('button');
    turnButton.textContent = 'Next Turn';

    document.body.append(turnTitle, turnDescription, turnButton);

    // event listener to turn button makes the boards reappear and updates them
    turnButton.addEventListener('click', () => {
        turnTitle.remove();
        turnDescription.remove();
        turnButton.remove();

        leftBoard.style.display = 'grid';
        rightBoard.style.display = 'grid';
        displayPlayerBoard(!playerOneTurn, playerOne, playerTwo);
    });
}

export { createBoardOnDOM, placeShipOnDOM, addBoxListeners, displayPlayerBoard, addBoxListenersBot };