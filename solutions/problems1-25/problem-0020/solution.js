console.log('Running solution for Problem 0020...');

// challenge settings
const targetNum = BigInt(100);  // test with 10 first

// involved types need to all be BigInt
function bigIntFactorial(num) {
  for (var i = (num - BigInt(1)); i > 1; i--) {
    num = (num * i);
  }
  return num;
}

var factorialNum = bigIntFactorial(targetNum);
// this removes the 'n' at the end, for JS BigInt, and makes the chars parsable
var factorialString = factorialNum.toString();

// sum the nums
var numSum = 0;
for (var char = 0; char < factorialString.length; char++) {
  numSum += Number(factorialString.charAt(char));
}

console.log(`The sum of the digits in the number ${targetNum}! is: '${numSum}'.`);

// The sum of the digits in the number 100! is: '648'.
