"use strict";

//
// The Chaining Methods
//movements0 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// pipeline
const totalDepositsUSD = Math.trunc(
  movements0
    .filter((mov) => mov > 0)
    .map((mov, i, arr) => {
      //console.log(arr); // checking array after filter method
      return mov * 1.1;
    })
    .reduce((acc, val) => acc + val, 0)
);

console.log(totalDepositsUSD);

// bankist app a part of it

const calcDisplaySummary = function (accs) {
  const income = accs.movements
    .filter((inc) => inc > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = `${income}€`;

  const out = accs.movements
    .filter((out) => out < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = accs.movements
    .filter((inc) => inc > 0)
    .map((deposit) => (deposit * accs.interestRate) / 100)
    .filter((deposit, i, arr) => {
      console.log(arr);
      return deposit >= 1;
    })
    .reduce((acc, sum) => acc + sum, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1);
