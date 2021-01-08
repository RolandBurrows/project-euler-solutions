console.log('Running solution for Problem 0006...');

// challenge settings
const numbersRange = 100;  // test first, 10 = 2640

// sum of the squares
var sumOfSquares = 0;
for (var num = 1; num <= numbersRange; num++) {
  sumOfSquares = sumOfSquares + (num ** 2);
}

// square of the sum
var squareOfSums = 0;
for (var num = 1; num <= numbersRange; num++) {
  squareOfSums = squareOfSums + num;
}
squareOfSums = squareOfSums ** 2;

const sumSquareDifference = squareOfSums - sumOfSquares;

console.log('Answer:', sumSquareDifference);

// Answer: 25164150
