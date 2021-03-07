console.log('Running solution for Problem 0058...');

/*
THE GRID
37 36 35 34 33 32 31
38 17 16 15 14 13 30
39 18  5  4  3 12 29
40 19  6  1  2 11 28
41 20  7  8  9 10 27
42 21 22 23 24 25 26
43 44 45 46 47 48 49
*/

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

let searchCap = 30000;
let i;
let ratio;

console.log('- generating primes');
console.time('- generating primes took');
let primesArray = generatePrimes(searchCap**2);
console.timeLog('- generating primes took');
let diagnonalPrimes = [];
let diagnonalComposites = [1];

console.log('- checking the spiral');
console.time('- checking the spiral took');
for (i = 3; i <= searchCap; i=i+2) {
  var bottomRight = (i * i);
  diagnonalComposites.push(bottomRight);  // squares will always be composite

  var bottomLeft = bottomRight - (i - 1);
  if (primesArray.includes(bottomLeft)) {
    diagnonalPrimes.push(bottomLeft);
  } else {
    diagnonalComposites.push(bottomLeft);
  }

  var topLeft = bottomLeft - (i - 1);
  if (primesArray.includes(topLeft)) {
    diagnonalPrimes.push(topLeft);
  } else {
    diagnonalComposites.push(topLeft);
  }

  var topRight = topLeft - (i - 1);
  if (primesArray.includes(topRight)) {
    diagnonalPrimes.push(topRight);
  } else {
    diagnonalComposites.push(topRight);
  }

  ratio = (diagnonalPrimes.length / (diagnonalPrimes.length + diagnonalComposites.length));
  if (ratio < 0.1) {
    break;
  }
}
console.timeLog('- checking the spiral took');

console.log('What is the side length for which the ratio of primes along both diagonals first falls below 10%?');
console.log('Answer: side length of', i);
console.log('Primes count:', diagnonalPrimes.length);
console.log('All numbers count:', diagnonalPrimes.length + diagnonalComposites.length);
console.log('Ratio:', ratio.toFixed(6));

// Running solution for Problem 0058...
// - generating primes
// - generating primes took: 1:25:49.831 (h:mm:ss.mmm)
// - checking the spiral
// - checking the spiral took: 37:13.572 (m:ss.mmm)
// What is the side length for which the ratio of primes along both diagonals first falls below 10%?
// Answer: side length of 26241
// Primes count: 5248
// All numbers count: 52481
// Ratio: 0.099998
