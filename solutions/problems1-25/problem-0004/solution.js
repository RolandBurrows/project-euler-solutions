console.log('Running solution for Problem 0004...');

// challenge settings
const digitsLength = 3;  // test with 2 first

// start at maximum values for products
var startNum = parseInt("9".repeat(digitsLength));
var floorNum = parseInt("9".repeat(digitsLength - 1));  // no point in calculating beyond this limit
var productSourceOne = startNum;
var productSourceTwo = startNum;

var productVals = new Map();
// build map of all products and their contributing values
for (numOne = productSourceOne; numOne > floorNum; numOne--) {
  for (numTwo = productSourceTwo; numTwo > floorNum; numTwo--) {
    var product = numOne * numTwo;
    var reversedProduct = String(product).split("").reverse().join("");
    if (String(product) === reversedProduct) {
      // palindrome detected!
      productVals.set(product, `${numOne} x ${numTwo}`);
    }
  }
}

// extract the winner
const highestPalindrome = Math.max(...productVals.keys());
const palindromeContributors = productVals.get(highestPalindrome);

console.log(`Answer: ${highestPalindrome} == ${palindromeContributors}`);

// Answer: 906609 == 913 x 993
