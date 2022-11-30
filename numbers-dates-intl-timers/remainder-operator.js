
//
// The remainder operator
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); //
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(99 % 22); // 11

console.log(7 % 2);

// checking if a number is even
const isEven = n => n % 2 === 0;

console.log(isEven(22));
console.log(isEven(23));
console.log(isEven(514));

// color every second
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'lightgray'; // every second is lightgray
    if (i % 3 === 0) row.style.backgroundColor = 'yellowgreen'; // every third is yellowgreen
  });
});
