//! Minha resolução
const frase1 = () => 'Acordando!!';
const frase2 = () => 'Bora tomar café!!';
const frase3 = () => 'Partiu dormir!!';

const doingThings = (func) => func ();

console.log(doingThings(frase1));
console.log(doingThings(frase2));
console.log(doingThings(frase3));

//! Resolução do course
const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};
doingThings(wakeUp); // Acordando!!
doingThings(breakfast); // Bota tomar café!!
doingThings(sleep); // Partiu dormir!!