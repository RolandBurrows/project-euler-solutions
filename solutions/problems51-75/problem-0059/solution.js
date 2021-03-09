console.log('Running solution for Problem 0059...');
console.time('run time');

const fs = require('fs');

// https://en.wikipedia.org/wiki/Most_common_words_in_English
// 5 letter words were chosen to avoid incorrect detection of gibberish
const commonEnglishWords = ['would', 'there', 'their', 'which'];

console.log('> assembling possible keys');
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                  'n','o','p','q','r','s','t','u','v','w','x','y','z'];
let candidateKeys = [];
alphabet.forEach( function(charOne) {
  alphabet.forEach( function(charTwo) {
    alphabet.forEach( function(charThree) {
      candidateKeys.push(charOne + charTwo + charThree);
    });
  });
});
console.log(`>  there are ${candidateKeys.length} possible candidate keys`);

console.log('> parsing ciphered text');
const rawData = fs.readFileSync('p059_cipher.txt', 'utf8');
const asciiData = rawData.split(',');

let decryptedText = '';
for (var i = 0; i < candidateKeys.length; i++) {
  var candidateKey = candidateKeys[i];
  decryptedText = '';
  // If the password is shorter than the message, which is likely,
  // the key is repeated cyclically throughout the message.
  var keyLoopCounter = 0;
  asciiData.forEach( function(asciiChar) {
    var keyChar = candidateKey.charAt(keyLoopCounter);
    var xorOp = parseInt(asciiChar) ^ keyChar.charCodeAt(0);
    var translation = String.fromCharCode(xorOp);
    decryptedText = decryptedText.concat(translation);
    keyLoopCounter++;
    if (keyLoopCounter >= 3) { keyLoopCounter = 0; }  // reset, for next key loop
  });
  if (commonEnglishWords.some(substring=>decryptedText.includes(substring))) {
    console.log('> decoded text:');
    console.log(decryptedText);
    console.log(`> found with secret key "${candidateKey}"`);
    console.log('');
    break;
  }
}

// > assembling possible keys
// >  there are 17576 possible candidate keys
// > parsing ciphered text
// > decoded text:
// An extract taken from the introduction of one of Euler's most celebrated papers,
// "De summis serierum reciprocarum" [On the sums of series of reciprocals]: I have
// recently found, quite unexpectedly, an elegant expression for the entire sum of this
// series 1 + 1/4 + 1/9 + 1/16 + etc., which depends on the quadrature of the circle,
// so that if the true sum of this series is obtained, from it at once the quadrature
// of the circle follows. Namely, I have found that the sum of this series is a sixth
// part of the square of the perimeter of the circle whose diameter is 1; or by putting
// the sum of this series equal to s, it has the ratio sqrt(6) multiplied by s to 1 of
// the perimeter to the diameter. I will soon show that the sum of this series to be
// approximately 1.644934066842264364; and from multiplying this number by six, and
// then taking the square root, the number 3.141592653589793238 is indeed produced,
// which expresses the perimeter of a circle whose diameter is 1. Following again the
// same steps by which I had arrived at this sum, I have discovered that the sum of the
// series 1 + 1/16 + 1/81 + 1/256 + 1/625 + etc. also depends on the quadrature of the
// circle. Namely, the sum of this multiplied by 90 gives the biquadrate (fourth power)
// of the circumference of the perimeter of a circle whose diameter is 1. And by
// similar reasoning I have likewise been able to determine the sums of the subsequent
// series in which the exponents are even numbers.
// > found with secret key "exp"

let answerSum = 0;
// turn each char of the decrypted text back into ascii values, and sum
for (var j = 0; j < decryptedText.length; j++) {
  answerSum += parseInt(decryptedText.charCodeAt(j));
}
console.log('What is the sum of the ASCII values in the original text?');
console.log('Answer:', answerSum);

console.timeLog('run time');

// What is the sum of the ASCII values in the original text?
// Answer: 129448
// run time: 240.289ms
