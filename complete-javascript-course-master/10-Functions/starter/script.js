'use strict';

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 WAY
  /* numPassengers = numPassengers || 1;
  price = price || 199; */

/*   const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
 */
/* createBooking('LH123');
 */
//Se quisermos deixar um param com o valor default e alterar um a frente podemos utilizar esta forma:
/* createBooking('LH123', undefined, 1000); */ //desta forma ele vai ver o undefined como sendo um valor que não foi colocado e fica com o valor default! */

/* const flight = 'LH234';

const tiago = {
  name: 'Tiago Sanina',
  passport: 323232323223,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 323232323223) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

/* checkIn(flight, tiago);
console.log(flight);
console.log(tiago); */

/* const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(tiago);
checkIn(flight, tiago); */

//Functions Accepting Callback Functions

/* const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order Function because have a function as a param
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`); //Its here, where we call the function not in the params
  console.log(`Transformd by: ${fn.name}`); //The name of the function used!
};

transformer('JavaScript is the best!', upperFirstWord); //Callback functions
transformer('JavaScript is the best!', oneWord); //Callback functions
//We dont call callback functions we tell to javascript to call them when the functions is needed

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖖');
};

document.body.addEventListener('click', high5);

['Jonas', 'Marta', 'Tiago'].forEach(high5);  */

//Example

/* const chestTrain = function (arr) {
  console.log('Train of Chest and Triceps 🦾');
  for (const [exercise, weight] of arr) {
    console.log(`${exercise}: ${weight}kg`);
  }
};

const backTrain = function (arr) {
  console.log('Train of Back and Biceps 🏋️');
  for (const [exercise, weight] of arr) {
    console.log(`${exercise}: ${weight}kg`);
  }
};

const legs = function (arr) {
  console.log('Train of Leg 🦵');
  for (const [exercise, weight = '0'] of arr) {
    console.log(`${exercise}: ${weight}kg`);
  }
};

const train = function (arr, train) {
  train(arr);
  console.log('Thank you for use Train app');
  console.log('-'.repeat(30));
};

train(
  [
    ['supino', 20],
    ['tricep frances', 10],
  ],
  chestTrain
);

train(
  [
    ['puxada vertical', 50],
    ['bicep martelo', 12],
  ],
  backTrain
);
train(
  [
    ['leg press', 200],
    ['agachamento', undefined],
  ],
  legs
);
 */
//Functions Returning Functions!

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hello'); // this makes greeterHey the function inside of that function
greeterHey('Tiago');
greeterHey('Lucas');
const greeterOla = greet('Olá');
greeterOla('Tiago');
greeterOla('Lucas');

//We can call the function after we call the first function who return the function
greet('Bonjour')('Tiago');

const greetN = greeting => name => console.log(`${greeting} ${name}`);

greetN('Danke')('Tiago');
 */

//The call and apply Methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Tiago Sanina');
// lufthansa.book(323, 'Luan Santana');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// /* book(232, 'Maria Rolanda'); */

// book.call(eurowings, 234, 'Maria Rola');
// console.log(eurowings);

// const swiss = {
//   airline: 'Swiss Air Line',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 321, 'Lurdinhas Ropinhas');

// //Apply method

// const flightData = [583, 'George Lucas'];
// /* book.apply(swiss, flightData); */

// book.call(swiss, ...flightData);

// //Bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steve Moore');

// //Pre sect a value, in this way, the function created by bind only need 1 arg
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Fernando Couto');

// //With Event Listeners
// const buyBtn = document.querySelector('.buy');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   // console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// console.log(lufthansa);
// const buyPlanesLuf = lufthansa.buyPlane.bind(lufthansa);

// buyBtn.addEventListener('click', buyPlanesLuf);

// //Partial application
// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23); // we set the first value to null because is the THIS KEYWORD in this case in that function we dont have a this keyword we dont care about This in this case, and then we put null
// // console.log(addVAT(40));

// const addTax = rate => value => value + value * rate;
// const addVAT2 = addTax(0.23);
// console.log(addVAT2(100));

//challenge 4
// const pollBtn = document.querySelector('.poll');
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let answer = Number(
//       prompt(
//         'What is your favourite programming language? \n0: JavaScript \n1: Python \n2: Rust \n3: C++'
//       )
//     );
//     if (isNaN(answer) || answer < 0 || answer > 3) {
//       console.log('Try again!');
//     } else {
//       this.answers[answer]++;
//     }
//     this.displayResults('array');
//   },

//   displayResults(type) {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${[...this.answers]}`);
//     }
//   },
// };

// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];
// poll.displayResults.call({ answers: data1 }, 'string');

// const register = poll.registerNewAnswer.bind(poll);

// pollBtn.addEventListener('click', register);

// // poll.displayResults([3, 3, 5]);
// // poll.displayResults('3, 3, 5');

//Immediately Invoked Function Expressions (IIFE)
// (function () {
//   console.log('This will never run again');
// })(); // we wrap the function in () to make javascript think this is just an expression, and then we call it ().

// (() => console.log('This will never run again'))();//with arrow function

//Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// for (let i = 0; i <= 2; i++) {
//   booker();
// }

// console.dir(booker);

//Examples Closures

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// // this is a closure because the setTimeout executes when the boardPassengers is out of the callstack, set timeout execute after 3 secs!

// const perGroup = 1000; // this is the prove why closures have prioraty over scope chain
// boardPassengers(180, 3);

//challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function a() {
    console.dir(a);
    header.style.color = 'blue';
  });
})();
