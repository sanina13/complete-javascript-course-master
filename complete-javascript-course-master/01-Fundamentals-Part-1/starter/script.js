/* const country = "Portugal";
const continent = "Europe";
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "Portuguese";

console.log(isIsland);
console.log(language);

console.log(
  "If your country split in half, and each half would contain half the population, then how many people would live in each half?"
);
console.log(population / 2);

console.log(
  "Increase the population of your country by 1 and log the result to the console."
);

console.log(++population);

console.log(
  "Finland has a population of 6 million. Does your country have more people than Finland?"
);

console.log(population > 6);

console.log(
  "The average population of a country is 33 million people. Does you country have less people than the average country?"
);

console.log(population > 33);

console.log(
  country +
    " is in " +
    continent +
    ", and its " +
    population +
    " million people speak " +
    language
);

console.log(
  `${country} is in ${continent}, and its ${population} million people speak ${language}`
);

console.log("---------------------------------");
let diff = 33 - population;
if (diff < 0) diff *= -1;
if (population > 33) {
  console.log(`${country}'s population is ${diff} million above average`);
} else if (population === 33) {
  console.log(`${country}'s population is equal as average`);
} else {
  console.log(`${country}'s population is ${diff} million below average`);
} */

/* console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2); */
/* const numNeighbours = Number(
  prompt("How many neighbour countries does your contry have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}*/

/* console.log("--------------------------------");

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

const word = population > 33 ? "above" : "below";

console.log(`${country}'s population is ${word} average`);
 */

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

/* let markHigherBMI = BMIMark > BMIJohn ? true : false;
if (!markHigherBMI) {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
 */
/* 
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
} */

/* let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
); */

/* function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

describeCountry("France", 44, "Paris");
console.log(describeCountry("Portugal", 11, "Lisbon")); */

/* function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;

console.log(describePopulation("China", 1444));
 */
// ARRAYS
/* 
const percentageOfWorld1 = function (population) {
  return (population / 79000) * 100;
};

const populations = [11, 12, 13, 32];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
 */

/* const neighbour = ["France", "Austria", "Suisse", "Eslovenia"];
neighbour.push("Utopia");
console.log(neighbour);
neighbour.pop();
console.log(neighbour);
const germany = neighbour.includes("Germany")
  ? "Danke"
  : "Probably not a central european country :D";
console.log(germany);
neighbour[neighbour.indexOf("France")] = "Portugal";
console.log(neighbour);
 */
//OBJECTS

/* const myCountry = {
  country: "Portugal",
  capital: "Lisbon",
  language: "Portuguese",
  population: 11,
  neighbours: ["Spain"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry); */
/* myCountry.population += 2;

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry["population"] -= 2;
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
 */

/* for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
} */
/* 
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};
const populations = [11, 1144, 13, 32];

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

const precentages2 = [];

for (let i = 0; i < populations.length; i++) {
  precentages2[i] = percentageOfWorld1(populations[i]);
}

console.log(precentages2);
console.log(percentages); */

/* listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
} */

/* const populations = [11, 1144, 13, 32];

const precentages2 = [];

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

let i = 0;
while (i < populations.length) {
  precentages2[i] = percentageOfWorld1(populations[i]);
  i++;
}

console.log(precentages2); */

/* const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(65, 54, 49);
let scoreKoalas = calcAverage(23, 34, 27);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
 */
/* 
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let bills = [125, 555, 44];
let tips = [];
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
}

let totals = [];

for (let i = 0; i < bills.length; i++) {
  totals[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(totals); */

/* const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is heigher than ${john.fullName}'s (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is heigher than ${mark.fullName}'s (${mark.bmi})`
  );
} */

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

console.log(bills);
console.log(tips);
console.log(totals);

const arr = [4, 3, 2];
let sum = 0;
const calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
