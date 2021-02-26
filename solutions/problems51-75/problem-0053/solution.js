console.log('Running solution for Problem 0053...');
console.time('run time');

// challenge settings
const searchLimit = 1000000;
const nLimit = 100;

function bigIntFactorial(number) {
  var num = BigInt(number);
  for (var i = (num - BigInt(1)); i > 1; i--) {
    num *= i;
  }
  return num;
}

function combinatoricsChoose(n, r) {
  var numerator = bigIntFactorial(n);
  var denominator = (bigIntFactorial(r)*bigIntFactorial(n-r));
  // 0! === 1
  if (denominator === BigInt(0)) {
    return 1;
  };
  var result = numerator / denominator;
  return result;
}


var counter = 0;
for (var n = 1; n <= nLimit; n++) {
  for (var r = 0; r <= n; r++) {
    // if (n === 23 && r === 10) {
    //   console.log(n, r, combinatoricsChoose(n, r));
    // }
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
// run time: 102.606ms
