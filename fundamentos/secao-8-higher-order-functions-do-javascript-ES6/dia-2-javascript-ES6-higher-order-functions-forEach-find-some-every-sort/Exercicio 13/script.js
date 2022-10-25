const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

//! Ordenação crescente
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

//! Ordenação decrescente
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort((a, b) => b - a);
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

//! Ordenando pelo elemento age que é um número - crescente.
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  people.sort((a, b) => a.age - b.age);  
  console.log(people);

  //! Ordenando pelo elemento age que é um número - decrescente.
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  people.sort((a, b) => b.age - a.age);  
  console.log(people);

  //! Ordenando pelo elemento name que é uma string - crescente.
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  people.sort((a, b) => a.name > b.name ? 1 : -1);  
  console.log(people);

  //! Ordenando pelo elemento name que é uma string - crescente.
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  people.sort((a, b) => b.name > a.name ? 1 : -1);  
  console.log(people);