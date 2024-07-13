'use strict';

//Constructer Functions and the new Operator

//constructer function always with capital letter
const Person = function (firsName, birthYear) {
  //Instance properties
  this.firsName = firsName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2024 - this.birthYear);
  };
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
