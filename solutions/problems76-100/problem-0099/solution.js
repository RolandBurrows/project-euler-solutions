console.log('Running solution for Problem 0099...');
console.time('run time');

const fs = require('fs');
const rawData = fs.readFileSync('p099_base_exp.txt', 'utf8');
const rawPairs = rawData.split("\n");
// '519432,525806'

let dataPairs = [];
rawPairs.forEach( function(rawPair){
  dataPairs.push(rawPair.split(","));
});
// [ '519432', '525806' ]

let answerVal = 0;
let answerIndex = 0;
dataPairs.forEach( function(pair, index){
  // 632382 ** 518061 === 518061 * Math.log(632382)
  var candidateVal = pair[1] * Math.log(pair[0]);
  if (candidateVal > answerVal) {
    answerVal = candidateVal;
    answerIndex = index;
  }
});

console.log('determine which line number has the greatest numerical value');
console.log('Answer:', answerIndex+1);

console.timeLog('run time');

// Answer: 709
// run time: 3.411ms
