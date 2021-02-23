console.log('Running solution for Problem 0050...');
console.time('Problem 0050');

const searchCap = 1000000;  // test with 100 and 1000 first

function generatePrimes(stopNum) {
  var primesArray = [2];
  for (var number = 3; number <= stopNum; number++) {
    var searchCeiling = Math.floor(Math.sqrt(number)) + 1;
    for (var num = 2; num <= searchCeiling; num++) {
      if ((number % num) === 0) { break; }
      if (num === searchCeiling) {
        primesArray.push(number);
      }
    }
  }
  return primesArray;
}


const primesArray = generatePrimes(searchCap);
var haystack = [];
// search increasing lengths of consecutive terms
// which will not be higher than the sqrt of the search cap
for (var i = 2; i <= Math.sqrt(searchCap); i++) {
  // search increasing indices of starting the slice of primes
  // which will always be in the first 2% of possible starting indexes
  for (var j = 0; j < Math.ceil(primesArray.length*0.02); j++) {
    var primeSlice = primesArray.slice(j, j+i);
    var candidateSum = 0;
    primeSlice.forEach( function(primeNum) {
      candidateSum += primeNum;
    });
    if (primesArray.includes(candidateSum)) {
      haystack.push([primeSlice.length, candidateSum]);
    }
  }
}

// filter the mega array for longest sum
var hayBale = haystack.sort(function (a, b) { return b[0] - a[0]; });
var needle = hayBale[0];

console.log(`Which prime, below ${searchCap}, can be written as the sum of the most consecutive primes?`);
console.log(`Answer: prime ${needle[1]} can be summed via ${needle[0]} terms`);
console.timeLog('Problem 0050');


// Executed on: Intel i5-4690K CPU @ 3.50GHz, 16 GB RAM, Windows 10 64-bit

// Which prime, below 100, can be written as the sum of the most consecutive primes?
// Answer: prime 41 can be summed via 6 terms
// 0.536ms

// Which prime, below 1000, can be written as the sum of the most consecutive primes?
// Answer: prime 953 can be summed via 21 terms
// 0.784ms

// Which prime, below 10000, can be written as the sum of the most consecutive primes?
// Answer: prime 9521 can be summed via 65 terms
// 10.751ms

// Which prime, below 100000, can be written as the sum of the most consecutive primes?
// Answer: prime 92951 can be summed via 183 terms
// 605.82ms

// Which prime, below 1000000, can be written as the sum of the most consecutive primes?
// Answer: prime 997651 can be summed via 543 terms
// 2:04.375 (m:ss.mmm)
