console.log('Running solution for Problem 0046...');

const searchCap = 10000;

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


const primesArray = generatePrimes();
var solutionValue = 0;
// search number candidates
for (var i = 9; i < searchCap; i=i+2) {
  if (primesArray.includes(i)) { continue; }  // composite numbers only
  var equality = 0;
  var equalityFound = false;
  var solutionFound = false;
  // iterate through the prime numbers
  for (let index = 0; index < primesArray.length; index++) {
    var tempEquality = equality;
    tempEquality += primesArray[index];
    var tempNestedEquality = 0;
    // iterate through integer squares
    for (var j = 1; j <= searchCap; j++) {
      tempNestedEquality = tempEquality;
      tempNestedEquality += (2*(j*j));
      if (tempNestedEquality === i) {
        //console.log(`${i} == ${primesArray[index]} + 2*(${j}^2)`);
        equalityFound = true;
        break;
      }
      // end of the search space
      if ((index === primesArray.length-1) && (j === searchCap)) {
        solutionFound = true;
        solutionValue = i;
        break;
      }
    }
    if (solutionFound || equalityFound) { break; }
  };
  if (solutionFound) { break; }
}

console.log('What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?');
console.log('Answer:', solutionValue);

// Answer: 5777
