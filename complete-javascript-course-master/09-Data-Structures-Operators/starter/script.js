'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 ENHANCED OBJECT LITERALS
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}pm`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Strings Part 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixedCapitalization = function (name) {
  name = name.toLowerCase();
  return name[0].toUpperCase() + name.slice(1);
};
console.log(fixedCapitalization('TiAGo'));

// Comparing email email
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const clearSpaceEmail = lowerEmail.trim(); //remove whitspaces
console.log(email === clearSpaceEmail);
console.log(clearSpaceEmail);

const normalizedEmail = email.toLocaleLowerCase().trim(); //all in the same line
console.log(normalizedEmail);

const checkEmail = function (email, loginEmail) {
  loginEmail = loginEmail.toLowerCase().trim();
  return loginEmail === email;
};
console.log(
  checkEmail('tiago.sanina12@gmail.com', '   TiaGo.saNiNa12@gMail.COM')
);
/******************************** */
//Replacing
const priceGB = '288,97£';
const priceUs = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUs);

const annoucement = 'All passengers como to barding door 23. Boarding door 23';
console.log(annoucement.replaceAll('door', 'gate'));

//Booleans with Strings methods
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // Verify if the String includes A320
console.log(plane.startsWith('Air')); // Verify if the String starts with ex: Air

if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('New!!');

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Not Allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//Strings
/* const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length); */

//Methods Strings
/* console.log(airline.indexOf('r')); // Position of r in the String
console.log(airline.lastIndexOf('r')); // Last time than r in the String
console.log(airline.indexOf('Portugal')); */

//Slice Method
/* console.log(airline.slice(4)); */ // return a substring always return a new string all methods in strings, because strings are imutable
/* console.log(airline.slice(4, 7)); */ // the last index dont count, the slice stops in 6

/* console.log(airline.slice(0, airline.indexOf(' ')));  */ // first word from the 0 till the first space
/* console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1)); */

/* const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the Middle Seat 😒');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); */

//Challenge 3
/*
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAl

*/
/* const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
 */
/*1. Create an array 'events' of the different game events that happened (no
duplicates)*/
/* const uniqueEvents = new Set(gameEvents.values());
const events = [...uniqueEvents];
console.log(events); */
/*After the game has finished, is was found that the yellow card from minute 64*/
/* gameEvents.delete(64);
console.log(gameEvents); */
/*3-Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)*/
/* console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

let sum = 0;
for (const key of gameEvents.keys()) {
  sum += key;
}
console.log(
  `An event happened, on average, every ${Math.trunc(sum / 90)} minutes`
); */
/*4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAl */
/* for (const [key, value] of gameEvents) {
  key <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}
 */
//maps

/* const question = new Map([
  ['question', 'Whast is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again!'],
]);
console.log(question); */

//Convert object to map
/* const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); */

//Quiz App
/* console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
console.log(question.get(answer === question.get('correct'))); */

//Convert map to array
/* console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]); */

/* const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

//chain set to a map
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are opne :D')
  .set(false, 'We are closed :(');

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));

console.log(rest.has('categories'));

rest.delete(2);
console.log(rest);

console.log(rest.size);
/* rest.clear(); */
/* const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr));

/ */

/* const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(new Set('Jonas'));

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Use case
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
const staffArr = [...staffUnique];
console.log(staffArr); */

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")*/
/* for (const [key, player] of game.scored?.entries()) {
  console.log(`Goal ${key + 1}: ${player}`);
} */
/*2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)/* */
/* const values = Object.values(game.odds);
let sum = 0;
for (const odd of values) {
  sum += odd;
}
const average = sum / values.length; */
/*3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
/* Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names */
/* const entries = Object.entries(game.odds);
for (const [key, value] of entries) {
  if (key === 'x') {
    console.log(`Odd of draw: ${value}`);
  } else {
    console.log(`Odd of victory ${game[key]}: ${value}`);
  } */
/* } */
/*4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
}
Gnarby: 1,
Hummels: 1,
Lewandowski: 2 */

/* const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers); */

/*
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names
�
�
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
}
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
*/

//Loop objects over proprety names KEYS

//Proprety NAMES
/* const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);
//Proprety VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

/* if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1)) ?? 'Method does not';
console.log(restaurant.orderRisotto?.(0, 1)) ?? 'Method does not';

//arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty'); */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//For of loop

for (const item of menu) console.log(item);

//index with a for of loop
for (const [key, value] of menu.entries()) {
  console.log(`${key + 1}: ${value}`);
}
 */
//Challenge 1
/*We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/* //1-Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
//2-The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3- Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
//Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(`${players}: ${players.length} goals`);
};

printGoals(...game.scored);
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 7- The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator

team1 < team2 && console.log('Team 1 more probably to win!');
team1 > team2 && console.log('Team 2 more probably to win!'); */

//Logical Assignment Operators
/*
const rest1 = { */
/*  name: 'Capri', */
/* numGuests: 20, */
/*   numGuests: 0,
}; */
/*
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
 */
/* rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10; */

//Nullish assignment operator
/* rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//Logical and operator
rest1.owner &&= 'anonymous';
rest2.owner &&= 'anonymous';

console.log(rest1);
console.log(rest2); */

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
