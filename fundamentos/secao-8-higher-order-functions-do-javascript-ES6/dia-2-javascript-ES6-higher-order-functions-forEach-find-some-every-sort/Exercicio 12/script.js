const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

const grades = {
    portugues: 'Aprovado',
    matematica: 'Aprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
 return arr.some((currentName) => currentName === name);
};
console.log(hasName(names, 'Ana'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 19 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  const verifyAges = (arr, minimumAge) => {
    return arr.every((max) => max.age >= minimumAge);
  };
  
  console.log(verifyAges(people, 18));