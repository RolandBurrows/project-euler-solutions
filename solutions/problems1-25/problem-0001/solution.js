console.log('Running solution for Problem 0001...');

// challenge settings
const multiplesChoiceOne = 3;
const multiplesChoiceTwo = 5;
const numberCap = 1000;

var multiplesArray = [];
var sumTotal = 0;

// multiples check
for (i = 0; i < numberCap; i++) {
  if (i % multiplesChoiceOne === 0) {
    multiplesArray.push(i);
  }
  if (i % multiplesChoiceTwo === 0) {
    multiplesArray.push(i);
  }
}

// uniqify array (in case of numbers that fit all the multiples)
var uniqueItems = [...new Set(multiplesArray)];
uniqueItems.forEach(function(number) {
  sumTotal = sumTotal + number
});

console.log('Answer:', sumTotal);

// Answer: 233168
