
//
// Implementing page navigation
// smooth scroll on every button
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); // selecing the ID name
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // implementing scroll animation for each link
//   });
// });

// better way with event deligation for better performance:
// Steps:
// 1. add event listener to common parent element
// 2. Determine what element orginated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // selecing the ID name
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
