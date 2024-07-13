'use strict';

//Constructer Functions and the new Operator

//constructer function always with capital letter
// const Person = function (firsName, birthYear) {
//   //Instance properties
//   this.firstName = firsName;
//   this.birthYear = birthYear;

//   //NEVER CREATE A METHOD INSIDE A CONSTRUCTOR OBJECT!
//   // this.calcAge = function () {
//   //   console.log(2024 - this.birthYear);
//   // };
// };

// //Jonas is a instance of Person
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// //And matilda and jack are to instance of Person
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(matilda, jack);

// console.log(jonas instanceof Person); //verify if jonas is a instance of Person

// //Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(matilda));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 5, 3, 2, 4]; // [] === new Array
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// console.dir(x => x + 1);

//Challenge 1

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 110);
const ferrari = new Car('Ferrari', 150);

bmw.accelerate();
bmw.brake();

ferrari.accelerate();
ferrari.brake();
ferrari.accelerate();
