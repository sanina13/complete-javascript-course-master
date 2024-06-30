'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  //clear the container
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov < 0 ? 'withdrawal' : 'deposit';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcPrintBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Array simple methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// //copy array with slice
// console.log(arr.slice());

// //splice method
// // Funciona como o slice só que modifica o array removendo ao array os valores spliced!
// //splice is good to delete elem from the array
// console.log(arr.splice(2));
// console.log(arr);
// //ex of deleting the last elem of the array with splice
// arr.splice(-1);
// // DIFFETENCE BETWEEN IS THE SECOND ELEM OF SPLICE IS THE NUMBER OF ELEM WE WANT TO DELETE!

// // REVERSE
// //REVERSE MUTATE THE ARRAY! IMPORTANT!
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// // this do the same thing than with the spread operator
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

//The new at Method

// // at
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0)); // do the same as arr[0]

// //getting last array element
// console.log(arr[arr.length - 1]); // last elem
// console.log(arr.slice(-1)[0]); // last elem
// console.log(arr.at(-1)); // with at we can put negative index and do what we do in the slice method, and this is a shorter way to get the last elem

// // at on strings
// console.log('jonas'.at(0));

//FOR EACH

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// For EACH

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// 0: function(200)
// 1: function(450)
// ...

// FOR EACH MAPS AND SETS

//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(map);
//   console.log(`${value}: ${value}`);
// });
// _ is a name to variable to trow away we dont care about, in this case, SETS dont have index

//CHALLENGE 1 ARRAYS

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = [...dogsJulia];
//   dogsJuliaCopy.splice(0, 1);
//   dogsJuliaCopy.splice(-2);
//   const correctDogs = [...dogsJuliaCopy, ...dogsKate];
//   correctDogs.forEach(function (value, i) {
//     const age =
//       value >= 3 ? `an adult, and is ${value} years old` : 'still a puppy 🐶';
//     console.log(`Dog number ${i + 1} is ${age}`);
//   });
// };
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//MAP METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// // const movementUsd = movements.map(function (movement) {
// //   return Math.trunc(movement * euroToUsd);
// // });

// const movementUsd = movements.map(movement => Math.trunc(movement * euroToUsd));

// console.log(movementUsd);

// // const movementsUSDfor = [];
// // for (const mov of movements) {
// //   movementsUSDfor.push(Math.trunc(mov * euroToUsd));
// // }
// // console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => {
//   const type = mov > 0 ? 'deposited' : 'withdrew';
//   return `Movement ${i + 1}: You ${type} ${Math.abs(mov)}`;
// });

// console.log(movementsDescriptions);

//FILTER METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const depositsArr = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(depositsArr);

// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// //reduce method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // //ACCMULATOR -> IS LIKE A SNOWBALL
// // //reduce is different from the others methods, he have accumulator first, then current value, index and array
// // const balanceAcc = movements.reduce((acc, cur) => acc + cur, 0); // this sec param from reduce is to put acc starting at 0

// //MAX value with reduce
// const max = movements.reduce((acc, val) => {
//   if (acc > val) return acc;
//   else return val;
// }, movements[0]);

// console.log(max);

// CHALLENGE #2 and #3
const calcAverageHumanAge = ages => {
  const avg = ages
    .map(age => {
      if (age <= 2) return age * 2;
      else return 16 + age * 4;
    })
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

  console.log(avg);
};

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // PIPELINE
// const depositTotalUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(depositTotalUSD);
