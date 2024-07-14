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

// const Car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`'${this.make}' going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 110);
// const ferrari = new Car('Ferrari', 150);

// bmw.accelerate();
// bmw.brake();

// ferrari.accelerate();
// ferrari.brake();
// ferrari.accelerate();

//ES6 Classes
//Classes in javascript are still functions
// class expression
// const PersonCL = class{}

// declaration
// class PersonCl {
//   //the name needs to be constructor!
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //the methos will be stored in the prototype
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   //SET A PROPRETY THAT ALREADY EXIST
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     // to define a proprety that is defined in constructor we put a _ before the name
//     else alert(`${name} is not a full name!`);
//   }

//   // to set the _fullName name again to fullName
//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davies', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ == PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter', 1965);

// // GETTER AND SETTER
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 400;
// console.log(account.movements);

//Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// steven.init('Steven', 1998);
// console.log(steven);
// steven.calcAge();

//Challenge #2

class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }

  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new CarCl('BMW', 110);
const ferrari = new CarCl('Ferrari', 150);
const tesla = new CarCl('Tesla', 100);

tesla.accelerate();
tesla.brake();

tesla.speedUs;
tesla.speedUs = 65;

console.log(tesla);

bmw.accelerate();
bmw.brake();

ferrari.accelerate();
ferrari.brake();
ferrari.accelerate();
