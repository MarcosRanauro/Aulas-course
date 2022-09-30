document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.getElementById("elementoOndeVoceEsta").firstElementChild.innerHTML = "Lorem Ipsum is simply dummy text ofdsfsdfsdf thr";

// Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").firstElementChild.innerHTML = "lalalalalala";

// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").previousElementSibling.style.backgroundColor = "blue";

// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta").nextSibling;

// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextElementSibling.innerHTML = "lelelele";

// // Agora acesse o terceiroFilho a partir de pai.