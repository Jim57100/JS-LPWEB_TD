
export class MorpionComplet {

  static #MAX_GRILLE = 8;
  static #MIN_GRILLE = 3;
  #grille;
  #taille;

  constructor(taille) {
    this.#taille = taille; //3 number
    if (Number.isNaN(this.#taille) || this.#taille < MorpionComplet.#MIN_GRILLE || this.#taille > MorpionComplet.#MAX_GRILLE) {
      throw new Error('Taille invalide');
    } else {
      this.#grille = new Array(this.#taille);
      // console.log('grille ' + this.#grille);
      for (let i = 0; i < this.#taille; i++) {
        this.#grille[i] = new Array(this.#taille);
        // console.log('grille[i] ' + this.#grille);
        for (let j = 0; j < this.#taille; j++) {
          this.#grille[i][j] = ' ';
        }
      }
    }
  }

  getGrille() {
    return this.#grille;
  }

  getTaille() {
    return this.#taille;
  }

  setCell(symbole, y, x) {
    if(this.#grille[y][x] !== ' ') {
      return false;
    } else {
      this.#grille[y][x] = symbole;
      return true;
    }
  }
  
  changerJoueur(symbole) {
    if (symbole === 'x') {
      return {
        symbole: 'o',
        joueur: 2
      };
    } else {
      return {
        symbole: 'x',
        joueur: 1
      };
    }
  }

  matchNul(nbCoups) {
    if (nbCoups === (this.#taille * this.#taille)) {
      
      return true;
    }
  }

   aGagne(symbole, y, x) {
    
    let nbSymboles;

    // gagné en ligne ?
    const ligne = y;
    nbSymboles = 0;
    for (let col = 0; col < this.#taille; col++) {
      if (this.#grille[ligne][col] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this.#taille) {
      return true;
    }

    // gagné en colonne ?
    const col = x;
    nbSymboles = 0;
    for (let ligne = 0; ligne < this.#taille; ligne++) {
      if (this.#grille[ligne][col] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this.#taille) {
      return true;
    }

    // gagné diagonale
    if (x === y) {
      nbSymboles = 0;
      for (let lc = 0; lc < this.#taille; lc++) {
        if (this.#grille[lc][lc] === symbole) {
          nbSymboles++;
        }
      }
      if (nbSymboles === this.#taille) {
        return true;
      }
    }

    // gagné diag inverse
    if (x === this.#taille - (y + 1)) {
      nbSymboles = 0;
      for (let ligne = 0; ligne < this.#taille; ligne++) {
        if (this.#grille[ligne][this.#taille - (ligne + 1)] === symbole) {
          nbSymboles++;
        }
      }
      if (nbSymboles === this.#taille) {
        return true;
      }
    }

    return false;
  }

}