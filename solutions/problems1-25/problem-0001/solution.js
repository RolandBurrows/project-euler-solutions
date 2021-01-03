console.log('Running solution for Problem 0001...');

// challenge settings
const multiplesChoiceOne = 3;
const multiplesChoiceTwo = 5;
const numberCap = 1000;

var matchingNumbersArray = [];
var sumTotal = 0;

// multiples check
for (num = 0; num < numberCap; num++) {
  if ((num % multiplesChoiceOne === 0) || (num % multiplesChoiceTwo === 0)) {
    matchingNumbersArray.push(num);
  }
}

// sum all the matching numbers
matchingNumbersArray.forEach(function(number) {
  sumTotal = sumTotal + number;
});

console.log('Answer:', sumTotal);

// Answer: 233168
