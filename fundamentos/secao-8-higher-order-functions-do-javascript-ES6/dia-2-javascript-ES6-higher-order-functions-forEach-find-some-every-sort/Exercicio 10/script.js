//! Opção de código 1
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
};
console.log(findNameWithFiveLetters());

//! Opção de código 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const verify = (nome) => nome.length === 5;
const result = names.find(verify);
console.log(result);

//! Opção de código 3
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = names.find((nome) => nome.length === 5);
console.log(findNameWithFiveLetters);