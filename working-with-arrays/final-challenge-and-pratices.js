"use strict";

//
// Array Methods Pr

// 1.
const bankDepositSum = accounts
  .map((acc) => acc.movements.filter((mov) => mov > 0))
  .flat()
  .reduce((acc, val) => acc + val, 0);

console.log(bankDepositSum);

// 2.
// trazi se koliko uplata je bilo iznad 1000

const depositAbove1K = accounts
  .flatMap((acc) => acc.movements)
  .filter((num) => num >= 1000).length;

console.log(depositAbove1K);

// reduce example
const deposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, val) => (val >= 1000 ? ++acc : acc), 0);

console.log(deposit1000);

let a = 10;
console.log(++a); // in front of a (prefixed  ++ operator)
console.log(a);

// 3.
// createa object with sums of deposits and withdrawals
const { deposits0, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur >= 0 ? (sums.deposits0 += cur) : (sums.withdrawals += cur);
      // return sums;

      // shorter way
      sums[cur > 0 ? "deposits0" : "withdrawals"] += cur;
      return sums;
    },
    { deposits0: 0, withdrawals: 0 }
  );
console.log(deposits0, withdrawals);

// 4.
// this is a nice title --> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["an", "a", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return capitalize(titleCase);
  //console.log(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but NOT too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

//
// Challenge 4
//
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//Forumla: recommendedFood = weight ** 0.75 * 28.
//(The result is in grams of food, and the weight needs to be in kg)

// 1
const recomended = function (arr) {
  arr.forEach((ob) => (ob.recFood = Math.trunc(ob.weight ** 0.75 * 28)));
};

// 2
const findSarah = function (arr) {
  arr.forEach((ob) =>
    ob.owners.includes("Sarah")
      ? console.log(`
  Sarah dog is eating ${ob.curFood > ob.recFood ? "too much" : "enough"}`)
      : "There is no Sarah"
  );
};

recomended(dogs);
console.log(dogs);
findSarah(dogs);

// 3
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
// 4
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7
console.log(dogs.filter(checkEatingOkay));

// 8
console.log(dogs.slice().sort((a, b) => a.recFood - b.recFood));
