let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  }
  for (let index in names){
    console.log("Olá " + names[index]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }
  for (let index in car){
    console.log(index, car[index]);
  }

  let cars = ['Saab', 'Volvo', 'BMW'];

  for (let index in cars) {
    console.log(cars[index]);
}

let car2 = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  }
  
  for (let index in car2) {
    console.log(index, car2[index]);
  }

  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let position in food) {
    console.log(position);
  }

  let food2 = ['hamburguer', 'bife', 'acarajé'];
  for (let position in food2) {
    console.log(food2[position]);
  }

  let food3 = ['hamburguer', 'bife', 'acarajé'];
for (let value of food3) {
  console.log(value);
}