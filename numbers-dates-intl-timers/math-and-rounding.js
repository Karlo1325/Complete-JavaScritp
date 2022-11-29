
// Math and rounding

console.log(23 === 23.0);

// Base 10numbers from 0 to 9
// Binary 2numbers  from 0 to 1
console.log(0.1 + 0.2); // => 0.3000000000000004
console.log(0.1 + 0.2 === 0.3);

// Converting into numbers
console.log(Number('23'));
console.log(+'23'); // + converting 23 into number

// Parsing
console.log(Number.parseInt('  30px', 10)); // needs to start with a number
console.log(Number.parseInt('px30', 10)); // NaN because its not starting with a number

// for decimals
console.log(Number.parseFloat('  2.5rem'));

// check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20px')); // true
console.log(Number.isNaN(23 / 0)); // false

// checking if it is a number - best way to check for number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger('23.0')); // false
console.log(Number.isInteger(23 / 0)); // false

console.log(+(2.0342).toFixed(2)); // show decimals
