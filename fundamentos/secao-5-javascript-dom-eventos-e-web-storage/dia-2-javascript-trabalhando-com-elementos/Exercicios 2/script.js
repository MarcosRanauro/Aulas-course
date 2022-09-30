// Crie um irmão para elementoOndeVoceEsta.
let capturandoPai = document.getElementById("pai");
let criandoIrmao = document.createElement("section");
criandoIrmao.innerHTML = "Criei um irmão para o elementoOndeVoceEsta";
capturandoPai.appendChild(criandoIrmao);

// Crie um filho para elementoOndeVoceEsta.
let capturandoOndeEsta = document.getElementById("elementoOndeVoceEsta");
let criandoFilho = document.createElement("section");
criandoFilho.innerHTML = "Criei o primeiro filho";
capturandoOndeEsta.appendChild(criandoFilho);

// Crie um filho para primeiroFilhoDoFilho.
let capturandoFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
let criandoFilhoDoFilho = document.createElement("section");
criandoFilhoDoFilho.innerHTML = "Criei o filho do primeiroFilhoDoFilho";
criandoFilhoDoFilho.id = "filho";
capturandoFilhoDoFilho.appendChild(criandoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.
document.getElementById("terceiroFilho").innerHTML = "sou o terceiro Filho";
let terceiroFilho = criandoFilhoDoFilho
terceiroFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);

