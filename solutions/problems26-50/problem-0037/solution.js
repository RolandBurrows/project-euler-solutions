console.log('Running solution for Problem 0037...');

const searchCap = 1000000;  // test with 4000 first, to find 3797

function generatePrimes (startNum) {
  var primesArray = [];
  if (2 >= startNum) {
    primesArray.push(2);
  }
  for (var number = startNum; number <= searchCap; number++) {
    var searchCeiling = Math.ceil(Math.sqrt(number));
    for (var num = 2; num <= searchCeiling; num++) {
      if ((number % num) === 0) {
        break;
      }
      if (num === searchCeiling) {
        primesArray.push(number);
      }
    }
  }
  return primesArray;
}

function isTruncatableLeft (primeNum, primesCompare) {
  var primeStr = primeNum.toString();
  for (var i = primeStr.length-1; i != 0; i--) {
    primeStr = primeStr.substring(1);
    var shortPrimeNum = parseInt(primeStr);
    if (!primesCompare.includes(shortPrimeNum)) {
      return false
    }
  }
  return true;
};

function isTruncatableRight (primeNum, primesCompare) {
  var primeStr = primeNum.toString();
  for (var i = primeStr.length-1; i != 0; i--) {
    primeStr = primeStr.slice(0, -1);
    var shortPrimeNum = parseInt(primeStr);
    if (!primesCompare.includes(shortPrimeNum)) {
      return false;
    }
  }
  return true;
};


const primesCompare = generatePrimes(2);
const primesSearch = generatePrimes(11);  // NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

var primesSum = 0;
primesSearch.forEach( function(primeNum) {
  if (isTruncatableLeft(primeNum, primesCompare) && isTruncatableRight(primeNum, primesCompare)) {
    console.log('Pattern Match:', primeNum);
    primesSum += primeNum;
  }
});


console.log('Find the sum of the only eleven primes that are both left and right truncatable.');
console.log('Answer:', primesSum);

// Pattern Match: 23
// Pattern Match: 37
// Pattern Match: 53
// Pattern Match: 73
// Pattern Match: 313
// Pattern Match: 317
// Pattern Match: 373
// Pattern Match: 797
// Pattern Match: 3137
// Pattern Match: 3797
// Pattern Match: 739397
// Find the sum of the only eleven primes that are both left and right truncatable.
// Answer: 748317
