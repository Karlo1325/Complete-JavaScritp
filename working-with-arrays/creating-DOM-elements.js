"use strict";

const containerMovements = document.querySelector(".movements");

const displayMovements = function (movements) {
  containerMovements.innerHTML = ""; // ispraznili smo movements container

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML("afterbegin", html); //dodajemo kod koji smo stvorili sa html varijablom
  });
};
displayMovements(account1.movements);

console.log(containerMovements.innerHTML);
