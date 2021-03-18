console.log('Running solution for Problem 0206...');
console.time('run time');

let searchStart = 1389026623;  // sqrt of 1929394959697989990, pattern with all nines
let searchStop = 1010101010;  // sqrt of 1020304050607080900, pattern with all zeros

let answer = 0;
for (var i = searchStart; i >= searchStop; i--) {
  var answerCandStr = (BigInt(i)*BigInt(i)).toString();
  if (answerCandStr.match(/1\d2\d3\d4\d5\d6\d7\d8\d9\d0/gm)) {
    answer = i;
    console.log('>', i);
    console.log('>', BigInt(i)*BigInt(i));
    console.log('> 1_2_3_4_5_6_7_8_9_0');
    break;
  }
}

console.log('Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0.');
console.log('Answer:', answer);

console.timeLog('run time');

// > 1389019170
// > 1929374254627488900n
// > 1_2_3_4_5_6_7_8_9_0
// Answer: 1389019170
// run time: 7.124ms
