window.addEventListener("load", console.log("window loaded !"));

let line4 = [];
let nbOfColumn = 7;

let nbOfLine = 6;
let activePlayer = 1;
const tour = document.getElementById('tour');
const message = document.getElementById('message');
const displayJ1 = document.getElementById('j1');
let scoreJ1 = 0;
const affichagej2 = document.getElementById('j2');
let scoreJ2 = 0;
let endGame = false;


/**
 * Initialise un tableau de tableau selon le nb de ligne et column en paramètre
 * @param {Number} nbOfLine 
 * @param {Number} nbOfColumn 
 * @param {*} car 
 * @returns 
 */
const initializeEmptyTab = (nbOfLine, nbOfColumn, car = '') => {

  let array = [];
  for (let i = 0; i < nbOfLine; i++) {
    let line = [];
    let column = [];
    for (let j = 0; j < nbOfColumn; j++) {
      line.push(car);
    }
    array.push(line);
  }
  return array;
}


/**
 * Permet d'afficher un tableau de Puissance 4
 */
const displayLine4 = () => {
  const game = document.getElementById('jeu');
  game.innerHTML = '';
  let content = '<table class="grid">';
  for (let i = 0; i < nbOfLine; i++) {
    content += '<tr class="line">';
    for (let j = 0; j < nbOfColumn; j++) {
      content += '<td class="cell text-center" style="width:90px; height: 90px;">';
      if (line4[i][j] === 0) {
        content += '';
      } else if (line4[i][j] === 1) {
        content += '<img src="./images/token_red.png"></img>';
      }
      if (line4[i][j] === 2) {
        content += '<img src="./images/token_yellow.png"></img>';
      }
      content += '</td>';
    }
    content += '</tr>';
  }
  content += '<tr class="trButtons">';
  for (let k = 0; k < nbOfColumn; k++)
    content += `<td class="tdButtons text-center">
                  <button type="button" class="btn btn-info px-4" onClick="play(${k+1})">Col. ${k+1}</button>
                </td>`;

  content += '</table>';

  jeu.innerHTML = content;

}

/**
 * Permet d'initialiser les players et le line4
 */
const startGame = () => {
  let contentJ1 = '<img src="./images/token_red.png" /><br />';
  contentJ1 += scoreJ1;
  displayJ1.innerHTML = contentJ1;

  let contentJ2 = '<img src="./images/token_yellow.png" /><br />';
  contentJ2 += scoreJ2;
  affichagej2.innerHTML = contentJ2;

  line4 = initializeEmptyTab(nbOfLine, nbOfColumn, 0);
  displayLine4(line4);

  message.classList.add("d-none");
  activePlayer = 1;
  endGame = false;
}

/**
 * Permet de vérifier si une cellule est vide (true ou false)
 * @param {Number} line 
 * @param {Number} column 
 * @returns 
 */
const checkEmptyCell = (line, column) => {
  return line4[line][column - 1] === 0; //true si 0, false si 1 ou 2
};

/**
 * Retourne l'indice de la 1ere ligne vide en fonction de la column choisie
 * @param {Number} column retourne -1 si column pleine
 * @returns 
 */
const returnLineCellEmptyColumn = (column) => {
  for (let i = nbOfLine - 1; i >= 0; i--) {
    if (checkEmptyCell(i, column)) return i;
  }
  return -1;
}

/**
 * Permet de vérifier si 4 jetons d'un player sont alignés sur une ligne
 * @param {Number} player 
 * @returns 
 */
const checkLineEndGame = (player) => {
  for (let i = nbOfLine - 1; i >= 0; i--) {
    for (let j = 0; j < nbOfColumn - 3; j++) {
      if (line4[i][j] === player &&
        line4[i][j + 1] === player &&
        line4[i][j + 2] === player &&
        line4[i][j + 3] === player
      ) return true;
    }
  }
  return false;
}

/**
 * Permet de vérifier si 4 jetons d'un player sont alignés sur une column
 * @param {Number} player 
 * @returns 
 */
const checkColumnEndGame = (player) => {
  for (let i = 0; i < nbOfColumn; i++) {
    for (let j = nbOfLine - 4; j >= 0; j--) {
      if (line4[j][i] === player &&
        line4[j + 1][i] === player &&
        line4[j + 2][i] === player &&
        line4[j + 3][i] === player
      ) return true;
    }
  }
  return false;
}

/**
 * Permet de vérifier si 4 jetons d'un player sont alignés en diagonale
 * @param {Number} player 
 * @returns 
 */
const checkDiagonalEndGame = (player) => {
  for (let i = nbOfLine - 1; i >= 3; i--) {
    for (let j = 0; j < nbOfColumn; j++) {
      //vérif en diag droit
      if (line4[i][j] === player &&
        line4[i - 1][j + 1] === player &&
        line4[i - 2][j + 2] === player &&
        line4[i - 3][j + 3] === player
      ) return true;
      //vérif en diag gauche
      if (line4[i][j] === player &&
        line4[i - 1][j - 1] === player &&
        line4[i - 2][j - 2] === player &&
        line4[i - 3][j - 3] === player
      ) return true;
    }
  }
  return false;
}

/**
 * Vérification des conditions de victoire
 * @param {Number} player 
 * @returns 
 */
const checkWinConditions = (player) => {
  if (checkLineEndGame(player) || checkColumnEndGame(player) || checkDiagonalEndGame(player)) {
    return true;
  }
  return false;
}

/**
 * Permet de gérer le blocage des pions en fin de partie + message de victoire
 * @param {Number} activePlayer 
 */
const manageEndGame = (activePlayer) => {
  endGame = true;
  message.classList.remove("d-none");
  let contentAlert = `Bien joué player ${activePlayer} ! Vous avez remporté la partie !<br />`;
  contentAlert += '<button type="button" class="btn btn-warning" onClick=startGame()>Recommencer</button>';
  message.innerHTML = contentAlert;
  if (activePlayer === 1) {
    scoreJ1++;
  } else {
    scoreJ2++;
  }
}


/**
 * Gestion des tours
 * @param {Number} column 
 * @returns 
 */
const play = (column) => {

  if (!endGame) {
    emptyLine = returnLineCellEmptyColumn(column);
    if (emptyLine != -1) {
      line4[emptyLine][column - 1] = activePlayer;
      displayLine4(line4);
    }

    if (checkWinConditions(activePlayer)) manageEndGame(activePlayer);

    if (activePlayer === 1) {
      activePlayer = 2;
      tour.innerHTML = `Tour du player ${activePlayer}`;
    } else {
      activePlayer = 1;
      tour.innerHTML = `Tour du player ${activePlayer}`;
    }
  }

}

startGame();

// let btn = document.querySelectorAll('.btn');
// for(let i = 0; i < btn.length; i++) {
//   console.log(btn);
//   btn[i].addEventListener('click', play(i));
//};