
const readline = require('../readline/node_modules/readline-sync');
/**
 * LES TYPES
 * @param {Number} a 
 * @returns 
 */

/****** 2.1 ******/

/*
const type = a => {
  console.log(`${a} de type : ${typeof(a)}`) ;
}

const quelsTypes = () => {
  console.log('====\n 2.1/2.2 types et déclarations) \n====');

  let x;
  console.log(type(x));
  x = 'blabla';
  console.log(type(x));
  x = "blabla";
  console.log(type(x));
  x = `blabla ${x}`;
  console.log(type(x));
  x = 9;
  console.log(type(x));
  x = 2.5;
  console.log(type(x));
  x = true;
  console.log(type(x));
  x = undefined;
  console.log(type(x));
  x = null;
  console.log(type(x));
  x = [1,2,3];
  console.log(type(x));
  x = new Array();
  console.log(type(x));
  x = {};
  console.log(type(x));
  x = {
    "promo":"lpwmce", 
    "nb":25};
  console.log(type(x));
  x = new Date();
  console.log(type(x));
  x = () => alert('toto');
  console.log(type(x));
  x = 42n;
  console.log(type(x));


  var c = 42;
  console.log(type(c));


}
quelsTypes();


console.log("/===== 2.3 Déclarations =====/");

let carac = 'abc';
let entier = 42;
let reel = 4.2;

console.log(typeof(entier.toString()));
console.log(typeof(reel.toString()));
console.log(typeof(parseInt(carac)));
console.log(typeof(parseInt(reel)));

console.log(typeof(Number.parseInt(carac)));

console.log('Math floor  "abc"' + Math.floor(carac));
console.log('Math ceil "abc"' + Math.ceil(carac));
console.log('Number "abc"' + Number(carac));

console.log('Math floor ' + Math.floor(reel));
console.log('Math ceil ' + Math.ceil(reel));
console.log('Number ' + Number(reel));
*/

/****** 2.4 ******/

/*
const egalite = () => {

  console.log('/==== 2.4 Egalité ====/');

  let b=false;
  let n=0;
  let s='0';
  let tab = [];
  let o = {};

  const compare = (y, z) => {
    console.log(y == z);
    console.log(y === z);
  }

  compare(b,n);
  compare(n,s);
  compare(s,tab);
  compare(tab,0);
}

*/




/**
 * 4. LES TABLEAUX ET FONCTIONS
 */

/****** 4.1 ******/

//Algo

/*
const tab = [5,10,15,20,25];
let result = 0;

for(let i = 0; i <= tab.length-1; i++) {
  result += tab[i];
}
console.log(result);
*/

//Fonctionnelle

/*
const arraySum = () => {
  const tab = [5,10,15,20,25];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return tab.reduce(reducer);
}
console.log(arraySum());
*/

/****** 4.2 ******/

//Algo

/*
const tab = [5,10,15,20,25];
let count = 0;

for(let i = 0; i <= tab.length-1; i++) {
  if(tab[i] % 2 === 0) {
    count++;
  }
}
console.log(count);
*/

//Fonctionnelle

/*
const tab = [5,10,15,20,25];

const tab2 = (tab.filter( elt => elt % 2 === 0)).length;

console.log(tab2);
*/

/****** 4.3 ******/

//Algo

/*
const tab1 = [10,20,30];
const tab2 = [40,50,60];
let tab3 = [];

tab3.push(...tab1);
tab3.push(...tab2);
console.log(tab3);
*/

//Fonctionnelle

/*
const tab1 = [1,2,3];
const tab2 = [4,5,6];

const tab3 = tab1.concat(tab2);
console.log(tab3);
*/

/****** 4.4 ******/

//Algo

/*
const tab = [10,22,36,44,55,67,71,87,94,102,112,129,130,131];
const ElementToFind = 132;
let find = false;
let begin = 0;
let end = tab.length-1;
let middle = (begin + end)/2;

const seek = (elmt, tab) => {
  //TANTQUE indice de début <= indice de fin
  while (begin <= end) {
    
    //console.log(`middle : ${middle}`);
    //SI valeur de l'indice du milieu = element cherché ALORS find = true
    if(tab[middle] === elmt) {
      find = true;
      break; // On sort de la boucle
      
    } else {
      //SI valeur du milieu de tab > element cherché ALORS indice de fin devient indice de milieu-1 (on se décalle dans la moitié supérieur) 
      if(tab[middle] > elmt) {
        end = Math.round(middle-1);
        //console.log(`end : ${end}`);
        //console.log(`tab end value : ${tab[end]}`);
      
      //SINON valeur du milieu < element cherché ALORS indice de début devient indice de milieu+1 (on se décalle dans la moitié inférieur) 
      } else {
        begin = Math.round(middle+1);
        //console.log(`begin : ${begin}`);
        //console.log(`tab begin value : ${tab[begin]}`);
      }
      
    } //FINSI
    
    //On redefini l'indice du milieu selon le nouvel indice de début ou de fin
    middle = Math.round((begin + end)/2);
    //console.log(`middle end loop : ${middle}`);
  } //FIN TANTQUE

  //SI find === true ALORS trouvé SINON pas trouvé
  if(find === true) {
    return (`L'indice de l'element recherche est ${middle}`);
  } else {
    return (`L'indice est introuvable`);
  }

}
console.log(seek(ElementToFind, tab));
*/

//Fonctionnelle

/*
const tab = [10,22,36,44,55,67,71,87,94,102,112,129,130];
const ElementToFind = 112;

const seek = (elmt, tab) => {
  return `L'indice de l'element recherche est ${tab.indexOf(elmt)}`;
}
console.log(seek(ElementToFind, tab));
*/

/****** 4.5 ******/

//Algo

/*
const biggestEven = (...elmts) => {

  let find = 0;
  let current;

  for(let i = 0; i < elmts.length; i++) {
   
    current = elmts[i];
    
    if(current > find && elmts[i] %2 === 0) {
   
      find = elmts[i];
   
    }  
  }
return find;
}

console.log(biggestEven(1,578,546,357,85412,86547));
*/

//Fonctionnelle

/*
const biggestEven = (...elmts) => Math.max(...elmts.filter(elmt => elmt % 2 === 0));

console.log(biggestEven(1,578,546,357,85412,86547));
*/

/****** 4.6 ******/

//Algo

/*
const paragraph = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog','.', 'If', 'the', 'dog', 'barked', ',', 'was', 'it', 'really', 'lazy','?'];

const countOccurence = (array) => {
  
  let count = {};
  
  for(i = 0 ; i < array.length; i++) {
    if (count[array[i]] === array[i]) {

    }
    count[array[i]] = (count[array[i]] || 0) + 1 ;
  }

  return count;
}
console.log(countOccurence(paragraph));
*/

// Fonctionnelle

/*
const paragraph = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog','.', 'If', 'the', 'dog', 'barked', ',', 'was', 'it', 'really', 'lazy','?'];


const countOccurrences = (arr) => {
  return arr.reduce( (count, elmt) => {
    count[elmt] = count[elmt] + 0 || 1;
    return count;
  }, {});
}
console.log(countOccurrences(paragraph));
*/