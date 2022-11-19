// FOR EACH WITH MAPS AND SETS
//MAP
const currenciesCopy = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currenciesCopy.forEach(function (value, key, array) {
  console.log(`${key}: ${value}`);
});

//SET
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  // set has only value
  console.log(`${key}: ${value}`); // u set je key i value isti jer nema key ni index
});
