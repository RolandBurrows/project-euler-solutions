console.log('Running solution for Problem 0014...');
console.time('Processing for Solution 0014 took');

// challenge settings
const startingNumCap = 1000000;  // test with 13 first

var num = 2;
var sequenceArray = [];
var collatzMap = new Map();
var collatzMapSorted;

for (num; num > 0; num++) {
  // reset operations for the next loop
  var operationNum = num;
  sequenceArray = [];
  sequenceArray.push(operationNum);
  // run algorithm
  while (operationNum != 1) {
    if (operationNum % 2 === 0) {
      // even
      operationNum = (operationNum / 2);
    } else {
      // odd
      operationNum = ((3 * operationNum) + 1);
    }
    // store link in chain
    sequenceArray.push(operationNum);
    // if chain complete, store result
    if (operationNum === 1) {
      collatzMap.set(num, sequenceArray.length);
    }
  }
  // all starting numbers tested. time to find longest chain.
  if (num >= startingNumCap) {
    // sort the chain map for length
    collatzMapSorted = [...collatzMap.entries()].sort((a, b) => b[1] - a[1]);
    break;
  }
}

console.log(`The starting number under ${startingNumCap} with the longest Collatz chain is '${collatzMapSorted[0][0]}' with chain length '${collatzMapSorted[0][1]}'.`);

console.timeLog('Processing for Solution 0014 took');

// The starting number under 1000000 with the longest Collatz chain is '837799' with chain length '525'.
// Processing for Solution 0014 took: 446115.461ms [7.4 minutes]
