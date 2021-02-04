console.log('Running solution for Problem 0032...');

// challenge settings
const pandigitalNums = [1,2,3,4,5,6,7,8,9];

var numsToSum = [];
var numSum = 0;
// on first writing this code, the limit was set to 9999
// but upon seeing the answer, we can cap the limit to 2000 for speed
for (var multiplicand = 1; multiplicand <= 2000; multiplicand++) {
  for (var multiplier = 1; multiplier <= 2000; multiplier++) {
    var charsArray = [];
    var product = multiplicand * multiplier;
    // carve up the multiplicand
    var multiplicandString = multiplicand.toString();
    for (var charPosition = 0; charPosition < multiplicandString.length; charPosition++) {
      var characterInt = parseInt(multiplicandString.charAt(charPosition));
      charsArray.push(characterInt);
    }
    // carve up the multiplier
    var multiplierString = multiplier.toString();
    for (var charPosition = 0; charPosition < multiplierString.length; charPosition++) {
      var characterInt = parseInt(multiplierString.charAt(charPosition));
      charsArray.push(characterInt);
    }
    // carve up the product
    var productString = product.toString();
    for (var charPosition = 0; charPosition < productString.length; charPosition++) {
      var characterInt = parseInt(productString.charAt(charPosition));
      charsArray.push(characterInt);
    }
    // sort the charsArray ascending and check if pandigital
    charsArray.sort(function(a, b){return a-b});
    var isSameArray = (charsArray.length == pandigitalNums.length) && charsArray.every(function(element, index) {
      return element === pandigitalNums[index];
    });
    if (isSameArray) {
      console.log(`Pandigital found: ${multiplicand} * ${multiplier} = ${product}`);
      numsToSum.push(product);
    }
  }
}

// uniqify the products
numsToSum = [...new Set(numsToSum)];
console.log(`There are ${numsToSum.length} unique products:`, numsToSum);
numsToSum.forEach( function (num) {
  numSum += num;
});

console.log('The sum of all products whose a*b=c identity is 1 through 9 pandigital is:');
console.log(numSum);

// Pandigital found: 4 * 1738 = 6952
// Pandigital found: 4 * 1963 = 7852
// Pandigital found: 12 * 483 = 5796
// Pandigital found: 18 * 297 = 5346
// Pandigital found: 27 * 198 = 5346
// Pandigital found: 28 * 157 = 4396
// Pandigital found: 39 * 186 = 7254
// Pandigital found: 42 * 138 = 5796
// Pandigital found: 48 * 159 = 7632
// Pandigital found: 138 * 42 = 5796
// Pandigital found: 157 * 28 = 4396
// Pandigital found: 159 * 48 = 7632
// Pandigital found: 186 * 39 = 7254
// Pandigital found: 198 * 27 = 5346
// Pandigital found: 297 * 18 = 5346
// Pandigital found: 483 * 12 = 5796
// Pandigital found: 1738 * 4 = 6952
// Pandigital found: 1963 * 4 = 7852
// There are 7 unique products: [6952, 7852, 5796, 5346, 4396, 7254, 7632]
// The sum of all products whose a*b=c identity is 1 through 9 pandigital is:
// 45228
