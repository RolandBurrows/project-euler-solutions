console.log('Running solution for Problem 0038...');

const pandigitalStr = '123456789';

var pandigitalCandidates = [];
for (var i = 9; i < 9999; i++) {
  var concatProduct = '';
  var multipliers = [];
  for (var j = 1; j < 6; j++) {
    var smallProduct = i * j;
    multipliers.push(j);
    concatProduct = concatProduct.concat(smallProduct.toString());
    if (concatProduct.length >= pandigitalStr.length) { break };
  }
  if (concatProduct.split('').sort().join('') === pandigitalStr) {
    console.log('Pattern Match:', i, multipliers, concatProduct);
    pandigitalCandidates.push(parseInt(concatProduct));
  }
}

var sortedPandigitals = pandigitalCandidates.sort((a, b) => b - a);

console.log('What is the largest 1-9 pandigital number that can be formed as the concatenated product of an integer?');
console.log('Answer:', sortedPandigitals[0]);

// Pattern Match: 9 [ 1, 2, 3, 4, 5 ] 918273645
// Pattern Match: 192 [ 1, 2, 3 ] 192384576
// Pattern Match: 219 [ 1, 2, 3 ] 219438657
// Pattern Match: 273 [ 1, 2, 3 ] 273546819
// Pattern Match: 327 [ 1, 2, 3 ] 327654981
// Pattern Match: 6729 [ 1, 2 ] 672913458
// Pattern Match: 6792 [ 1, 2 ] 679213584
// Pattern Match: 6927 [ 1, 2 ] 692713854
// Pattern Match: 7269 [ 1, 2 ] 726914538
// Pattern Match: 7293 [ 1, 2 ] 729314586
// Pattern Match: 7329 [ 1, 2 ] 732914658
// Pattern Match: 7692 [ 1, 2 ] 769215384
// Pattern Match: 7923 [ 1, 2 ] 792315846
// Pattern Match: 7932 [ 1, 2 ] 793215864
// Pattern Match: 9267 [ 1, 2 ] 926718534
// Pattern Match: 9273 [ 1, 2 ] 927318546
// Pattern Match: 9327 [ 1, 2 ] 932718654
// Answer: 932718654
