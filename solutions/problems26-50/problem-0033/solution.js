console.log('Running solution for Problem 0033...');

var products = 1;
for (var denominator = 99; denominator >= 10; denominator--) {
  for (var numerator  = 10; numerator < denominator; numerator++) {
    // the original product form
    var product = numerator / denominator;
    // find digits at end of numerator and start of denominator
    var numerStr = numerator.toString();
    var denomStr = denominator.toString();
    var numCharInt = parseInt(numerStr.charAt(1));
    var denomCharInt = parseInt(denomStr.charAt(0));
    // if a match, check to see if new product also matches
    if (numCharInt === denomCharInt) {
      // copy values and remove matching digits
      var numerStrCopy = numerStr.slice();
      numerStrCopy = numerStrCopy.replace(numCharInt.toString(), '');
      var denomStrCopy = denomStr.slice();
      denomStrCopy = denomStrCopy.replace(denomCharInt.toString(), '');
      // check new product
      var numerIntCopy = parseInt(numerStrCopy);
      var denomIntCopy = parseInt(denomStrCopy);
      var cancelledProduct = numerIntCopy / denomIntCopy;
      if (cancelledProduct === product) {
        console.log(`Pattern match: ${numerator}/${denominator} == ${numerIntCopy}/${denomIntCopy} == ${product}`);
        products *= product;
      }
    }
  }
}

console.log('If the product of these four fractions is given in its lowest common terms, find the value of the denominator.');
console.log('Answer:', Math.ceil(1/products));

// Pattern match: 49/98 == 4/8 == 0.5
// Pattern match: 19/95 == 1/5 == 0.2
// Pattern match: 26/65 == 2/5 == 0.4
// Pattern match: 16/64 == 1/4 == 0.25
// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
// Answer: 100
