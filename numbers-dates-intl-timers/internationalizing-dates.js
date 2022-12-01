// test API
const now1 = new Date();
// configuring custom options to display
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

const locale = navigator.language; // getting the lang from the browser (replace 'en-GB' with locale)
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat('en-GB', options).format(now);

