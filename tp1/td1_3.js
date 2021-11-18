const readline = require('../readline/node_modules/readline-sync');

/**
 * 3. LES CHAINES
 */

/****** 3.1 ******/
console.log('/****** 3.1 ******/');

const toUpper = () => {
  do {
    a = readline.question('Entrer une chaine de caracteres en majuscule ! ');
  } while (a.toUpperCase() !== a)
  console.log('bien joué !');
}

toUpper();


/****** 3.2 NE FONCTIONNE PAS ******/
console.log('/****** 3.2 Get random STRING ******/');


const generateStr = () => {
  let chainString;
  let count = 0;

  do {
    chainString = '';
    for (let i = 0; i < 5; i++) {
      chainString += String.fromCharCode(65 + Math.random() * (123 - 65));
    }
    console.log(chainString);
    count++;
  } while (chainString.toUpperCase() !== chainString || !isAlphabetic(chainString));

  console.log(count);
  return chainString;
}

const isAlphabetic = (chainString) => {

  const codeZ = 'Z'.charCodeAt(0); //valeur decimale de Z (= 90)
  const codeA = 'a'.charCodeAt(0); //valeur decimale de a (= 97)
  let ok = true;
  let i = 0;
  while (i < chainString.length && ok) { //parcours chaque lettre du mot && ok = true;
    ok = !(chainString.charCodeAt(i) > codeZ && chainString.charCodeAt(i) < codeA); // ok = false TANT QUE le code de la lettre en cours est compris entre 90 et 97 (codes des caractères spéciaux).
    i++;
  }
  return ok; //retourne true ou false.

}
generateStr();

/****** 3.3 ******/

let randomVoy = () => {
  console.log('/**** 3.3 Voyelles ****/')
  const tabVoyelle = ['a', 'e', 'i', 'o', 'u'];
  let randomString = '';

  for (let i = 0; i < tabVoyelle.length; i++) {
    let aleaPos = Math.floor(Math.random() * tabVoyelle.length);
    randomString += tabVoyelle[aleaPos];
  }

  return randomString;
}

console.log(randomVoy());


/****** 3.4 ******/
console.log('/**** 3.4 Nom et Prénom ****/')

let name = readline.question('Quel est votre nom ?');
let firstName = readline.question('Quel est votre prenom ?');

const nameToUpper = (n) => {
  const nameToUpper = n.toUpperCase(); //SALICE
  return nameToUpper;
}

const firstNameToUpper = (fn) => {

  if (fn.includes('-')) {

    const a = fn.substring(0, fn.indexOf('-')); //jean
    const a1 = a.replace(a.charAt(0), a.charAt(0).toUpperCase()); //Jean

    const b = fn.substring(fn.indexOf('-') + 1); //michael
    const b1 = b.replace(b.charAt(0), b.charAt(0).toUpperCase()); //Michael

    return fnToUpper = `${a1}-${b1}`;

  } else {

    const c = fn.replace(fn.charAt(0), fn.charAt(0).toUpperCase());

    return fnToUpper = c;
  }

}

console.log(`Bonjour ${firstNameToUpper(firstName)} ${nameToUpper(name)}`);


/****** 3.5 ******/


const saisie2 = readline.question('Quel est votre message secret ?');

const crypt = a => {

  let saisieToLower = a.toLowerCase();
  let seek = ['a', 'e', 'g', 'i', 'o', 's', 'z'];
  let replace = [4, 3, 6, 1, 0, 5, 2];

  for (let i = 0; i < seek.length; i++) {
    saisieToLower = saisieToLower.split(seek[i]).join(replace[i]);
  }

  console.log(saisieToLower);
}

crypt(saisie2);


/****** 3.6 ******/


let saisie3 = readline.questionInt('Quel est le chiffre max ?');

const jazzBundle = a => {

  for (let i = 1; i <= a; i++) {
    let mod3 = i % 3 === 0;
    let mod5 = i % 5 === 0;
    if (mod3 && mod5) {
      console.log(`${i} : Jazz Bundle`);
    } else if (mod3) {
      console.log(`${i} : Jazz`);
    } else if (mod5) {
      console.log(`${i} : Bundle`);
    } else {
      console.log(`${i} : non divisible par 3, 5 ou les deux`);
    }
  }
}

jazzBundle(saisie3);

const jazzBundleV2 = a => {
  for (let i = 1; i <= a; i++) {
    let str = '';
    let mod3 = i % 3 === 0;
    let mod5 = i % 5 === 0;

    if (mod3 || mod5) {
      if (mod3) {
        str = "Jazz";
      }
      if (mod5) {
        str += "Bundle";
      } else {
        str = i;
      }
      console.log(str);
    }
  }
}
jazzBundleV2(saisie3);