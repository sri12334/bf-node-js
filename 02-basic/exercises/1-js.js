// Fill in the blanks to complete the exercises.

const lastName = '____';
const height = ____;
const isStudent = ____;
console.log(____, ____, ____);

let currentCity = '____';
currentCity = '____';
console.log(____);

const calculateArea = (length, width) => ____;
console.log(calculateArea(____, ____));

const greetUser = () => ____;
greetUser();

const car = {
    make: '____',
    model: '____',
    year: ____
};
console.log(____, ____, ____);

car.describe = function () {
    console.log(`This car is a ${____} ${____} ${____}.`);
};
car.describe();

const fruits = ['____', '____', '____'];
fruits.push('____');
console.log(____);

// Exercise 8: Array Methods
fruits.forEach((fruit) => ____);
const upperFruits = fruits.map((fruit) => ____);
console.log(____);

const moreFruits = [____, '____', '____'];
console.log(____);

const sumNumbers = (...args) => args.reduce((sum, num) => ____, 0);
console.log(sumNumbers(____, ____, ____, ____, ____));

const { make, model } = car;
console.log(____, ____);

const [firstFruit, secondFruit] = fruits;
console.log(____, ____);

setTimeout(() => {
    console.log('____');
}, ____);

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, ____);
