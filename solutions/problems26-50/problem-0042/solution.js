console.log('Running solution for Problem 0042...');

const fs = require('fs');

const alphaValsMap = {
  'A': 1,
  'B': 2,
  'C': 3,
  'D': 4,
  'E': 5,
  'F': 6,
  'G': 7,
  'H': 8,
  'I': 9,
  'J': 10,
  'K': 11,
  'L': 12,
  'M': 13,
  'N': 14,
  'O': 15,
  'P': 16,
  'Q': 17,
  'R': 18,
  'S': 19,
  'T': 20,
  'U': 21,
  'V': 22,
  'W': 23,
  'X': 24,
  'Y': 25,
  'Z': 26
};

function generateTriangleNums() {
  var triNums = [];
  for (var i = 1; i <= 1000; i++) {
    var value = (0.5)*i*(i+1);
    triNums.push(value);
  }
  return triNums;
};

const triangleNums = generateTriangleNums();

const rawWords = fs.readFileSync('p042_words.txt', 'utf8');
const wordsNoQuotes = rawWords.replace(/"/g, '');
const wordsArray = wordsNoQuotes.split(',');

var counter = 0;
wordsArray.forEach( function(werd) {
  // determine numerical value of each word
  var wordValue = 0;
  for (var char = 0; char < werd.length; char++) {
    wordValue += alphaValsMap[werd.charAt(char)];
  }
  // see if word is a triangle word
  if (triangleNums.includes(wordValue)) {
    // console.log(`${werd} is a triangle word, with value ${wordValue}.`);
    counter++;
  }
});

console.log('Using words.txt, how many are triangle words?');
console.log('Answer:', counter);

// Answer: 162
