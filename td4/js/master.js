import {MorpionComplet} from './modules/MorpionComplet.js';
import {MorpionSimple} from './modules/MorpionSimple.js';

/**
 * MAIN
 */
let joueur = 1;
let symbole = 'x';
let scores = [0, 0];
let nbCoups = 0;
let morpion;
let modeJeu;
let taille;
const zoneMessage = document.getElementById('messages');
const btnReset = document.getElementById('btn_reset');


const desactiveEcouteurs = () => {
  for (let i = 0; i < taille; i++) {
    for (let j = 0; j < taille; j++) {
      document.getElementById('' + ((i + 1) * 10 + (j + 1))).disabled = true;
    }
  }
  
  btnReset.disabled = false;

}


const affichageGrille = () => {

  taille = Number.parseInt(document.getElementById('taille').value);  // 3
  modeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';

  try {
    const table = document.getElementById('table_morpion');
    
    for (let l = table.rows.length - 1; l >= 0; l--) {
      table.deleteRow(l);
    }

    switch(modeJeu) {
      case 'simple':
        morpion = new MorpionSimple(taille);
        break;
      case 'complet':
        morpion = new MorpionComplet(taille);
        break;
      default:
        morpion = new MorpionComplet(taille);
        break;
      }
   

    for (let i = 0; i < taille; i++) {
      const ligne = table.insertRow(i);
      for (let j = 0; j < taille; j++) {
        const id = '' + ((i + 1) * 10 + (j + 1));
        const cell = ligne.insertCell(j);
        cell.innerHTML = "<input type='button' class='case' id='" + id + "'/>";
        cell.firstChild.addEventListener("click", function click() {clicBouton(cell.firstChild, i, j)});
        document.getElementById(id).value = '';
      }
    }

    zoneMessage.innerHTML = 'Joueur 1, à toi !';
    document.getElementById('btn_reset').disabled = true;

  } catch (error) {
    zoneMessage.innerHTML = error;
  }

}

const clicBouton = (uneCase, y, x) => {

  if(morpion.setCell(symbole, y, x)) {

    uneCase.value = symbole;
    uneCase.classList.add('joueur' + joueur); //[affichage]
    nbCoups++;
  } 

  let victoire;

  if(modeJeu === 'simple') {
   victoire = morpion.aGagne3ParmiN(symbole, y, x);
  } else if (modeJeu === 'complet') {
    victoire = morpion.aGagne(symbole, y, x);
  }
  const displayScore = document.getElementById('score');

  if (victoire) {

    zoneMessage.innerHTML = 'Le joueur ' + joueur + ' a gagné !';
    desactiveEcouteurs();
    symbole === 'x' ? scores[0]++ : scores[1]++;
    displayScore.innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];

  } else if (morpion.matchNul(nbCoups)) {
    zoneMessage.innerHTML = 'Match nul !';
    desactiveEcouteurs();

  } else {
    // morpion.changerJoueur(symbole);
    let values = morpion.changerJoueur(symbole);
    symbole = values.symbole;
    joueur = values.joueur;
    zoneMessage.innerHTML = 'Joueur ' + joueur + ', à toi de jouer !';
  }

}

btnReset.addEventListener('click', affichageGrille()); 
//console.log(btnReset.addEventListener('click', affichageGrille));


    