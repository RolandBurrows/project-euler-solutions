console.log('Running solution for Problem 0002...');

// challenge settings
const fibonacciOne = 1;
const fibonacciTwo = 2;
const numberCap = 4000000;

var fibonacciPreviousOld = fibonacciOne;
var fibonacciPreviousNew = fibonacciTwo;
var fibonacciNextOld = fibonacciTwo;
var fibonacciNextNew = fibonacciOne + fibonacciTwo;
var fibonacciValues = [];
var sumTotal = 0;

// build the fibonacci values set
fibonacciValues.push(fibonacciPreviousOld);
fibonacciValues.push(fibonacciNextOld);

while ((fibonacciNextOld + fibonacciPreviousOld) < numberCap) {
  fibonacciPreviousNew = fibonacciNextOld;
  fibonacciNextNew = fibonacciNextOld + fibonacciPreviousOld;
  fibonacciValues.push(fibonacciNextNew);
  
  fibonacciPreviousOld = fibonacciPreviousNew;
  fibonacciNextOld = fibonacciNextNew;
}

// filter the even values into a new array
const fibonacciValuesEven = fibonacciValues.filter(num => num % 2 === 0);

// sum up all the values
fibonacciValuesEven.forEach(function(value) {
  sumTotal = sumTotal + value;
});

console.log('Answer:', sumTotal);
