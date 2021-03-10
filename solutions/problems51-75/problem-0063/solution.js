console.log('Running solution for Problem 0063...');
console.time('run time');

const a = BigInt(9);    // base number only a single digit
const b = BigInt(100);  // set some high number to capture all possibilities

let nthPowerMatches = [];

for (var i = 1; i <= a; i++) {
  for (var j = 1; j <= b; j++) {
    var result = i ** j;
    if (result.toString().length === j) {
      // console.log(i, j, result.toString().length, result);
      nthPowerMatches.push([i, j, result]);
    }
  }
}

console.log('How many n-digit positive integers exist which are also an nth power?');
console.log('Answer:', nthPowerMatches.length);

console.timeLog('run time');

// Answer: 49
// run time: 1.34ms
