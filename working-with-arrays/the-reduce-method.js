'Use strict'

//
// The reduce Method

// accumulator is like a SNOWBALL
// const balance = movements0.reduce(function (acc, cur, i, arr) {
// console.log(`Iteration ${i}: ${acc}`);
// with arrow function:
const balance = movements0.reduce((acc, val) => acc + val, 0);

// return acc + cur; // dobimo ukupno zbroj
console.log(balance);

// primjer sa for of loopom
let sum = 0;
for (const mov of movements0) {
  sum += mov;
}
console.log(sum);

// Maximum value
const maxValue = movements0.reduce(function (acc, val) {
  if (acc > val) {
    return acc;
  } else return val;
}, movements0[0]);

console.log(maxValue);

// arrow function + ternary
const maxValue2 = movements0.reduce(
  (acc, val) => (acc > val ? acc : val),
  movements0[0]
);
console.log(maxValue2);
