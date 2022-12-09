
//
// Types of Events and Event handlers

const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('Alert message for H1');

  //h1.removeEventListener('mouseenter', alertH1); // executing this function once then we remove it with this
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // remove event with a timer

// h1.addEventListener('mouseenter', function () {
//   alert('addEventlistener: Great! You are reading the heading :D');
// });

// second way of adding mouse enter also old way
// h1.onmouseenter = function () {
//   alert('addEventlistener: Great!');
// };
