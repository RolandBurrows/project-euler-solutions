console.log('Running solution for Problem 0035...');

// challenge settings
const searchCap = 1000000;  // test with 100 first. answer: 13
var primesArray = [2];

function generatePrimes () {
  for (var number = 2; number <= searchCap; number++) {
    var searchCeiling = Math.floor(Math.sqrt(number)) + 1;
    for (var num = 2; num <= searchCeiling; num++) {
      if ((number % num) === 0) {
        break;
      }
      if (num === searchCeiling) {
        primesArray.push(number);
      }
    }
  }
}

function circularPrimeCheck (number, array) {
  var numStr = number.toString();
  for (var i = 0; i < numStr.length; i++) {
    var firstChar = numStr.charAt(0);
    numStr = numStr.substring(1);  // delete first char
    numStr = numStr.concat(firstChar);
    var newNum = parseInt(numStr);
    if (!array.includes(newNum)) {
      return false
    }
  }
  return true;
}

console.log(`Generating all primes below ${searchCap}, for comparison.`);
generatePrimes();

var circularPrimesCount = 0;
primesArray.forEach( function(primeNum) {
  if (circularPrimeCheck(primeNum, primesArray)) {
    // console.log('Pattern match:', primeNum);
    circularPrimesCount++;
  }
});

console.log(`How many circular primes are there below ${searchCap}?`);
console.log('Answer:', circularPrimesCount);

// How many circular primes are there below 1000000?
// Answer: 55
