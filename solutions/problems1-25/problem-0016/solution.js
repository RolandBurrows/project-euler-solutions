console.log('Running solution for Problem 0016...');

// challenge settings
const powerValue = 1000;  // test with 15 first

// unlike problem 0013, we can't avoid javascript's inability
// to store numbers larger than 2**53 anymore
const powerCalc = BigInt(2 ** powerValue);

// cast to string and sum the values
var calcString = powerCalc.toString();
var summation = 0;
for (var i = 0; i < calcString.length; i++) {
  summation = summation + Number(calcString.charAt(i));
}

console.log(`The sum of the digits of (2 ** ${powerValue}) is: '${summation}'.`);

// The sum of the digits of (2 ** 1000) is: '1366'.
