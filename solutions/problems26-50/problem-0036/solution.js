console.log('Running solution for Problem 0036...');

// challenge settings
const searchCap = 1000000;  // test with 600 first, to find 585

function isPalindrome (numStr) {
  var numRevStr = numStr.split("").reverse().join("");
  if (numRevStr === numStr) {
    return true;
  }
  return false;
}

var palindromeSum = 0;
for (var num = 1; num < searchCap; num++) {
  var numBaseTen = num.toString();
  var numBaseTwo = num.toString(2);
  if (isPalindrome(numBaseTen) && isPalindrome(numBaseTwo)){
    console.log('Pattern Match:', num, numBaseTwo);
    palindromeSum += num;
  }
}

console.log(`Find the sum of all numbers, less than ${searchCap}, which are palindromic in base 10 and base 2.`);
console.log('Answer:', palindromeSum);

// Pattern Match: 1 1
// Pattern Match: 3 11
// Pattern Match: 5 101
// Pattern Match: 7 111
// Pattern Match: 9 1001
// Pattern Match: 33 100001
// Pattern Match: 99 1100011
// Pattern Match: 313 100111001
// Pattern Match: 585 1001001001
// Pattern Match: 717 1011001101
// Pattern Match: 7447 1110100010111
// Pattern Match: 9009 10001100110001
// Pattern Match: 15351 11101111110111
// Pattern Match: 32223 111110111011111
// Pattern Match: 39993 1001110000111001
// Pattern Match: 53235 1100111111110011
// Pattern Match: 53835 1101001001001011
// Pattern Match: 73737 10010000000001001
// Pattern Match: 585585 10001110111101110001
// Find the sum of all numbers, less than 1000000, which are palindromic in base 10 and base 2.
// Answer: 872187
