console.log('Running solution for Problem 0007...');
console.time('Processing for Solution 0007 took');

// challenge settings
const nthPrimeToFind = 10001;  // 6th prime is 13

var number = 2;
var primesArray = [];
primesArray.push(2);  // start searching after 2

while (true) {
  number++;
  //console.log('Checking number:', number);
  // check to see if number is prime
  // also there is no point in dividing beyond sqrt(n)
  var searchCeiling = Math.floor(Math.sqrt(number)) + 1;
  for (var num = 2; num <= searchCeiling; num++) {
    if ((number % num) === 0) {
      break;
    }
    if (num === searchCeiling) {
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

// The 10001th prime number is '104743'.
// Processing for Solution 0007 took: 18065.347ms [18.1 seconds]
