import {
  getSum,
  getNumberOfEven,
  getMaxEven,
} from "./modules/array_utils.js";


let arrayNum = [];

do {
  const saisie = parseInt(window.prompt("Quel chiffres souhaitez-vous ? : "));
  arrayNum.push(saisie);
  if (!saisie) {
    console.log(`Somme des éléments : `);
    console.log(`Nombre de pairs : `);
    console.log(`Plus grands élément pair : `);
    break;
  }

} while (arrayNum.length <= 4);


console.log(`Somme des éléments : ${getSum(arrayNum)}`);
console.log(`Nombre de pairs : ${getNumberOfEven(arrayNum)}`);
console.log(`Plus grands élément pair : ${getMaxEven(arrayNum)}`);