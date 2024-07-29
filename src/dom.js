import { coordToIndex } from "./gameboard";

// this function creates a new player's board on the DOM
function createBoardOnDOM(gameboard) {
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

    const playerTurnText = document.querySelector('.player-turn');

    // call updateBoard for the correct player's boards
    if (playerOneTurn) {
        updateBoard(playerOne, playerOneBoardArray);
        updateBoardForOpp(playerTwo, playerTwoBoardArray);
        playerTurnText.textContent = 'It is Player 1\'s (left) turn';
    }
    else {
        updateBoard(playerTwo, playerTwoBoardArray);
        updateBoardForOpp(playerOne, playerOneBoardArray)
        playerTurnText.textContent = 'It is Player 2\'s (right) turn';
    }
}

// this function adds listeners to the boxes that allow the ships to be placed when clicked, and goes 
// on to call itself for each ship in order from largest to smallest, then starts up the game
function placeShipListeners(player, playerBoxesArray, ship, playerOneTurn, playerOne, playerTwo, human) {
    const currShip = document.querySelector('.current-ship');

    // define a function to handle the ship placement for each ship
    const handleShipPlacement = (e) => {
        const box = e.target;

        // only move on to the next ship placement if the current placement was valid
        if (placeShipOnDOM(ship, player, playerBoxesArray, box.dataset.coord)) {
            for (const box of playerBoxesArray) {
                box.removeEventListener('click', handleShipPlacement);
            }

            // call the function with the correct ship in order
            switch (ship) {
                case 'C':
                    currShip.textContent = 'Battleship (length 4)';
                    placeShipListeners(player, playerBoxesArray, 'B', playerOneTurn, playerOne, playerTwo, human);
                    break;
                case 'B':
                    currShip.textContent = 'Cruiser (length 3)';
                    placeShipListeners(player, playerBoxesArray, 'R', playerOneTurn, playerOne, playerTwo, human);
                    break;
                case 'R':
                    currShip.textContent = 'Submarine (length 3)';
                    placeShipListeners(player, playerBoxesArray, 'S', playerOneTurn, playerOne, playerTwo, human);
                    break;
                case 'S':
                    currShip.textContent = 'Destroyer (length 2)';
                    placeShipListeners(player, playerBoxesArray, 'D', playerOneTurn, playerOne, playerTwo, human);
                    break;
            }

            // once player one is finished placing ships, let player 2 place theirs
            if (ship === 'D' && human) {
                if (playerOneTurn) {
                    document.querySelector('.gameboard-container').style.display = 'none';
                    createBoardOnDOM(document.querySelector('.second-gameboard-container'));
                    document.querySelector('.second-gameboard-container').style.display = 'grid';

                    document.querySelector('.player-turn').textContent = 'Player 2: Place your';
                    currShip.textContent = 'Carrier (length 5)';

                    const playerTwoBoxes = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                    const playerTwoBoxesArray = Array.from(playerTwoBoxes);

                    placeShipListeners(playerTwo, playerTwoBoxesArray, 'C', false, playerOne, playerTwo, human);
                }
                // once both players are finished placing ships, proceed with the game
                else {
                    document.querySelector('.orientation-explanation').remove();
                    document.querySelector('.checkbox-container').remove();
                    document.querySelector('.current-ship').remove();
                    document.querySelector('.gameboard-container').style.display = 'grid';

                    const playerOneBoxes = document.querySelectorAll('.gameboard-container .gameboard-box');
                    const playerOneBoxesArray = Array.from(playerOneBoxes);
                    const playerTwoBoxes = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                    const playerTwoBoxesArray = Array.from(playerTwoBoxes);

                    // add the box listeners to the boards to make the game run
                    addBoxListeners(playerTwo, playerTwoBoxesArray, true, playerOne, playerTwo);
                    addBoxListeners(playerOne, playerOneBoxesArray, false, playerOne, playerTwo);

                    // make the opposing player's board invisible other than hits and misses
                    //displayPlayerBoard(true, playerOne, playerTwo);

                    // disable boxes of player 1 to start off with player 1's turn
                    for (const box of playerOneBoxesArray) {
                        box.style.pointerEvents = 'none';
                    }

                    turnScreen(false, playerOne, playerTwo);
                }
            }
            // once both players are finished placing ships, proceed with the game
            else if (ship === 'D' && !human) {
                document.querySelector('.orientation-explanation').remove();
                document.querySelector('.checkbox-container').remove();
                document.querySelector('.current-ship').remove();

                // create second board
                createBoardOnDOM(document.querySelector('.second-gameboard-container'));
                document.querySelector('.second-gameboard-container').style.display = 'grid';

                placeBotShips(playerTwo);

                let possibleBotAttacks = [];

                let currCoord;
                
                // fill the possibleBotAttacks array with all the coordinates
                for (let i = 65; i <= 74; ++i) {
                    for (let j = 1; j <= 10; ++j) {
                        currCoord = String.fromCharCode(i) + String(j);
                        possibleBotAttacks.push(currCoord);
                    }
                }

                const playerTwoBoxes = document.querySelectorAll('.second-gameboard-container .gameboard-box');
                const playerTwoBoxesArray = Array.from(playerTwoBoxes);

                addBoxListenersBot(playerTwo, playerTwoBoxesArray, true, playerOne, playerTwo, possibleBotAttacks);

                // make the opposing player's board invisible other than hits and misses
                displayPlayerBoard(true, playerOne, playerTwo);

                // disable boxes of player 1 
                for (const box of playerBoxesArray) {
                    box.style.pointerEvents = 'none';
                }
            }
        }
    }
    
    // add event listener to each box
    for (const box of playerBoxesArray) {
        box.addEventListener('click', handleShipPlacement);
    }
}

// this function places the ship on the DOM given the type of ship, the player, and the player's board
function placeShipOnDOM(ship, player, gameboard, coord) {
    const checkbox = document.querySelector("#vertical");

    // if the ship placement is valid, place it and update the board and return true
    if (ship === 'C' && player.placeCarrier(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }
    else if (ship === 'B' && player.placeBattleship(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }
    else if (ship === 'R' && player.placeCruiser(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }
    else if (ship === 'S' && player.placeSubmarine(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }
    else if (ship === 'D' && player.placeDestroyer(coord, checkbox.checked)) {
        updateBoard(player, gameboard);
        return true;
    }

    // if the ship placement is invalid return false
    return false;
}

// this function has the bot randomly place ships on their board
function placeBotShips(player) {
    let possibleBotCoords = [];

    let currCoord;
    
    // fill the possibleBotAttacks array with all the coordinates
    for (let i = 65; i <= 74; ++i) {
        for (let j = 1; j <= 10; ++j) {
            currCoord = String.fromCharCode(i) + String(j);
            possibleBotCoords.push(currCoord);
        }
    }

    let randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)];

    // have the bot try placing its ships at random coordinates until it finds a valid placement for each ship
    while (!player.placeCarrier(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }

    while (!player.placeBattleship(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }

    while (!player.placeCruiser(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }

    while (!player.placeSubmarine(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }

    while (!player.placeDestroyer(randomCoord, Math.random() < 0.5)) {
        randomCoord = possibleBotCoords[Math.floor(Math.random() * possibleBotCoords.length)]
    }
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

    winMessage.style.fontSize = '4rem';

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
    turnDescription.textContent = 'Pass the device to the opposing player! When you are ready for the next turn click the button.';

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

export { createBoardOnDOM, placeShipOnDOM, addBoxListeners, displayPlayerBoard, addBoxListenersBot, placeShipListeners };