
//
// Building tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// selecting buttons:
//tabs.forEach(t => t.addEventListener('click', () => console.log('TAB'))); // this is bad practice
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //this way we get the button if we click the span number
  console.log(clicked);

  //modern way
  if (!clicked) return; // if there is nothing clicked return function

  // Remove active classes
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );
  // Active tab
  clicked.classList.add('operations__tab--active');
  //old way
  // if (clicked) {
  //   tabs.forEach(el => el.classList.remove('operations__tab--active'));
  // clicked.classList.add('operations__tab--active');
  // }

  // Activate content area
  console.log(clicked.dataset.tab); // getting the number of the tab

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
