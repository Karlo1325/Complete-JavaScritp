
// Sticky navigation
// Intersaction - better way for sticky navigation (better performance)
const obsCallback = function (entries, observer) {
  // these entries are the threshold
  entries.forEach(entry => {
    console.log(entry);
  });
};
const navHeight = nav.getBoundingClientRect().height; // selecting height of an nav element
console.log(navHeight);

const obsOptions = {
  root: null,
  threshold: [0, 0.2], // 0,  20% => when the target is visible x% then its visible
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

const stickyNav = function (entries) {
  const [entry] = entries; // this is the samel ike entries[0]
  console.log(entry); // here we check when isIntersecting is true or false

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // nav appering before 90px
});
headerObserver.observe(header);

// scroll event is bad to use for performance so we dont use this
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
