
import {
  getSum,
  getNumberOfEven,
  getMaxEven,
  binarySearch
} from "./modules/array_utils.js";

window.addEventListener('load', console.log('ready !'));

/**
 * Ajoute un nouvel élément à saisir
 * @param {MouseEventParams} e 
 */
const addNewElement = (e) => {
  e.preventDefault();

  //Variables
  const liToClone = document.querySelector('.element');
  let newLi = liToClone.cloneNode(true);
  const btn = liToClone.querySelector('.clone');

  //Je désactive la classe et le bouton et le style list
  liToClone.classList.remove('element');
  btn.parentNode.removeChild(btn);
  liToClone.style.listStyleType = 'none';

  //J'insère l'élément input avant la balise soeur descendant de l'input à dupliquer
  liToClone.parentNode.insertBefore(newLi, liToClone.nextSibling);

  //Je boucle sur le tableau des enfants du parent et change le numéro du nom correspondant
  for (let i = 0; i < liToClone.parentNode.childNodes.length - 1; i++) {
    newLi.querySelector('label').textContent = 'Element ' + i;
    newLi.style.listStyleType = 'none';
  }

  //Je m'assure que le nouvel input est vide
  newLi.querySelector('input').value = '';

  //Je fais un callback de la fonction sur le nouvel input pour activer son bouton
  newLi.querySelector('.clone').addEventListener('click', addNewElement);
}
document.querySelector('.clone').addEventListener('click', addNewElement);



/**
 * Insertion d'un message dans le DOM
 * @param {String} sms 
 */
const message = (sms) => {
  const p = document.createElement('p');
  p.style.color = 'red';
  p.textContent = sms;
  document.querySelector('#content1').appendChild(p);
}

const verfication = (tabNumbers, numberToSeek, elements, inputs) => {

  inputs.forEach(input => {
    let value = input.value;
    if (value === '' || isNaN(value) || value.match(/\D/)) {
    
      const sms = 'Veuillez renseigner tous les champs avec un caractère numérique';
      message(sms);
      document.getElementById('sum').textContent = "Somme des éléments :";
      document.getElementById('even').textContent = "Nombre de pairs : ";
      document.getElementById('maxEven').textContent = "Plus grands éléments pairs :  ";
      document.getElementById('position').textContent = "Position de l'élément dans la table : ";
    } else {
      tabNumbers.push(parseInt(value));
    }
    
  })

  if(getMaxEven(tabNumbers) % 2 !== 0){
    document.querySelector('#maxEven').innerHTML = 'Plus grands éléments pairs : Pas de pairs';
  } else {
    document.querySelector('#maxEven').innerHTML = `Plus grands éléments pairs : ${getMaxEven(tabNumbers)}`;
  }

  if (!tabNumbers.includes(numberToSeek)) {
    const sms = 'L\'élément à rechercher n`est pas compris dans la liste des éléments';
    message(sms);

  }
  
  if (elements.length === 1) {
    const sms = 'Il n\'y a pas assez d\'éléments pour cette recherche';
    message(sms);
  }
}

/**
 * Envoi des résultats
 */

const results = () => {

  //Variables
  let tabNumbers = [];
  const elmtToSeek = document.querySelector('#elmtToSeek');
  const inputs = document.querySelectorAll('.input');
  const elements = document.querySelectorAll('.input');
  let numberToSeek = parseInt(elmtToSeek.value);
  

verfication(tabNumbers, numberToSeek, elements, inputs);

  document.querySelector('#sum').innerHTML = `Somme des éléments : ${getSum(tabNumbers)}`;
  document.querySelector('#even').innerHTML= `Nombre de pairs : ${getNumberOfEven(tabNumbers)}`;
  document.querySelector('#position').innerHTML = `Position de l'élément dans la table : ${binarySearch(tabNumbers, numberToSeek)}`;


}
document.querySelector('#btnResult').addEventListener('click', results);