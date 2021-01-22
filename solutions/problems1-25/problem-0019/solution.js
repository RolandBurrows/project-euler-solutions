console.log('Running solution for Problem 0019...');

// known quantities
var months = {
  'January': 31,
  'February': 28,
  'March': 31,
  'April': 30,
  'May': 31,
  'June': 30,
  'July': 31,
  'August': 31,
  'September': 30,
  'October': 31,
  'November': 30,
  'December': 31
};
const namedDays = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};
var weekdayCounter = 1;

// generate date-time data
var datetimes = [];

// cycle through the years
for (var year = 1900; year <= 2000; year++) {
  // leap years
  if ((year % 4 === 0) && (year % 400 != 0)) {
    months['February'] = 29;
  }
  // cycle through the months
  Object.keys(months).forEach(month => {
    // cycle through the numbered days
    for (var day = 1; day <= months[month]; day++) {
      datetimes.push([day, month, year, namedDays[weekdayCounter]]);
      // cycle through the named days
      weekdayCounter++;
      if (weekdayCounter === 8) {
        weekdayCounter = 1;
      }
    }
  });
}

// filter out the year 1900 entries
var filteredDatetimes = datetimes.filter(entry => entry.includes(1900) === false);

// filter down to the first sundays
const firstSundaysOnly = filteredDatetimes.filter(entry => (entry.includes(1) && entry.includes('Sunday')));

console.log('How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?');
console.log('Answer:', firstSundaysOnly.length);

// Answer: 171
