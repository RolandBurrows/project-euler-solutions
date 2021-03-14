console.log('Running solution for Problem 0079...');
console.time('run time');

const fs = require('fs');

console.log('> parsing data file');
const rawData = fs.readFileSync('p079_keylog.txt', 'utf8');
let snippets = rawData.split('\n');
snippets.pop();  // last value is empty newline, useless
snippets = [... new Set(snippets)];  // uniquify

// console.log(snippets);

function passesRules(passCandAry, snips) {
  for (var i = 0; i < snips.length; i++) {
    var snipCharAry = snips[i].split('');
    if (!passCandAry.includes(snipCharAry[0])) { return false; }
    if (!passCandAry.includes(snipCharAry[1])) { return false; }
    if (!passCandAry.includes(snipCharAry[2])) { return false; }
    if (passCandAry.indexOf(snipCharAry[0]) > passCandAry.indexOf(snipCharAry[1])) {
      return false;
    }
    if (passCandAry.indexOf(snipCharAry[1]) > passCandAry.indexOf(snipCharAry[2])) {
      return false;
    }
  }
  return true;
}

let passcode = [];

// FIND LEFTMOST CHARACTER
let candFirstChar = '';
for (var j = 0; j < snippets.length; j++) {
  var candidateChars = snippets[j].split('');
  // initialize if empty, or replace if better candidate found
  if (candFirstChar === '' || candFirstChar === candidateChars[1]) {
    candFirstChar = candidateChars[0];
  }
}
passcode.push(candFirstChar);  // add to final array
console.log('> first character is:', candFirstChar);

// FIND RIGHTMOST CHARACTER
let candLastChar = '';
for (var j = 0; j < snippets.length; j++) {
  var candidateChars = snippets[j].split('');
  // initialize if empty, or replace if better candidate found
  if (candLastChar === '' || candLastChar === candidateChars[1]) {
    candLastChar = candidateChars[2];
  }
}
// do not add to final array yet - add last character in final steps
console.log('> last character is:', candLastChar);

// FIND REST OF SEQUENCE
while(true) {
  var goAgain = false;
  var nextCandChar = '';
  for (var k = 0; k < snippets.length; k++) {
    var candidateChars = snippets[k].split('');
    // initialize if empty, or replace if better next candidate found
    var initIfEmpty = (candidateChars[0] === passcode[passcode.length-1] && nextCandChar === '');
    var replaceCandidate = (nextCandChar === candidateChars[2] && !passcode.includes(candidateChars[1]));
    if (initIfEmpty || replaceCandidate) {
      nextCandChar = candidateChars[1];
      goAgain = true;
    }
  }
  if (goAgain === false) { break; }
  passcode.push(nextCandChar);
  console.log('>', passcode.join(''));
}

// add previously-discovered rightmost element to the end
passcode.push(candLastChar);

// verify determined passcode is compliant with all the snippets
if (!passesRules(passcode, snippets)) { throw 'Determined passcode is NOT compliant with all the snippets'; }

console.log('Determine the shortest possible secret passcode of unknown length.');
console.log('Answer:', passcode.join(''));

console.timeLog('run time');

// Running solution for Problem 0079...
// > parsing data file
// > first character is: 7
// > last character is: 0
// > 73
// > 731
// > 7316
// > 73162
// > 731628
// > 7316289
// Determine the shortest possible secret passcode of unknown length.
// Answer: 73162890
// run time: 2.18ms
