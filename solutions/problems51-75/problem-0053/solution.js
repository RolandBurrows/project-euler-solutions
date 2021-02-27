console.log('Running solution for Problem 0053...');
console.time('run time');

// challenge settings
const searchLimit = 1000000;
const nLimit = 100;

function bigIntFactorial(number) {
  if (number === 0) {
    return BigInt(1);  // 0! === 1
  }
  var result = 1;
  for (var i = 2; i <= number; i++) {
    result *= i;
  }
  return BigInt(result);
}
console.assert(bigIntFactorial(10) === BigInt(3628800));

function combinatoricsChoose(n, r) {
  var numerator = bigIntFactorial(n);
  var denominator = (bigIntFactorial(r)*bigIntFactorial(n-r));
  // N choose 0 === 1, avoid divide by zero
  if (denominator === BigInt(0)) {
    return 1;
  };
  var result = numerator / denominator;
  return result;
}
console.assert(combinatoricsChoose(10,0) === BigInt(1));
console.assert(combinatoricsChoose(15,1) === BigInt(15));
console.assert(combinatoricsChoose(23,10) === BigInt(1144066));
console.assert(combinatoricsChoose(100,100) === BigInt(1));


var counter = 0;
for (var n = 1; n <= nLimit; n++) {
  for (var r = 0; r <= n; r++) {
    if (combinatoricsChoose(n, r) > searchLimit) {
      counter++;
    }
  }
}

console.log('How many, not necessarily distinct, values of (n, r) <= 100 are greater than one-million?')
console.log('Answer:', counter);

console.timeLog('run time');


// How many, not necessarily distinct, values of (n, r) <= 100 are greater than one-million?
// Answer: 4075
// run time: 8.245ms
