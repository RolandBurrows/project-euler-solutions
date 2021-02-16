console.log('Running solution for Problem 0043...');

function permutePandigitals(source) {
  var panDititalsArray = [];
  if (source.length < 2) return source;
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (!source.includes(char)) { continue };
    const remainingSource = source.slice(0, i) + source.slice(i + 1, source.length);
    // recursive function
    for (var subPermutation of permutePandigitals(remainingSource))
      panDititalsArray.push(char + subPermutation)
  }
  return panDititalsArray;
}

function isSubDivisible(numberStr, charStart, prime) {
  var numSubStr = '';
  numSubStr = numSubStr.concat(numberStr.charAt(charStart));
  numSubStr = numSubStr.concat(numberStr.charAt(charStart+1));
  numSubStr = numSubStr.concat(numberStr.charAt(charStart+2));
  var numSum = parseInt(numSubStr);
  if (numSum % prime === 0) {
    return true;
  }
  return false;
}


var panDigitals = permutePandigitals('9876543210');
// 3,628,800 elements

panDigitalSum = 0;
panDigitals.forEach( function(candidateStr) {
  if (isSubDivisible(candidateStr, 1, 2) &&
      isSubDivisible(candidateStr, 2, 3) &&
      isSubDivisible(candidateStr, 3, 5) &&
      isSubDivisible(candidateStr, 4, 7) &&
      isSubDivisible(candidateStr, 5, 11) &&
      isSubDivisible(candidateStr, 6, 13) &&
      isSubDivisible(candidateStr, 7, 17)
     ) {
    console.log('Pattern Match:', candidateStr);
    panDigitalSum += parseInt(candidateStr);
  }
});

console.log('Find the sum of all 0 to 9 pandigital numbers with this property.');
console.log('Answer:', panDigitalSum);

// Pattern Match: 4160357289
// Pattern Match: 4130952867
// Pattern Match: 4106357289
// Pattern Match: 1460357289
// Pattern Match: 1430952867
// Pattern Match: 1406357289
// Answer: 16695334890
