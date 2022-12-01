
//
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // always use getFUllYear to get the year
console.log(future.getMonth() + 1); // its 0 based so we need to add +1
console.log(future.getDate()); // day
console.log(future.getDay()); // day after week => 4. tjedan u mjesecu
console.log(future.getHours()); // hours
console.log(future.getMinutes()); // minutes
console.log(future.getSeconds()); // seconds
console.log(future.toISOString()); // string
console.log(future.getTime()); // a number which we can convert later to get that exact date and time

console.log(new Date(2142253380000)); // converting a number into the exact same time (future)

console.log(Date.now()); // getting a number for time now
console.log(new Date(1669879441998)); // converting that number into time

future.setFullYear(2040); // seting a new year for future var => we can set anything frm above
console.log(future);

// example:

// const now = new Date(); // current date
// const day = `${now.getDate()}`.padStart(2, 0); // max lenght 2, so we r adding 0 in front if the lenght is 1
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const minutes = `${now.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
