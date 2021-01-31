console.log('Running solution for Problem 0028...');

// challenge settings
/*
THE GRID
21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
*/
const gridSize = 1001;  // test with 5 first
var diagonalSum = 1;  // start with the central value included

for (var i = 3; i <= gridSize; i=i+2) {
  // top right diagonal
  var topRight = (i * i);
  diagonalSum += topRight;
  // top left
  var topLeft = topRight - (i - 1);
  diagonalSum += topLeft;
  // bottom left
  var botLeft = topLeft - (i - 1);
  diagonalSum += botLeft;
  // bottom right
  var botRight = botLeft - (i - 1);
  diagonalSum += botRight;
}

console.log('What is the sum of the numbers on the diagonals of the spiral?');
console.log('Answer:', diagonalSum);

// What is the sum of the numbers on the diagonals of the spiral?
// Answer: 669165001
