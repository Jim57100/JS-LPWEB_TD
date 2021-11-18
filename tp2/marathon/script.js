
//1.1. Ajout d'un article

let body = document.body;
let h2 = document.createElement('h2');
let p = document.createElement('p');

p.textContent = "Il est interdit de vous doubler, sous peine de disqualification."
h2.textContent = "Article 0 - restrictions";

body.prepend(p);
body.prepend(h2);

//1.2 modification du css


// a. 


// b.
let titles = document.getElementsByTagName('h2');

for(let i = 0 ; i < titles.length; i++) {
  titles[i].style.textTransform = 'uppercase';
}

//1.3 Numérotation des titres

for(let i = 0 ; i < titles.length; i++) {

  let words = titles[i].textContent.split(' '); //type : object
  
  //on transforme en integer
  let wordInt = parseInt(words[1]);
  console.log(wordInt);
  console.log(`type of wordInt: ${typeof(wordInt)}`);
  words[1] = ++wordInt;

  //on change les valeurs
  titles[i].textContent = words.join(' ');
  
}


// 1.4 Couleur de fond 1 article sur 2
for(let i = 0 ; i < titles.length; i++) {
  
  if( i % 2-1 == 0) {
    titles[i].style.backgroundColor = "cyan"; 
  }

}

// 1.5