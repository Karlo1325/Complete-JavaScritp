// THE NEW AT METHOD
const arr3 = [23, 11, 64];
console.log(arr3[0]); // old way
console.log(arr3.at(0)); // new way with at method

console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log("Jonas".at(0)); // it also works with strings
