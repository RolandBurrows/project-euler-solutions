console.log('Running solution for Problem 0049...');

const searchCap = 9999;  // 4-digit sequence only

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

function arePermutations(numA, numB, numC) {
  var numAStr = numA.toString().split('').sort().join('');
  var numBStr = numB.toString().split('').sort().join('');
  var numCStr = numC.toString().split('').sort().join('');
  if (numAStr === numBStr && numBStr === numCStr) {
    return true;
  }
  return false;
}

function arePrime(primes, numA, numB, numC) {
  if (primes.includes(i) &&
      primes.includes(iShiftOnce) &&
      primes.includes(iShiftTwice)) {
    return true;
  }
  return false;
}


const primesArray = generatePrimes(searchCap);

var answer = '';
// we want the second sequence, so start higher than 1487
for (var i = 1488; i < searchCap; i++) {
  var iShiftOnce = i + 3330;
  var iShiftTwice = iShiftOnce + 3330;
  if (arePrime(primesArray, i, iShiftOnce, iShiftTwice)) {
    if (arePermutations(i, iShiftOnce, iShiftTwice)) {
      answer = answer.concat(i, iShiftOnce, iShiftTwice);
      break;
    }
  }
}

console.log('Answer:', answer);

// Answer: 296962999629
// (2969 6299 9629)
