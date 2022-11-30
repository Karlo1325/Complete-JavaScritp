
//
// Math and rounding

console.log(Math.sqrt(25)); // square root => 5
console.log(25 ** (1 / 2)); // same result => 5
console.log(8 ** (1 / 3)); // same result => 5

// max - min number
console.log(Math.max(5, 18, '23', 11, 2)); // works with string
console.log(Math.max(5, 18, '23xc', 11, 2)); // no parsing => NaN

console.log(Math.min(5, 18, '23', 11, 2)); // => 2

// calculate radius
console.log(Math.PI * Number(parseFloat('10px') ** 2));

// random number
console.log(Math.trunc(Math.random() * 6 + 1));

//function for random numbers, input is min and max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(5, 15));

//
// Rounding integers => all work with strings
// trunc
console.log(Math.trunc(23.7)); // 23

// round
console.log(Math.round(23.7)); // 24 => rounding a number if its lower or above 0.5
console.log(Math.round(23.3)); // 23

// ceil
console.log(Math.ceil(23.7)); // 24 => if its above 0.0
console.log(Math.ceil(23.01)); // 24

// floor
console.log(Math.floor(23.99)); // 23 => always 23 till its 24
console.log(Math.floor(23.01)); // 23 => works same as trunc for positive numbers

// floor and trunc - negative numbers
console.log(Math.floor(-23.01)); // -24 => if negative number it works another way around
console.log(Math.trunc(-23.01)); // -23

//
// Rounding decimals
console.log((2.7).toFixed(0)); // 3 => toFixed always return a string
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // converting into a number with +
