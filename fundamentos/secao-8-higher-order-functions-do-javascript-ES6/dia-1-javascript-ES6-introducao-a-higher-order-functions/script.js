const frase1 = () => 'Acordando!!';
const frase2 = () => 'Bora tomar café!!';
const frase3 = () => 'Partiu dormir!!';

const doingThings = (func) => func ();

console.log(doingThings(frase1));
console.log(doingThings(frase2));
console.log(doingThings(frase3));
