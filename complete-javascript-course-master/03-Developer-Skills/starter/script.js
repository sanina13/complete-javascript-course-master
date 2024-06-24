// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const temperatures = [3, -2, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let biggest;
let lowest;

const amplitude = function (arr) {
  if (typeof arr[0] === "number") {
    biggest = arr[0];
    lowest = arr[0];
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    } else {
      if (arr[i] > biggest) {
        biggest = arr[i];
      } else if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
  }
  if (lowest < 0) {
    lowest *= -1;
  }
  return biggest - lowest;
};
/* 
console.log(amplitude(temperatures)); */
/* const mesureKelvin = function () {
  const mesurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };

  const kelvin = Number(mesurement.value) + 273;
  return kelvin;
};

console.log(mesureKelvin());
 */
/* CHALLENGE */

let temps = "";
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    temps += ` ... ${arr[i]}ºC in ${++i} days`;
    i--;
  }
  return temps;
};

console.log(printForecast([12, 5, -5, 0, 4]));
