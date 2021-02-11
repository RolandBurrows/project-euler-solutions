console.log('Running solution for Problem 0039...');

// challenge settings
const pMin = 12;  // the smallest such triangle is {3,4,5}, for which p = 12
const pMax = 1000;

// generate the storage map
var valuesMap = new Map();
for (var p = pMin; p <= pMax; p++) {
  valuesMap.set(p, []);  // fill with keys of p and values of empty array
}

// crunch the numbers
for (var p = pMin; p <= pMax; p++) {
  for (var a = 1; a < p; a++) {
    var aSquared = a * a;
    for (var b = 1; b < p; b++) {
      var bSquared = b * b;
      var cSquared = bSquared + aSquared;
      var c = Math.sqrt(cSquared);
      const perimeterCand = c + b + a;
      if (perimeterCand == p) {
        // console.log(`Pattern Match! p: ${perimeterTotal}, [${a}, ${b}, ${c}]`);
        var candidateArray = [a, b, c].sort((a, b) => a - b);  // sorted ascending
        var valuesArray = valuesMap.get(p);  // fetch the pattern matches for p
        // now check if candidate is already present (because [5,4,3] == [3,4,5])
        var cand = JSON.stringify([...candidateArray]);
        var target = JSON.stringify([...valuesArray]);
        var inclusion = target.indexOf(cand);
        if (inclusion == -1) {
          valuesArray.push(candidateArray);  // add the new pattern match to the array of arrays
        }
      }
    }
  }
}

// console.log(valuesMap.get(120));  // this should return 3 results

// sort by number of solutions
const solutionsMax = [...valuesMap].sort(function(a, b) { return b[1].length - a[1].length; });
const pFirstKey = [...solutionsMax][0][0];
const pFirstValue = [...solutionsMax][0][1];
// I was curious if the second-highest count was actually a tie or not
const pSecondKey = [...solutionsMax][1][0];
const pSecondValue = [...solutionsMax][1][1];

console.log('For which value of p ≤ 1000, is the number of solutions maximised?');
console.log(`Answer: ${pFirstKey}, which has ${pFirstValue.length} solutions:`);
console.log(pFirstValue);
console.log(`Runner up: ${pSecondKey} with ${pSecondValue.length} solutions.`);

// For which value of p ≤ 1000, is the number of solutions maximised?
// Answer: 840, which has 8 solutions:
// [
//   [ 40, 399, 401 ],
//   [ 56, 390, 394 ],
//   [ 105, 360, 375 ],
//   [ 120, 350, 370 ],
//   [ 140, 336, 364 ],
//   [ 168, 315, 357 ],
//   [ 210, 280, 350 ],
//   [ 240, 252, 348 ]
// ]
// Runner up: 720 with 6 solutions.
