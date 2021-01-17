console.log('Running solution for Problem 0015...');

// challenge settings
const gridSquareSize = 6;  // test with 2 first

// why doesn't Node.js have a built-in factorial function?
function factorial(num) {
  for (var i = (num - 1); i > 1; i--) {
    num = (num * i);
  }
  return num;
}

// https://towardsdatascience.com/understanding-combinatorics-number-of-paths-on-a-grid-bddf08e28384
// formula: (2n)! / ((n!) * (n!))
var numberOfPaths = (factorial(2*gridSquareSize))/((factorial(gridSquareSize)*factorial(gridSquareSize)));
// above will output '137846528820.00003' due to precision errors, so we need to return it to an Int with Math.floor

console.log(`The number of possible routes through a ${gridSquareSize}x${gridSquareSize} grid are: '${Math.floor(numberOfPaths)}'.`);

// The number of possible routes through a 20x20 grid are: '137846528820'.
