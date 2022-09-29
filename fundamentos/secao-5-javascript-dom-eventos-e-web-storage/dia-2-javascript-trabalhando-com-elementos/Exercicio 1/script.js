document.querySelectorAll("#pai")[0].style.color = "red"
document.querySelectorAll("#primeiroFilhoDoFilho")[0].innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").firstChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextSibling

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.