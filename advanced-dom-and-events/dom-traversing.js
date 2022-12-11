
//
// DOM Traversing
const h1 = document.querySelector('h1');

// going downwards: selecting child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // more often used (for diret children)
h1.firstElementChild.style.color = 'white'; // seting the first child to white
h1.lastElementChild.style.color = 'orangered';

// Going upwards: selecting parrents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // closes element
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: selecting siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// selecting children elements of h1 and styling them (ignoring the parent h1 element)
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
