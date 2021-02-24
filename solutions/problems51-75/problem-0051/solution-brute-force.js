console.log('Running solution for Problem 0051...');
console.time('run time');

const searchStart = 56000;
const searchCap = 1000000;
const familyLength = 8;  // test with 7 first

function generatePrimes(startNum, stopNum) {
  var primesArray = [];
  for (var number = startNum; number <= stopNum; number++) {
    var searchCeiling = Math.floor(Math.sqrt(number)) + 1;
    for (var num = 2; num <= searchCeiling; num++) {
      if ((number % num) === 0) { break; }
      if (num === searchCeiling) {
        primesArray.push(number);
      }
    }
  }
  return primesArray;
}

// e.g. prime 499 would get a replacement template set of
// ["001", "010", "011", "100", "101", "110", "111"]
function getReplacementTemplates(number) {
  var numLen = number.toString().length;
  var binaryTemplates = [];
  for (var i = 1; i <= number; i++) {
    var binaryCandidate = i.toString(2);
    if (binaryCandidate.length > numLen) { break; }
    if (binaryCandidate.length < numLen) {
      while (binaryCandidate.length < numLen) {
        // pad with 0's for smaller binaries
        binaryCandidate = "0" + binaryCandidate;
      }
      binaryTemplates.push(binaryCandidate);
    }
    if (binaryCandidate.length === numLen) {
      binaryTemplates.push(binaryCandidate);
    }
  }
  binaryTemplates = [...new Set(binaryTemplates)];  // unique values
  return binaryTemplates;
}

function replaceValues(number, template, replacer) {
  var replacedNum = number.toString();
  // replace all template values of '1' with the replacer number
  for (var a = 0; a < replacedNum.length; a++) {
    if (template.charAt(a) === '1') {
      replacedNum = replacedNum.split('');
      replacedNum[a] = replacer;
      replacedNum = replacedNum.join('');
    }
  }
  return parseInt(replacedNum);
}


const primesArray = generatePrimes(searchStart, searchCap);

// test each prime, increasingly
var solutionFound = false;
for (var i = 0; i < primesArray.length; i++) {
  var primeNum = primesArray[i];
  var replacementTemplates = getReplacementTemplates(primeNum);
  // test each pattern of number replacement
  for (var j = 0; j < replacementTemplates.length; j++) {
    var template = replacementTemplates[j];
    var primeFamily = []
    // test each value 0-9
    for (var k = 0; k < 10; k++) {
      var replacedNum = replaceValues(primeNum, template, k);
      // ignore templates that have a leading zero, which shortens the num
      if (replacedNum < primeNum) { continue; }
      if (primesArray.includes(replacedNum)) {
        primeFamily.push(replacedNum);
      }
    }
    primeFamily = [...new Set(primeFamily)];  // unique values only
    if (primeFamily.length === familyLength) {
      console.log(`Find the smallest prime which is part of an ${familyLength} prime value family.`);
      console.log('Answer:', primeFamily[0]);
      console.log('with replacement pattern:', template);
      console.log('with family:', primeFamily);
      solutionFound = true;
      break;
    }
  }
  if (solutionFound) { break; }
}

console.timeLog('run time');


// Executed on: Intel i5-4690K CPU @ 3.50GHz, 16 GB RAM, Windows 10 64-bit

// searchStart = 1000
// familyLength = 7
// Find the smallest prime which is part of an 7 prime value family.
// Answer: 56003
// with replacement pattern: 00110
// with family: [
//   56003, 56113,
//   56333, 56443,
//   56663, 56773,
//   56993
// ]
// run time: 57.431s

// searchStart = 56000
// familyLength = 8
// Find the smallest prime which is part of an 8 prime value family.
// Answer: 121313
// with replacement pattern: 101010
// with family: [
//   121313, 222323,
//   323333, 424343,
//   525353, 626363,
//   828383, 929393
// ]
// run time: 1:23.496 (m:ss.mmm)
