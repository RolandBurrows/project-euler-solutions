console.log('Running solution for Problem 0052...');
console.time('run time');

function sortDigits(number) {
  return number.toString().split('').sort().join('');
}

var i = 0;
while (true) {
  i++;
  if (sortDigits(2*i) === sortDigits(3*i)) {
    if (sortDigits(3*i) === sortDigits(4*i)) {
      if (sortDigits(4*i) === sortDigits(5*i)) {
        if (sortDigits(5*i) === sortDigits(6*i)) {
          console.log('Find the smallest positive integer x such that');
          console.log('2x, 3x, 4x, 5x, 6x, contain the same digits.');
          console.log('Answer:', i);
          console.log('1x:', i);
          console.log('2x:', 2*i);
          console.log('3x:', 3*i);
          console.log('4x:', 4*i);
          console.log('5x:', 5*i);
          console.log('6x:', 6*i);
          break;
        }
      }
    }
  }
}

console.timeLog('run time');

// Find the smallest positive integer x such that
// 2x, 3x, 4x, 5x, 6x, contain the same digits.
// Answer: 142857
// 1x: 142857
// 2x: 285714
// 3x: 428571
// 4x: 571428
// 5x: 714285
// 6x: 857142
// run time: 235.064ms
