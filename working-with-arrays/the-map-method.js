"use strickt";

//
// .map method

const euroToUsd = 1.1;
const movementsNew = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movementsNew.map(function (mov) { //ovo je moderniji naćin i bolji naćin ❗️
//   return Math.trunc(mov * euroToUsd);
// });
// arrow function:
const movementsUSD = movementsNew.map((mov) => Math.trunc(mov * euroToUsd));

console.log(movementsNew);
console.log(movementsUSD);

// primjer sa for of loop - na ovaj naćin moramo ručno kreirati array prazan
const arrUSD = [];
for (const mov of movementsNew) {
  arrUSD.push(Math.trunc(mov * euroToUsd));
}
console.log(arrUSD);

const movementsDescriptions = movementsNew.map(function (mov, i) {
  return `Movement ${
    i + 1
  }: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`;
});
console.log(movementsDescriptions); // dobili smo novi array sa ovim returnom
