'use strict';

//Constructer Functions and the new Operator

//constructer function always with capital letter
const Person = function (firsName, birthYear) {
  //Instance properties
  this.firstName = firsName;
  this.birthYear = birthYear;

  //NEVER CREATE A METHOD INSIDE A CONSTRUCTOR OBJECT!
  // this.calcAge = function () {
  //   console.log(2024 - this.birthYear);
  // };
};

//Jonas is a instance of Person
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//And matilda and jack are to instance of Person
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person); //verify if jonas is a instance of Person

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(matilda));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
