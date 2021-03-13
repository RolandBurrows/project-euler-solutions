console.log('Running solution for Problem 0079...');
console.time('run time');

const fs = require('fs');

console.log('> parsing data file');
const rawData = fs.readFileSync('p079_keylog.txt', 'utf8');
let snippets = rawData.split('\n');
snippets.pop();  // last value is empty
snippets = [... new Set(snippets)];  // uniquify

console.log(snippets);

function passesRules(passCandidate, snips) {
  var passCandAry = passCandidate.toString().split('');
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

let passcode;
for (passcode = 123456; passcode <= 999999999; passcode++) {
  console.log(passcode);
  if (passesRules(passcode, snippets)) {
    break;
  } else {
    continue;
  }
  if (passcode === 999999999) {
    throw "passcode not detected!"
  }
}

console.log('Determine the shortest possible secret passcode of unknown length.');
console.log('Answer:', passcode);

console.timeLog('run time');

// Answer: 73162890
// run time: 1:30:10.186 (h:mm:ss.mmm)
