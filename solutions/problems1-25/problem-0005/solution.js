console.log('Running solution for Problem 0005...');

// challenge settings
const divisibleRange = 20;  // test with 10 first

/*
  turns out the brute-force method will take hours and hours
*/
// var value = 1;
// var counter = 0;
// while (value) {
//   console.log('testing value:', value);
//   for (num = 0; num <= divisibleRange; num++) {
//     if (value % num === 0) {
//       counter++;
//     } else {
//       break;
//     }
//   }
//   if (counter === divisibleRange) {
//     break;
//   } else {
//     counter = 0;
//   }
//   value++;
// }

/*
  so instead let's try fancy math & research instead.
  such as: the least common multiple, prime factorization method
*/

// var factorsMap = new Map();
var allPrimes = [];
var primeOccurrences = [];

// determine the prime factors for each number in the set
function primeFactors(n){
  const originalInput = n;
  var factors = [];
  var divisor = 2;
  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);  // store a found factor
      allPrimes.push(divisor);  // store for the next stage
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  primeOccurrences.push(factors);
  // factorsMap.set(`${originalInput}`, factors)
  return factors;
}

// run the algorithm for the desired range
for (num = 1; num <= divisibleRange; num++) {
  primeFactors(num);
}

// get the unique primes generated
var uniquePrimes = [...new Set(allPrimes.flat())];

// find the max occurance per prime
var factorCountsMap = new Map();
var count = 0;
var countArray = [];
uniquePrimes.forEach(function(prime) {
  primeOccurrences.forEach(function(element) {
    count = 0;
    for (var i = 0; i < element.length; ++i) {
      if (element[i] == prime) {
        count++;
      }
    }
    countArray.push(count);
  });
  countArray.sort((a, b) => (b - a)); // sort descending
  factorCountsMap.set(prime, countArray[0]); // store the factor count
  countArray = [];  // reset for the loop
});

// multiply all of the resulting prime factors together
var leastCommonMultiple = 1;
factorCountsMap.forEach(function(value, key) {
  // e.g. { 2 => 3, 5 => 1, 7 => 1 }
  // multiply the chain by 2**3 or 2*2*2, and 5 and 7
  leastCommonMultiple = (leastCommonMultiple * (key ** value));
});

// console.log('primeOccurrences:', primeOccurrences);
// console.log('factorCountsMap:', factorCountsMap);
console.log('Answer:', leastCommonMultiple);

// Answer: 232792560
