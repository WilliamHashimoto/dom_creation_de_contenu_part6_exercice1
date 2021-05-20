//1
let div = document.querySelector('#content');
let h2 = document.createElement('h2');
div.appendChild(h2)
h2.innerText = "Part 6 - Exercice 1"

//2
let p = document.createElement('p');
p.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos minima voluptatem aperiam cupiditate, expedita amet.";

// div.appendChild(p);

div.insertBefore(p, h2.nextSibling);

//3
let h1 = document.createElement('h1');
h1.innerText = "Le DOM - Création de HTML";
div.insertBefore(h1, div.firstChild);

//4
let divSec = document.querySelector('#secondaire');

divSec.innerHTML = div.innerHTML;

let divSecH2 = divSec.querySelector('h2');

divSecH2.innerText = "Exercice 2";

//5
let div3 = document.createElement('div');
div3.setAttribute("id", "matiere")
div.parentNode.insertBefore(div3, divSec.nextSibling);

let ul = document.createElement('ul');

let li;

for (let i = 0; i < 3; i++) {
    li = document.createElement('li');
    ul.appendChild(li)
}

div3.appendChild(ul);

let li1 = document.querySelector("li");
let li2 = document.querySelectorAll("li")[1];
let li3 = document.querySelectorAll("li")[2];

li1.innerText = "La manipulation d'elements"
li2.innerText = "La creation d'elements"
li3.innerText = "L'ajout d'evenement"