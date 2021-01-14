console.log('Running solution for Problem 0012...');
console.time('Processing for Solution 0012 took');

// challenge settings
const divisorsCap = 500;  // test with 5 first

// prime number factorization method
function divisorCount(number) {
  var divisors = 1;
  var factor = 2;
  // find the primes iteratively
  while ((factor * factor) <= number) {
    if (number % factor === 0) {
      var exponent = 0;
      // find the prime factors
      while ((number % factor) === 0) {
        number = (number / factor);
        exponent++;
      }
      // update the divisors count
      divisors = (divisors * (exponent + 1));
    }
    // determine next possible prime factor
    factor = factor == 2 ? 3 : (factor + 2);
  }

  // if number is a prime, it contributes a factor of 2
  if (number > 1) {
    divisors = (divisors * 2);
  }

  return divisors;
}

var triangleNum = 0;
// find the triangle numbers iteratively
for (var num = 1; true; num++) {
  triangleNum = triangleNum + num;
  // determine the number's divisors count
  var divisorsCount = divisorCount(triangleNum);
  if (divisorsCount >= divisorsCap) {
    console.log(`The first triangle-number with at least ${divisorsCap} divisors is: '${triangleNum}', (the ${num}-th triangle-number)`);
    break;
  }
}

console.timeLog('Processing for Solution 0012 took');

// The first triangle-number with at least 500 divisors is: '76576500', (the 12375-th triangle-number)
// Processing for Solution 0012 took: 292.337ms [0.3 seconds]
