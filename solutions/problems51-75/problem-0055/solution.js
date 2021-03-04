console.log('Running solution for Problem 0055...');
console.time('run time');

function isPalindrome(num) {
  var numRev = parseInt(num.toString().split("").reverse().join(""));
  if (numRev === num) { return true; }
  return false;
}

function reversify(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}


var lychrelCounter = 0;
for (var i = 1; i < 10000; i++) {
  var addedUp = i;
  for (var j = 1; j <= 50; j++) {
    var reverseNum = reversify(addedUp);
    addedUp += reverseNum;
    if (isPalindrome(addedUp)) { break; }
    if (j === 50) { lychrelCounter++; }
  }
}

console.log('How many Lychrel numbers are there below ten-thousand?');
console.log('Answer:', lychrelCounter);
console.timeLog('run time');

// How many Lychrel numbers are there below ten-thousand?
// Answer: 249
// run time: 54.513ms
