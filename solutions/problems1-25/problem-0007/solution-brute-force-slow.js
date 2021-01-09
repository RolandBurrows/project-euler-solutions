console.log('Running solution for Problem 0007...');
console.time('Processing for Solution 0007 took');

// challenge settings
const nthPrimeToFind = 10001;  // 6th prime is 13

var number = 0;
var primesArray = [];
while (true) {
  number++;
  //console.log('Checking number:', number);
  // check to see if number is prime
  for (var num = 2; num <= number; num++) {
    if (((number % num) === 0) && (number !== num)) {
      break;
    }
    if (num === number) {
      //console.log(`  ${number} is prime`);
      primesArray.push(number);
    }
  }
  if (primesArray.indexOf(number) === (nthPrimeToFind - 1)) {
    break;
  }
}

console.log(`The ${nthPrimeToFind}th prime number is '${number}'.`);
console.timeLog('Processing for Solution 0007 took');

// Answer: 104743
// Processing for Solution 0007 took: 1780120.187ms [29.67 minutes]
