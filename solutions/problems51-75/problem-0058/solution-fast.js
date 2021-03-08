console.log('Running solution for Problem 0058...');
console.time('run time');

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

function leastFactor(n){
  if (n === 0) { return 0; }
  if (n % 1 || n*n < 2) { return 1; }
  if (n % 2 === 0) { return 2; }
  if (n % 3 === 0) { return 3; }
  if (n % 5 === 0) { return 5; }
  var m = Math.sqrt(n);
  for (var i = 7; i <= m; i+=30) {
    if (n % i === 0)      { return i; }
    if (n % (i+4) === 0)  { return i+4; }
    if (n % (i+6) === 0)  { return i+6; }
    if (n % (i+10) === 0) { return i+10; }
    if (n % (i+12) === 0) { return i+12; }
    if (n % (i+16) === 0) { return i+16; }
    if (n % (i+22) === 0) { return i+22; }
    if (n % (i+24) === 0) { return i+24; }
  }
  return n;
}

function isPrime(n) {
 if (isNaN(n) || n % 1 || n < 2) { return false; }
 if (n === leastFactor(n)) { return true; }
 return false;
}
console.assert(isPrime(1000000007) === true, 'isPrime true');
console.assert(isPrime(1280000377) === false, 'isPrime false');

let searchCap = 100000;
let i;
let ratio;
let diagnonalPrimes = [];
let diagnonalComposites = [1];

for (i = 3; i <= searchCap; i=i+2) {
  var bottomRight = (i * i);
  diagnonalComposites.push(bottomRight);  // squares will always be composite

  var bottomLeft = bottomRight - (i - 1);
  if (isPrime(bottomLeft)) {
    diagnonalPrimes.push(bottomLeft);
  } else {
    diagnonalComposites.push(bottomLeft);
  }

  var topLeft = bottomLeft - (i - 1);
  if (isPrime(topLeft)) {
    diagnonalPrimes.push(topLeft);
  } else {
    diagnonalComposites.push(topLeft);
  }

  var topRight = topLeft - (i - 1);
  if (isPrime(topRight)) {
    diagnonalPrimes.push(topRight);
  } else {
    diagnonalComposites.push(topRight);
  }

  ratio = (diagnonalPrimes.length / (diagnonalPrimes.length + diagnonalComposites.length));
  if (ratio < 0.1) {
    break;
  }
}
console.log('What is the side length for which the ratio of primes along both diagonals first falls below 10%?');
console.log('Answer: side length of', i);
console.log('Primes count:', diagnonalPrimes.length);
console.log('All numbers count:', diagnonalPrimes.length + diagnonalComposites.length);
console.log('Ratio:', ratio.toFixed(6));

console.timeLog('run time');

// Answer: side length of 26241
// Primes count: 5248
// All numbers count: 52481
// Ratio: 0.099998
// run time: 110.534ms
