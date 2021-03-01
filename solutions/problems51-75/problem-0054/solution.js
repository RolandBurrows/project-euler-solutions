console.log('Running solution for Problem 0054...');
console.time('run time');

const fs = require('fs');

// extract poker hands data
const rawData = fs.readFileSync('p054_poker.txt', 'utf8');
var pokerHandData = rawData.split("\n");
var pokerHands = [];
pokerHandData.forEach( function(handSet) {
  // '8C TS KC 9H 4S 7D 2S 5D 3S AC'
  var handFormatted = handSet.replace(/\s/g, '');
  // '8CTSKC9H4S7D2S5D3SAC'
  var firstHand = handFormatted.slice(0,10);
  var secondHand = handFormatted.slice(11,20);
  // ['8CTSKC9H4S','7D2S5D3SAC']
  pokerHands.push([firstHand, secondHand]);
});
console.assert(pokerHands[0].toString() === "8CTSKC9H4S,D2S5D3SAC");
// data format:
// [
//   ['8CTSKC9H4S','7D2S5D3SAC'],
//   ['5CAD5DAC9C','7C5H8DTDKS'],
//   etc.
// ]


console.log('Answer:');

console.timeLog('run time');
