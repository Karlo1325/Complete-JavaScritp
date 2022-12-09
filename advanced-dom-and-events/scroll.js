
// Implement scroll on click
// old way
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();

  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); // dispaying current coordinations of the page
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset); // current scroll position

  console.log(
    'Heigth/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); // geting height and width of the viewport

  //Scrolling on click
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); // we need to add current position to make this work on second click

  // scroll on click with a smooth animation
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth', //smooth animation
  // });

  // Modern way of screating this scroll also easyer way: (for modern browsers)
  section1.scrollIntoView({ behavior: 'smooth' });
});