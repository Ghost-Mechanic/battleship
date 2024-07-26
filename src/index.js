import './style.css';
import { createBoardOnDOM } from './dom';

let playerOne = createBoardOnDOM(true, document.querySelector('.gameboard-container'));
let playerTwo = createBoardOnDOM(false, document.querySelector('.second-gameboard-container'));