console.log('Running solution for Problem 0008...');

// challenge settings
const multiDigit01 = '73167176531330624919225119674426574742355349194934';
const multiDigit02 = '96983520312774506326239578318016984801869478851843';
const multiDigit03 = '85861560789112949495459501737958331952853208805511';
const multiDigit04 = '12540698747158523863050715693290963295227443043557';
const multiDigit05 = '66896648950445244523161731856403098711121722383113';
const multiDigit06 = '62229893423380308135336276614282806444486645238749';
const multiDigit07 = '30358907296290491560440772390713810515859307960866';
const multiDigit08 = '70172427121883998797908792274921901699720888093776';
const multiDigit09 = '65727333001053367881220235421809751254540594752243';
const multiDigit10 = '52584907711670556013604839586446706324415722155397';
const multiDigit11 = '53697817977846174064955149290862569321978468622482';
const multiDigit12 = '83972241375657056057490261407972968652414535100474';
const multiDigit13 = '82166370484403199890008895243450658541227588666881';
const multiDigit14 = '16427171479924442928230863465674813919123162824586';
const multiDigit15 = '17866458359124566529476545682848912883142607690042';
const multiDigit16 = '24219022671055626321111109370544217506941658960408';
const multiDigit17 = '07198403850962455444362981230987879927244284909188';
const multiDigit18 = '84580156166097919133875499200524063689912560717606';
const multiDigit19 = '05886116467109405077541002256983155200055935729725';
const multiDigit20 = '71636269561882670428252483600823257530420752963450';

const combinedString =
  multiDigit01 +
  multiDigit02 +
  multiDigit03 +
  multiDigit04 +
  multiDigit05 +
  multiDigit06 +
  multiDigit07 +
  multiDigit08 +
  multiDigit09 +
  multiDigit10 +
  multiDigit11 +
  multiDigit12 +
  multiDigit13 +
  multiDigit14 +
  multiDigit15 +
  multiDigit16 +
  multiDigit17 +
  multiDigit18 +
  multiDigit19 +
  multiDigit20
;

// slice the number into test sections
var adjacentDigitsRange = 13;  // test with 4 first
var sliceEnd = adjacentDigitsRange;
var numberLength = combinedString.length;
var terminusPosition = (numberLength - adjacentDigitsRange + 1);
var sliceArray = [];

for (var startPosition = 0; startPosition < terminusPosition; startPosition++) {
  var slice = combinedString.slice(startPosition, sliceEnd);
  sliceArray.push(slice);
  sliceEnd++;
}

// determine products of slices
var productsMap = new Map();
var counter = 1;
sliceArray.forEach( function(slice) {
  var product = 1;
  for (var charStart = 0; charStart < adjacentDigitsRange; charStart++) {
    product = product * slice.charAt(charStart);
  }
  productsMap.set(counter, {'slice': slice, 'product': product});
  counter++;
});

// sort products
var sortedValues = [...productsMap.entries()].sort((a, b) => b[1].product - a[1].product);

console.log(`The ${adjacentDigitsRange} adjacent values with the highest product are '${sortedValues[0][1].slice}' with product '${sortedValues[0][1].product}'.`);

// The 4 adjacent values with the highest product are '9989' with product '5832'.
// The 13 adjacent values with the highest product are '5576689664895' with product '23514624000'.
