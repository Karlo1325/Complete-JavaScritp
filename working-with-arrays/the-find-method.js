'use strict'

//
// The Find Method
const firstWithdrawal = movements0.find(function (mov) {
  return mov < 0;
});
console.log(movements0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Kristijan Salijević');
console.log(account);

// for of example which does the same like find method
const accountOwner = [];
for (const acc of accounts) {
  if (acc.owner === 'Kristijan Salijević') {
    accountOwner.push(acc);
  }
}
console.log(...accountOwner);
