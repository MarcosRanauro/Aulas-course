// Primeira Tech
let pegandoQuadrado1 = document.getElementById("input1");
let quadrado1 = document.getElementById("first-li");

function textoQuadrado1() {
    quadrado1.innerHTML = pegandoQuadrado1.value;
    quadrado1.style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg')";
}
pegandoQuadrado1.addEventListener("keyup", textoQuadrado1);

// Segunda tech
let pegandoQuadrado2 = document.getElementById("input2");
let quadrado2 = document.getElementById("second-li");
function textoQuadrado2(){
    quadrado2.innerHTML = pegandoQuadrado2.value;
    quadrado2.style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg')";
}

pegandoQuadrado2.addEventListener("keyup", textoQuadrado2);

// Terceira tech
let pegandoQuadrado3 = document.getElementById("input3");
let quadrado3 = document.getElementById("third-li");
function textoQuadrado3 (){
    quadrado3.innerHTML = pegandoQuadrado3.value;
    quadrado3.style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg')";
}
pegandoQuadrado3.addEventListener("keyup", textoQuadrado3);