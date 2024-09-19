// Fill in the blanks to complete the exercises.

const lastName = 'ram';
const height = 5.3;
const isStudent = 'Yes';
console.log(lastName, height, isStudent);

let currentCity = 'Brussels';
currentCity = 'Brussels';
console.log(currentCity);

const calculateArea = (length, width) => {
    return length*width
};
console.log(calculateArea(5, 7));

const greetUser = () => {
    console.log(`thanks ${lastName}`)
};
greetUser();

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};
console.log(car.make, car.model, car.year);

car.describe = function () {
    console.log(`This car is a ${this.year} ${this.model} ${this.make}.`);
};
car.describe();

const fruits = ['Apple', 'Banana', 'Orange'];
fruits.push('Pineapple');
console.log(fruits);

// Exercise 8: Array Methods
fruits.forEach((fruit) => console.log(fruit));
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

const moreFruits = [...fruits, 'Cherry', 'Mango'];
console.log(moreFruits);

const sumNumbers = (...args) => args.reduce((sum, num) => sum + num, 0);
console.log(sumNumbers(1, 2, 3, 4, 5));

const { make, model } = car;
console.log(make, model);

const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

setTimeout(() => {
    console.log('Hello');
}, 2 * 1000);

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
