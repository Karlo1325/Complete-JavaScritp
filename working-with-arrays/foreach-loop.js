// FOREACH LOOP
const movementsCopy = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movementsCopy) {
for (const [i, movement] of movementsCopy.entries()) {
  // usporedba sa forEach
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); // Math.abs removes the minus(-) on a number
}
// for of loop entries order: 1 current index, 2 current value ❗️
// for of loop you can break the loop while forEach you cant

console.log(" forEACH ".padStart(20, "-").padEnd(35, "-"));
// forEach
movementsCopy.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
});

// forEach entries order : 1 current element, 2 current index, 3 entire array ❗️
// forEach loops always the entire array

// background example of the forEach loop:
// 0: function(200)
// 1: function(450)
// 2: function(400)
