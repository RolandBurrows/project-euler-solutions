console.log('Running solution for Problem 0041...');

const searchCap = 10000000;  // most pandigitals happen after 1,000,000
var primesArray = [2];

function generatePrimes() {
  console.log(`Generating primes up until ${searchCap}...`);
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

function isPandigital(num) {
  var numStr = num.toString();
  var panCheck = '';
  // set pandigital check to the same length of the number, since it varies
  for (var i = 1; i <= numStr.length; i++) {
    panCheck = panCheck.concat(i.toString());
  }
  if (numStr.split('').sort().join('') === panCheck) {
    return true;
  }
  return false;
}

generatePrimes();

var maxPandigitalPrime = 1;
primesArray.forEach( function(primeNum) {
  if (isPandigital(primeNum)) {
    console.log(`${primeNum} is pandigital`);
    if (primeNum > maxPandigitalPrime) {
      maxPandigitalPrime = primeNum;
    }
  }
});

console.log('What is the largest n-digit pandigital prime that exists?');
console.log('Answer:', maxPandigitalPrime);

// Answer: 7652413
