console.log('Running solution for Problem 0029...');

// challenge settings
const stopSearch = 100;  // test with 5 first
var combosArray = [];

console.log('| generating all possible combinations');
for (var a = 2; a <= stopSearch; a++) {
  for (var b = 2; b <= stopSearch; b++) {
    combosArray.push(BigInt(a ** b));  // 100**100 is definitely outside standard int
  }
}

console.log(`| array has ${combosArray.length} total elements`);
combosArray = [...new Set(combosArray)];
console.log(`| array has ${combosArray.length} unique elements`);

console.log('The number of distinct terms in the sequence is:', combosArray.length);

// | array has 9801 total elements
// | array has 9183 unique elements
// The number of distinct terms in the sequence is: 9183
