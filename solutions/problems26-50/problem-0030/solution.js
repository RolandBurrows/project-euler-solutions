console.log('Running solution for Problem 0030...');

// challenge settings
const nthPower = 5;  // test with 4 first
const searchCap = 1000000;  // seems like a reasonable cap

var sumOfFifthsArray = [];
var sumOfFifthsNum = 0;
// the first "sum" that can be tested is 11
for (var num = 11; num < searchCap; num++) {
  var tempSum = 0;
  for (var i = 0; i < num.toString().length; i++) {
    var digit = num.toString().charAt(i);
    tempSum += (parseInt(digit) ** nthPower);
  }
  if (tempSum === num) {
    sumOfFifthsArray.push(num);
    sumOfFifthsNum += num;
  }
}

console.log('The numbers that can be written as the sum of fifth powers of their digits are:');
sumOfFifthsArray.forEach( function(number) {
  console.log(number);
});
console.log('and their sum is:');
console.log(sumOfFifthsNum);

// The numbers that can be written as the sum of fifth powers of their digits are:
// 4150
// 4151
// 54748
// 92727
// 93084
// 194979
// and their sum is:
// 443839
