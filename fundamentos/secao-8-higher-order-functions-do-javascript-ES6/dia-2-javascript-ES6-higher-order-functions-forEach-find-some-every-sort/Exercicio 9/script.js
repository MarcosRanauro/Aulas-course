//! Opção de código 1
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(findDivisibleBy3And5);

//! Opção de código 2
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verify = (number) => number % 3 === 0 && number % 5 === 0;
const result = numbers.find(verify);
console.log(result);