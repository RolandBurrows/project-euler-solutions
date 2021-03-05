console.log('Running solution for Problem 0056...');
console.time('run time');

function sumOfDigits(numStr) {
  var total = 0;
  var digitsArray = numStr.split('');
  digitsArray.forEach( function(digit) {
    total += parseInt(digit);
  });
  return total;
}
console.assert(sumOfDigits('123456789') === 45, 'sumOfDigits');

var maxSum = [0, 0, 0];
for (var a = BigInt(1); a < 100; a++) {
  for (var b = BigInt(1); b < 100; b++) {
    var result = BigInt(a**b).toString();
    var sum = sumOfDigits(result);
    if (sum > maxSum[0]) {
      maxSum = [sum, a, b];
    }
  }
}

console.log('What is the maximum digital sum?');
console.log(`Answer: sum = ${maxSum[0]} where a = ${maxSum[1]} and b = ${maxSum[2]}`);
console.timeLog('run time');

// Answer: sum = 972 where a = 99 and b = 95
// run time: 60.113ms
