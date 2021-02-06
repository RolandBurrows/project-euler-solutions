console.log('Running solution for Problem 0034...');

// precalculate the factorials to save time
const factorialMap = {
  '0': 1,
  '1': 1,
  '2': 2,
  '3': 6,
  '4': 24,
  '5': 120,
  '6': 720,
  '7': 5040,
  '8': 40320,
  '9': 362880
};

function sumOfDigitFactorials (num) {
  var numStr = num.toString();
  var numSum = 0;
  for (var i = 0; i < numStr.length; i++) {
    numSum += factorialMap[numStr.charAt(i)];
  }
  return numSum;
};

var searchCap = 1000000;  // try a high search cap first
var patternMatchSum = 0;
for (var n = 10; n <= searchCap; n++) {
  var charsSum = sumOfDigitFactorials(n);
  if (charsSum === n) {
    console.log('Pattern match:', n);
    patternMatchSum += n;
  }
}

console.log('Find the sum of all numbers which are equal to the sum of the factorial of their digits.')
console.log('Answer:', patternMatchSum);

// Pattern match: 145
// Pattern match: 40585
// Find the sum of all numbers which are equal to the sum of the factorial of their digits.
// Answer: 40730
