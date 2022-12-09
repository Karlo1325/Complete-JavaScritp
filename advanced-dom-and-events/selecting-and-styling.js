
////
//SELECTING ELEMENTS
console.log(document.documentElement); // select the entire HTML
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // all elements with button (live display)
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); //HTM Collection

// Creating and inserting elements
// .insertAdjacentHTML => inserting html code
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message); // prepend adds it as the FIRST child of header
header.append(message); // append adds it as the LAST child of header
// header.append(message.cloneNode(true)); // copying and displaying multiple messages

//header.before(message); //displaying before header
//header.after(message); //displaing after header

// test fade
// Set the initial opacity to 1
message.style.opacity = 1;

// Create a function to fade out the element
function fadeOut() {
  // Decrease the element's opacity by 0.1 every 30 milliseconds
  const tick = function () {
    message.style.opacity = +message.style.opacity - 0.02;

    // Stop the animation when the element is fully invisible
    if (+message.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 30);
    }
  };

  // Start the animation
  tick();
}

// remove cookie message
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    fadeOut();
    setTimeout(function () {
      message.remove();
    }, 1000);

    //oldway:
    //message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); // a big object with all properties so we define which one we want
console.log(getComputedStyle(message).height); // a big object with all properties so we define which one we want

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'; // odvojili smo broj sa stringa od px i pretvorili u num
console.log(getComputedStyle(message).height); // a big object with all properties so we define which one we want

document.documentElement.style.setProperty('--color-primary', 'orangered'); // izabrali smo color iz root i promjenili

// Atributes
// standard
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.src); // displays the alt/src or whatever we call from the img (absolute atribute)
console.log(logo.className); // we need to type className to get the class

logo.alt = 'Beatiful minimalist logo'; // changing the alt

// non-standard
console.log(logo.designer); // not a standard property so its undefined
console.log(logo.getAttribute('designer')); // with getAttribute we can get the non standard atribute
logo.setAttribute('company', 'Bankist'); // replacing and creating a new atribute wit setAttribute

console.log(logo.getAttribute('src')); // (relative version, we need to use getAttribute to get a relative version)

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute
console.log(link.getAttribute('href')); // relative (as displayed in HTML)

// Data atributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// dont do that
logo.className = 'Jonas'; // because it will replace all classes with this class name
