console.log('Running solution for Problem 0044...');

function generatePentagonalNumbers() {
  var pentaNumsArray = [];
  for (var i = 1; true; i++) {
    var pentaNum = i*(((3*i)-1)/2);
    // 10,000,000 seems to be a good starting search cap
    if (pentaNum >= 10000000) {
      break;
    }
    pentaNumsArray.push(pentaNum);
  }
  return pentaNumsArray;
}

var pentaNums = generatePentagonalNumbers();

var pentaCandidates = [];
pentaNums.forEach (function(pentaNumJ) {
  pentaNums.forEach (function(pentaNumK) {
    var pentaSum = pentaNumJ + pentaNumK;
    if (!pentaNums.includes(pentaSum)) { return; }
    var pentaDiff = Math.abs(pentaNumJ - pentaNumK);
    if (!pentaNums.includes(pentaDiff)) { return; }
    // valid number if it gets to this point
    pentaCandidates.push([pentaDiff, pentaNumJ, pentaNumK]);
  });
});

// sort for least difference
pentaCandidates.sort(function(a,b){return a[0] < b[0]});

console.log('Find the pair of pentagonal numbers, Pj and Pk, and their difference.');
console.log('Pj:', pentaCandidates[0][1]);
console.log('Pk:', pentaCandidates[0][2]);
console.log('Diff:', pentaCandidates[0][0]);

// Pj: 1560090
// Pk: 7042750
// Diff: 5482660
