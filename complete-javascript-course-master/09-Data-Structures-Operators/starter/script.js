'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}pm`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  /* numGuests: 20, */
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

/* rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10; */

//Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//Logical and operator
rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';

console.log(rest1);
console.log(rest2);

//Nullish Coalescing Operator

/* restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
 */
//Short Circuting
/* console.log('------ OR --------');

console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas '' is a falsy value
console.log(true || 0); // true
console.log(undefined || null); // null because undefined is a falsy value, and then he prints null besides null is also a falsy value

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //prints hello because is the firs truthy value
/*
restaurant.numGuests = 23; */
/* const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------ AND --------');

console.log(0 && 'Jonas'); // return 0
console.log(7 && 'Jonas'); // return Jonas because 7 is a truty value then passes trought 'Jonas' and return him

console.log('Hello' && 23 && null && 'Jonas'); // return null

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 */
//Rest Pattern

//Spread, because on Right side of =
/* const arr = [1, 2, ...[3, 4]]; */
//Rest on the left side of =
/* const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [first, , third, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(first, third, otherFood); */

// Objects
/* const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); */

//Functions REST PARAMETERS
/* const add = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(4, 3, 2, 2, 1);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'tomato', 'tuna'); */

/* const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
]; */
/* restaurant.orderPasta(...ingredients); */

// Objects
/* const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];
//Join 2 arrays or more
const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
 */
/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, categories);

// default value, good when we get data from an api
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // usamos os parenteses porque as chavetas espera anterioremente o code block então dá erro so funciona com os parenteses

//nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); */

//Destructuring ARRAYS
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring an Array now x = 2; y = 3; z = 4
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

[main, secondary] = [secondary, main];

console.log(main, secondary);

// Recive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

const [d, , [e, f]] = nested;
console.log(d, e, f);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */
