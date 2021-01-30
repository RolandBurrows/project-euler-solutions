console.log('Running solution for Problem 0026...');

//challenge settings
const stopSearch = 1000;
var primesArray = [];

function getRepetendLength(divisor) {
  // e.g. sequence
  // 1 / 7 = 0
  // 10 / 7 = 1 (goes in one time, remainder 3, so next is 30)
  // 30 / 7 = 4 (goes in four times, remainder 2, so next is 20)
  // 20 / 7 = 2
  // 60 / 7 = 8
  // 40 / 7 = 5
  // 50 / 7 = 7
  // 10 / 7 = 1
  var cycler = 1;
  var length = 0;
  // we want the cycle to execute at least once
  do {
    cycler = (cycler * 10) % divisor;
    length++;
  } while (cycler !== 1);
  return length;
}

// see problem 0007
function generatePrimes() {
  // algorithm requires co-prime to 10, so start with prime 7
  // further research: full repetend primes
  var number = 6;
  while (true) {
    number++;
    var searchCeiling = Math.floor(Math.sqrt(number)) + 1;
    for (var num = 2; num <= searchCeiling; num++) {
      if ((number % num) === 0) { break; }
      if (num === searchCeiling) { primesArray.push(number); }
    }
    if (number > stopSearch) { break; }
  }
}

function solve() {
  var maxDivisor = 0;
  var maxPosition = 0;
  for (var i = 0; i < primesArray.length; i++) {
    var newValue = getRepetendLength(primesArray[i]);
    if (maxDivisor < newValue) {
      maxPosition = primesArray[i];
      maxDivisor = newValue;
    }
  }
  return maxPosition;
}

generatePrimes();

console.log('Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.');
console.log('Answer:', solve());

// Answer: 983
