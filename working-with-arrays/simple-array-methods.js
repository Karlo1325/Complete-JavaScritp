// SIMPLE ARRAY METHODS
// SLICE METHOD
let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2)); // it dosent mutate the base array, it returns a copy
console.log(arr.slice(2, 4)); // slice starting point and ending point
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // copy of the whole array
console.log([...arr]); // its the same like slice()

// SPLICE METHOD
//console.log(arr.splice(2)); // it returns the removed elements from the array
arr.splice(-1);
arr.splice(1, 2);
console.log(arr); // splice mutates the main array

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // reverse changes the positions and mutates the array
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); // meergin 2 arrays into one
console.log(letters);
console.log([...arr, ...arr2]); // gives same result like spread

// JOIN
console.log(letters.join(" - ")); // meergin elements togheder
