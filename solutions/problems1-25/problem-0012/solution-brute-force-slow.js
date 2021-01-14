console.log('Running solution for Problem 0012...');
console.time('Processing for Solution 0012 took');

// challenge settings
const divisorsCap = 100;  // test with 5 first

var triangleNum = 0;
for (var num = 1; true; num++) {
  triangleNum = triangleNum + num;
  var divisorsArray = [];
  divisorsArray.push(triangleNum);
  var searchCap = Math.ceil(triangleNum / 2);
  for (var div = 1; div <= searchCap; div++) {
    if (triangleNum % div === 0) {
      divisorsArray.push(div);
    }
  }
  //console.log(num, triangleNum, divisorsArray);
  if (divisorsArray.length >= divisorsCap) {
    console.log(`The first triangle-number with ${divisorsCap} divisors is: '${triangleNum}', (the ${num}th triangle-number)`);
    break;
  }
}

console.timeLog('Processing for Solution 0012 took');

// The first triangle-number with 5 divisors is: '28', (the 7th triangle-number)
// Processing for Solution 0012 took: 0.794ms [0.8 seconds]

// REAL DATA
// 50 divisors, 4206.288ms [4.2 seconds]
// 100 divisors, 22090.500ms  [22.1 seconds]

// PREDICTED DATA
// 150 divisors, 35.8 minutes
// 250 divisors, 14 hours
// 500 divisors, 3.84 years

// Run on a 2017 MacBook Pro:
// The first triangle-number with 500 divisors is: '76576500', (the 12375th triangle-number)
// Processing for Solution 0012 took: 9:45.438 (m:ss.mmm)
