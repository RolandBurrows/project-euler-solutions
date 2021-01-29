console.log('Running solution for Problem 0025...');

//challenge settings
const stopSearch = 1000;

var fibNums = [BigInt(1),BigInt(1)];  // Fibonacci quickly exceed regular int size

function fibbo(num1, num2) {
  var newNum = num1 + num2;
  return newNum;
};

var counter = 2;
while (fibNums[fibNums.length-1].toString().length < stopSearch) {
  var step = fibbo(fibNums[0], fibNums[1]);
  fibNums.push(step);
  counter++;  // the desired index
  fibNums.shift();  // avoid running out of javascript heap memory
}

console.log(`What is the index of the first term in the Fibonacci sequence to contain ${stopSearch} digits?`, counter);

// Running solution for Problem 0025...
// What is the index of the first term in the Fibonacci sequence to contain 1000 digits? 4782
