console.log('Running solution for Problem 0021...');

// challenge settings
const searchCap = 10000;  // test with 285 first
var amicableNums = [];

function getDivisors(number) {
  var divisors = [];
  const stopSearch = Math.ceil(number / 2);
  for (var i = 1; i <= stopSearch; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

function sumDivisors(divisorsArray) {
  var sum = 0;
  divisorsArray.forEach( function(number) {
    sum += number;
  });
  return sum;
}

function findAmicableNumbers() {
  for (var num = 4; num <= searchCap; num++) {
    var candidateSumOne = sumDivisors(getDivisors(num));
    var candidateSumTwo = sumDivisors(getDivisors(candidateSumOne));
    if ((candidateSumOne != candidateSumTwo) && (candidateSumTwo === num)) {
      // console.log('Amicable Pair found:', num, candidateSumOne);
      amicableNums.push(num);
      amicableNums.push(candidateSumOne);
    }
  }
}

// run!
findAmicableNumbers()

// e.g. 220 will find 284, and 284 will find 220
var uniqAmicables = amicableNums.filter((v, i, a) => a.indexOf(v) === i);

var amicableSum = 0;
uniqAmicables.forEach( function(number) {
  amicableSum += number;
});

console.log(`The sum of all the amicable numbers under ${searchCap} is:`, amicableSum);

// The sum of all the amicable numbers under 10000 is: 31626
