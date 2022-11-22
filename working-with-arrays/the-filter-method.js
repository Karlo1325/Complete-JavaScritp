'Use strickt'

//
// The filer Method
const movements0 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements0.filter(function (mov, i, arr) {
  // returns new arr numbers above 0
  return mov > 0;
});

console.log(deposits);

// primjer sa for of metodom
const deposits2 = [];
for (const mov of movements0) {
  if (mov > 0) {
    deposits2.push(mov);
  }
}
console.log(deposits2);

// small challenge - create an array ith withdrawals
const withdrawal = movements0.filter(
  value => value < 0
  // ako je true onda returna value manje od 0
);
console.log(withdrawal);
