'use strict'

//
// Coding Challenge #3
// revrite the calcAverageHumanAge function by using chaining

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

const juliasDogs0 = [5, 2, 4, 1, 15, 8, 3];
const katesDogs0 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge1 = function (dogAges) {
  return dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge > 18)
    .reduce((acc, avg, i, arr) => acc + avg / arr.length, 0);
};
console.log(calcAverageHumanAge1(juliasDogs0));
console.log(calcAverageHumanAge1(katesDogs0));
