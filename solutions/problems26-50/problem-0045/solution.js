console.log('Running solution for Problem 0045...');

const searchCap = 10000000000;  // ten billion
var triangleNums = [];
var pentagonalNums = [];
var hexagonalNums = [];

console.log('Generating triangle numbers.');
for (var i = 1; true; i++) {
  var nextTriangleNum = (i*(i+1))/2;
  if (nextTriangleNum > searchCap) { break; }
  triangleNums.push(nextTriangleNum);
}

console.log('Generating pentagonal numbers.');
for (var i = 1; true; i++) {
  var nextPentagonalNum = (i*((3*i)-1))/2;
  if (nextPentagonalNum > searchCap) { break; }
  pentagonalNums.push(nextPentagonalNum);
}

console.log('Checking against hexagonal numbers.');
var indexTriOne = 0;
var indexPentOne = 0;
var indexHexOne = 0;
var valueOne = 0;
var indexTriTwo = 0;
var indexPentTwo = 0;
var indexHexTwo = 0;
var valueTwo = 0;
var tripleMatchCounter = 0;
// start sequence at 143: T285 = P165 = H143 = 40755
for (var i = 143; true; i++) {
  var nextHexagonalNum = (i*((2*i)-1));
  // hexagonalNums.push(nextHexagonalNum);
  if (triangleNums.includes(nextHexagonalNum) && pentagonalNums.includes(nextHexagonalNum)) {
    // console.log('Pattern Match:', nextHexagonalNum);
    tripleMatchCounter++;
    if (tripleMatchCounter == 1) {
      indexTriOne = triangleNums.indexOf(nextHexagonalNum)+1;
      indexPentOne = pentagonalNums.indexOf(nextHexagonalNum)+1;
      indexHexOne = i;
      valueOne = nextHexagonalNum;
    }
    if (tripleMatchCounter == 2) {
      indexTriTwo = triangleNums.indexOf(nextHexagonalNum)+1;
      indexPentTwo = pentagonalNums.indexOf(nextHexagonalNum)+1;
      indexHexTwo = i;
      valueTwo = nextHexagonalNum;
      break;
    }
  }
}

console.log('Find the first two triangle numbers that are also pentagonal and hexagonal.');
console.log(`T:${indexTriOne} = P:${indexPentOne} = H:${indexHexOne} = ${valueOne}`);
console.log(`T:${indexTriTwo} = P:${indexPentTwo} = H:${indexHexTwo} = ${valueTwo}`);

// T:285 = P:165 = H:143 = 40755
// T:55385 = P:31977 = H:27693 = 1533776805
