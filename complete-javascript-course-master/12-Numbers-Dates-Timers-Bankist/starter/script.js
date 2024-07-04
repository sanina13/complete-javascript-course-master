'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-06-26T14:43:26.374Z',
    '2024-06-30T18:49:59.371Z',
    '2024-07-02T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2024-06-26T14:43:26.374Z',
    '2024-06-30T18:49:59.371Z',
    '2024-07-02T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = Math.round(calcDaysPassed(new Date(), date));

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = String(date.getDate()).padStart(2, '0');
  // const year = date.getFullYear();
  // const month = String(date.getMonth() + 1).padStart(2, '0');

  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCur(
          mov,
          acc.locale,
          acc.currency
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');

    //In each call, print the reamining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timerLogin);
      labelWelcome.textContent = `Login in to get started`;
      containerApp.style.opacity = 0;
    }
    time--;
  };

  // Set time to 10 minutes
  let time = 120;

  //Call the timer every second
  tick();
  const timerLogin = setInterval(tick, 1000);
  return timerLogin;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// //FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
//Experimenting API

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.locale; //get the language of the user browser

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const now = new Date();
    // const day = String(now.getDate()).padStart(2, '0');
    // const year = now.getFullYear();
    // const month = String(now.getMonth() + 1).padStart(2, '0');
    // const hour = now.getHours();
    // const min = String(now.getMinutes()).padStart(2, '0');
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //TIMER
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add a Loan Date
      currentAccount.movementsDates.push(new Date().toISOString()); // to put as string and not as a object in the array

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // console.log(Math.trunc());
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(accounts, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// //Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333333
// //Binary base 2 - 0.1

// console.log(0.1 + 0.2);

// //String to a number
// console.log(Number('23'));
// console.log(+'23'); // String to number in a cleaner way

// //Parsing
// console.log(Number.parseInt('30px')); //needs to start with a number to work
// console.log(Number.parseInt('30px', 10)); // We can define as 2 arg the base of the number we are parsing into a integer

// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseFloat('2.5rem'));

// //Check if value is NaN
// console.log(Number.isNaN('20'));

// //best way to check if a value is a Number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(0));

// // for integers
// console.log(Number.isInteger(23));

// //Raizes
// console.log(Math.sqrt(25));
// //another way is:
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// //

// console.log(Math.max(5, 18, 23, 11, 2, '30')); //Return the max value included when have a string with a number but this not parsing, if we put '30px' will return NaN

// console.log(Math.min(4, 2, 53, 23));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(10, 20);

// //Rounding Integers
// console.log(Math.trunc(23.3));

// //round to the nearest Integer
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// //ceil round up always
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// // floor round down alwayss
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// // TRUNC VS FLOOR
// console.log(Math.trunc(-23.3)); // here he just retire 0.3
// console.log(Math.floor(-23.3)); // here he go for -24 because is the nearsted integer
// //FLOOR IS BETTER IN THE CASE OF GET A RANDOM INT!

// //Rounding decimals
// console.log((2.7).toFixed(0)); // toFixed will return always a String
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

//Remainder Operator

// const isEven = num => num % 2 === 0;

// const arrRows = Array.from(document.querySelectorAll('.movements__row'));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'red';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

//Numeric Separators

// // 287,460,000,000
// const diameter = 287_460_000_000; // Javascript ignores _ is just for readbilty for the programmer
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.1415; // Not allowed to put in the beggining of a number or end, and when the number is decimal between the point of the decimal number

// console.log(Number('23_0000')); //In this case numeric separtor dont work, only when we writ down numbers.

//BIG INT - INT - 64 BITS ONLY 53 BITS TO STORE THE NUMBER

// console.log(2 ** 53 - 1); // Numero maximo que o Javascript consegue representar
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER + 6);

// //É devido a isso que foi criado o BIG INT para guardar numeros grandes

// console.log(84348238209382938293823n); // n transform the int into a bigInt
// console.log(BigInt(3292323923923239232323323233)); // outra forma

// //Operations
// console.log(100000n + 100000n);
// console.log(843984392482394839483428948328493248328432n * 10000000n);
// const huge = 432323343434343434343n;
// const num = 23;
// console.log(huge * BigInt(num)); // Não podemos fazer operações de um bigInt com outros tipos, precisamos de passar o num para bigInt

// //Exceptions
// console.log(20n > 15);
// console.log(20n === 20); //The types are different
// console.log(typeof 20n);
// console.log(20n == '20'); // But with just == this will return true

// console.log(huge + ' is REALLY big!!!');

// //Divisions

// console.log(11n / 3n); // returns the nearest int, cut the decimal part off

//Dates
//Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('Jul 03 2024 17:26:27')); // with a String
// console.log(new Date('December 24, 2012'));

// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days later
// //                       timestamp

// //Working with dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); // never user getYear, always getFullYear
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime()); // timestamp
// console.log(new Date(2142256980000));

// //current time stamp
// console.log(Date.now());

// //Set all the gets upstairs have a set method too
// future.setFullYear(2040);
// console.log(future);

//Operations with dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const daysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// //1000 - milisec, 60 - sec, 60 - minutes, 24- hours

// const days1 = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1);

// const num = 233232332.32;

// const options = {
//   style: 'currency', //unit, percent or currency
//   unit: 'celsius',
//   currency: 'EUR',
//   // useGrouping: false,
// };

// console.log('US:     ', new Intl.NumberFormat('en-US', options).format(num));
// console.log(
//   'Germany:     ',
//   new Intl.NumberFormat('de-DE', options).format(num)
// );
// console.log('Syria:     ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );
// TIMEOUT

// const ingredientes = ['olives', 'spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your PIZZA with ${ing1}, ${ing2} 🍕`),
//   3000,
//   ...ingredientes
// ); // 3000 - 3 sec // NOTE TO SET ARGS TO THIS CALLBACK FUNCTION WE NEED TO PUT the value of the args after the timer.
// console.log('Waiting...');

// //clear the timer
// if (ingredientes.includes('spinach')) clearTimeout(pizzaTimer);

// //SET Interval FUNCTION
// setInterval(() => {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);
