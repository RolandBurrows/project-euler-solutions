console.log('Running solution for Problem 0022...');

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

const rawNames = fs.readFileSync('names.txt', 'utf8');
const namesNoQuotes = rawNames.replace(/"/g, '');
const namesArray = namesNoQuotes.split(',');
const namesArraySorted = namesArray.sort();

var nameScoresTotal = 0;

namesArraySorted.forEach( function(name, index) {
  // alphabetical value for each name
  var nameValue = 0;
  for (var i = 0; i < name.length; i++) {
    nameValue += alphaValsMap[name.charAt(i)];
  }
  // score = value * position
  nameScoresTotal += (nameValue * (index + 1));
});

console.log('What is the total of all the name scores in the file? Answer:', nameScoresTotal);

// What is the total of all the name scores in the file? Answer: 871198282
