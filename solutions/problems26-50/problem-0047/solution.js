console.log('Running solution for Problem 0047...');

const searchCap = 1000000;
const startSearch = 1;
const consecDistict = 4;  // test with 2 and 3

function generatePrimes() {
  var primesArray = [2];
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
  return primesArray;
}

function determinePrimeFactors(number, knownPrimes) {
  var primeFactors = [];
  for (var i = 2; i <= number; i++) {
    if (number % i !== 0) { continue; }  // if division results in a float, skip
    if (!knownPrimes.includes(i)) { continue; }
    number = number / i;  // recursive search
    primeFactors.push(i);
  }
  return primeFactors;
}


const primesArray = generatePrimes();

// search number candidates
var solution = [];
for (var i = startSearch; i < searchCap; i++) {
  // find the closest prime to i, to limit the search space
  var primeCap = primesArray.reduce( function(prev, curr) {
    return (Math.abs(curr - i) < Math.abs(prev - i) ? curr : prev);
  });
  // create a slice of those primes
  var primesSlice = primesArray.slice(0, primesArray.indexOf(primeCap));

  var primeFacts = determinePrimeFactors(i, primesSlice);
  if (primeFacts.length === consecDistict) {
    solution.unshift(i);  // push to front of array
  }

  // check first N items for equality, break for solution
  if (solution.length >= consecDistict) {
    var solutionSlice = [];
    for (var j = 0; j < consecDistict; j++) {
      solutionSlice.push(solution[j]+j);
    }
    var solutionUniq = [...new Set(solutionSlice)];
    if (solutionUniq.length === 1) {
      solution = solution.slice(0,consecDistict);
      break;
    }
  }
}

var solutionSorted = solution.sort(function(a, b) { return a - b; });

console.log(`Find the first ${consecDistict} consecutive integers to have ${consecDistict} distinct prime factors each.`);
console.log('Answer:');
solutionSorted.forEach( function(consecutiveNum) {
  console.log(consecutiveNum, determinePrimeFactors(consecutiveNum, primesArray));
});

// Find the first 2 consecutive integers to have 2 distinct prime factors each.
// Answer:
// 14 [ 2, 7 ]
// 15 [ 3, 5 ]

// Find the first 3 consecutive integers to have 3 distinct prime factors each.
// Answer:
// 644 [ 2, 7, 23 ]
// 645 [ 3, 5, 43 ]
// 646 [ 2, 17, 19 ]

// Find the first 4 consecutive integers to have 4 distinct prime factors each.
// Answer:
// 134043 [ 3, 7, 13, 491 ]
// 134044 [ 2, 23, 31, 47 ]
// 134045 [ 5, 17, 19, 83 ]
// 134046 [ 2, 3, 11, 677 ]
