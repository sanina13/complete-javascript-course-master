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

const updateUi = function (currentAccount) {
  //Display movements
  displayMovements(currentAccount.movements);
  //Display balance
  calcPrintBalance(currentAccount);
  //Display summary
  calcDisplaySummary(currentAccount);
};

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

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

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

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

//Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI AND WELCOME MESSAGE
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); //remove the focus on the input pin after login
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    currentAccount.username !== receiverAcc.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update UI
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amountLoan = Number(inputLoanAmount.value);
  const depositsCondition = currentAccount.movements.some(
    mov => mov > amountLoan * 0.1
  );
  if (amountLoan > 0 && depositsCondition) {
    //Add movement
    currentAccount.movements.push(amountLoan);

    //Update UI
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const user = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  console.log(user, pin);
  if (user === currentAccount.username && pin === currentAccount.pin) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete Account
    accounts.splice(index, 1);

    //HIDE UI

    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
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
// const calcAverageHumanAge = ages => {
//   const avg = ages
//     .map(age => {
//       if (age <= 2) return age * 2;
//       else return 16 + age * 4;
//     })
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

//   console.log(avg);
// };

// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // // PIPELINE
// // const depositTotalUSD = movements
// //   .filter(mov => mov > 0)
// //   .map(mov => mov * 1.1)
// //   .reduce((acc, mov) => acc + mov, 0);
// // console.log(depositTotalUSD);

// //THE FIND METHOD
// //Returns a element, in this case first elem of the array when this condition is true
// const withdraw = movements.find(mov => mov < 0);
// console.log(withdraw);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const accFor = function () {
//   for (const acc of accounts) {
//     if (acc.owner === 'Jessica Davis') {
//       console.log(acc);
//     }
//   }
// };

// accFor();

//Some and Every methods

//EQUALATY
// console.log(movements.includes(-130));

// //Return True or false, checks a condition in the array, in this case if some value is positive
// // CONDITION
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

//EVERY METHOD
// É parecido com o some mas neste caso ele so retorna true se todos os elementso satisfazerem a condição colocada

// console.log(account4.movements.every(mov => mov > 0));

// //Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // Joins all the elem in one single array inside of arr [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // we can define the deep of the nested in the flat method the default is 1

const overalBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
