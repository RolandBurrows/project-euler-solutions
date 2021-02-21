console.log('Running solution for Problem 0048...');

const nValue = 1000;  // test with 10 first

var biglyNumber = BigInt(0);

for (var i = 1; i <= nValue; i++) {
  var bigI = BigInt(i);
  biglyNumber += (bigI**bigI);
}

const biglyString = biglyNumber.toString();
const answer = biglyString.slice(biglyString.length - 10);

console.log('Answer:', answer);

// n = 10
// Answer: 0405071317

// n = 1000
// Answer: 9110846700
