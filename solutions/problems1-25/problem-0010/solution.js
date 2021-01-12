console.log('Running solution for Problem 0010...');
console.time('Processing for Solution 0010 took');

// challenge settings
const numberCeiling = 2000000;  // test with 10 first

var numberCandidate = 2;
var primesArray = [];
primesArray.push(2);  // start searching after 2

while (true) {
  numberCandidate++;
  // alert user what range is being calculated, in 100k increments
  if (numberCandidate % 100000 === 0) {
    console.log('Checking numbers after:', numberCandidate);
  }
  // check to see if number is prime, stop at beyond sqrt(nnumber)
  var searchCeiling = Math.floor(Math.sqrt(numberCandidate)) + 1;
  for (var num = 2; num <= searchCeiling; num++) {
    if ((numberCandidate % num) === 0) {
      break;
    }
    if (num === searchCeiling) {
      //console.log(`  ${numberCandidate} is prime`);
      primesArray.push(numberCandidate);
    }
  }
  if (numberCandidate >= numberCeiling) {
    break;
  }
}

console.log('Set of matching primes found. Calculating sum...')

var primeSum = 0;
primesArray.forEach( function(prime) {
  primeSum = primeSum + prime;
});

console.log(`The sum of all primes below ${numberCeiling} is '${primeSum}'.`);
console.timeLog('Processing for Solution 0010 took');

// The sum of all primes below 2000000 is '142913828922'.
// Processing for Solution 0010 took: 639931.140ms [10.7 minutes]
