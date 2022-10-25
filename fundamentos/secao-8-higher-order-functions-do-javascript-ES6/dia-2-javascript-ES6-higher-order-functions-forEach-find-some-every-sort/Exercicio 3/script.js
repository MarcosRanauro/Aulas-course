const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

const meuArray = [2, 5, 7, 8, 9, 3, 35, 33]
meuArray.forEach((elemento, position, array) => {
    if (elemento % 2 === 0) {
      console.log(`${elemento} é divisível por 2!`);
      console.log(`E sua posição é ${position}`);
      console.log(`Esse foi o array percorrido: ${array}`);
    }
  });