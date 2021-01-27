console.log('Running solution for Problem 0024...');

// challenge settings
const numberSet = [0,1,2,3,4,5,6,7,8,9];
//const numberSet = [0,1,2];
const desiredIndex = 999999;  // "one million" with zero index

var lexiPerms = [];
var pastChars = [];

function getPermutations(source) {
  for (var i = 0; i < source.length; i++) {
    // console.log(` | testing ${i}`);
    var char = source.splice(i, 1)[0];
    pastChars.push(char);
    // console.log(` |  pushed ${char} into past: ${pastChars}`);
    if (source.length === 0) {
      // console.log(` new combo found: ${pastChars.slice().join('')}`);
      lexiPerms.push(
        pastChars.slice().join('')
      );
    }
    // console.log(` | let's go again!`);
    getPermutations(source);
    source.splice(i, 0, char);
    // console.log(` | popping ${pastChars[pastChars.length-1]} from past: ${pastChars}`);
    pastChars.pop();
  }
  return lexiPerms
};

const lexiNums = getPermutations(numberSet);

console.log(`The ${desiredIndex + 1}-th lexicographic permutation of the digits '${numberSet}' is: ${lexiNums[desiredIndex]}`);

// Running solution for Problem 0024...
// The 1000000-th lexicographic permutation of the digits '0,1,2,3,4,5,6,7,8,9' is: 2783915460
