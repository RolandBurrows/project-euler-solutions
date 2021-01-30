console.log('Running solution for Problem 0027...');

const stopSearch = 100000;
var primesArray = [];

function generatePrimes() {
  var number = 1;
  while (true) {
    number++;
    var searchCeiling = Math.floor(Math.sqrt(number)) + 1;
    for (var num = 2; num <= searchCeiling; num++) {
      if ((number % num) === 0) { break; }
      if (num === searchCeiling) { primesArray.push(number); }
    }
    if (number > stopSearch) { break; }
  }
}

function quadratic(n, a, b) {
  return Math.abs((n*n)+(a*n)+b);
}

console.log('generating primes');
generatePrimes();

console.log('crunching nums');
var counter = 0;
var trackingArray = [0,0,0];
for (var a = 999; a > -999; a--) {
  counter = 0;
  for (var b = 1000; b > -1000; b--) {
    counter = 0
    for (var n = 0; n < 1000; n++) {
      var result = quadratic(n, a, b);
      if (primesArray.includes(result)) {
        counter++;
      } else {
        if (counter > trackingArray[0]) {
          trackingArray = [];
          trackingArray.push(counter);
          trackingArray.push(a);
          trackingArray.push(b);
        }
        break;
      }
    }
  }
}

console.log('n:', trackingArray[0]);
console.log('a:', trackingArray[1]);
console.log('b:', trackingArray[2]);
console.log('a*b', trackingArray[1]*trackingArray[2]);

// n: 71
// a: -61
// b: 971
// a*b: -59231
