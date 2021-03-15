console.log('Running solution for Problem 0092...');
console.time('run time');

let searchCap = 10000000;

function runChain(num) {
  if (num === 1) { return 1; }
  if (num === 89) { return 89; }
  var digits = num.toString().split('');
  var squareSum = 0;
  digits.forEach( function(digit) {
    squareSum += digit ** 2;
  });
  return runChain(squareSum);  // recursive until return
}
console.assert(runChain(44) === 1);
console.assert(runChain(85) === 89);

let eightyNineCounter = 0;

for (var i = 1; i < searchCap; i++) {
  if (runChain(i) === 89) {eightyNineCounter++;}
}

console.log('How many starting numbers below ten million will arrive at 89?');
console.log('Answer:', eightyNineCounter);
console.log(`${((eightyNineCounter/searchCap)*100).toFixed(1)}% of ${searchCap}`);

console.timeLog('run time');

// Answer: 8581146
// 85.8% of 10000000
// run time: 11.485s
