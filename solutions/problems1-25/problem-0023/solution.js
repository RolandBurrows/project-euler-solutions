console.log('Running solution for Problem 0023...');
console.time('Processing for Solution 0023 took');

// challenge settings
const searchCap = 28124;  // "all integers greater than 28123"

function getDivisors(number) {
  var divisors = [];
  const stopSearch = Math.ceil(number / 2);
  for (var i = 1; i <= stopSearch; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

console.log(' | generating array of all abundant numbers');
var abundantNumbers = [];
// first abundant number is 12
for (var num = 12; num < searchCap; num++) {
  const numDivisors = getDivisors(num);
  var divisorSum = 0;
  numDivisors.forEach( function(div) {
    divisorSum += div;
  });
  // abundant if divisor sum exceeds number
  if (divisorSum > num) {
    abundantNumbers.push(num);
  }
}

console.log(' | scanning for numbers that can be abundant-summed');
var canBeSummed = [];
for (var i = 1; i < searchCap; i++) {
  var eject = false;
  var trySum = 0;
  for (var j=0; j < abundantNumbers.length; j++) {
    for (var k=0; k < abundantNumbers.length; k++) {
      trySum = abundantNumbers[j] + abundantNumbers[k];
      if ((trySum > i) || (trySum > searchCap)) {
        break;
      }
      if (trySum === i) {
        // console.log(`    ${i} can be summed (${abundantNumbers[j]} + ${abundantNumbers[k]})`);
        eject = true;
        canBeSummed.push(i);
        break;
      }
    };
  if (eject) { break; }
  };
}

console.log(' | summing the numbers that cant be abundant-summed');
var finalSum = 0;
for (var num = 1; num < searchCap; num++) {
  if (!canBeSummed.includes(num)) {
    finalSum += num;
  }
}

console.log('The sum of all the positive integers which cannot be written as the sum of two abundant numbers is:', finalSum);
console.timeLog('Processing for Solution 0023 took');

/*
Executed on:
- Intel i5-4690K CPU @ 3.50GHz, 16 GB RAM, Windows 10 64-bit

Running solution for Problem 0023...
 | generating array of all abundant numbers
 | scanning for numbers that can be abundant-summed
 | summing the numbers that cant be abundant-summed
The sum of all the positive integers which cannot be written as the sum of two abundant numbers is: 4179871
Processing for Solution 0023 took: 15.549s
*/
