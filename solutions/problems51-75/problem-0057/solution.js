console.log('Running solution for Problem 0057...');
console.time('run time');

let expansionsCap = 1000;
let numerator = BigInt(3);
let denominator = BigInt(2);
let counter = 0;

// formulae:
// n" = n' + 2*d'
// d" = n' + d'
for (var i = 1; i <= expansionsCap; i++) {
  numerator += (BigInt(2) * denominator);
  denominator = (numerator - denominator);
  if (numerator.toString().length > denominator.toString().length) {
    counter++;
  }
}

console.log('How many fractions contain a numerator with more digits than the denominator?');
console.log('Answer:', counter);
console.timeLog('run time');

// Answer: 153
// run time: 13.972ms
