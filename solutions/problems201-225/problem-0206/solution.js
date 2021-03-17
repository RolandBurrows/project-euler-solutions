console.log('Running solution for Problem 0206...');
console.time('run time');

let searchStart = 1010101010;  // sqrt of 1020304050607080900, pattern with all zeros
let stopSearch = 1389026623;  // sqrt of 1929394959697989990, pattern with all nines

let answer = 0;
for (var i = searchStart; i <= stopSearch; i++) {
  var answerCandStr = (BigInt(i)*BigInt(i)).toString();
  if (answerCandStr.charAt(0) === '1' &&
      answerCandStr.charAt(2) === '2' &&
      answerCandStr.charAt(4) === '3' &&
      answerCandStr.charAt(6) === '4' &&
      answerCandStr.charAt(8) === '5' &&
      answerCandStr.charAt(10) === '6' &&
      answerCandStr.charAt(12) === '7' &&
      answerCandStr.charAt(14) === '8' &&
      answerCandStr.charAt(16) === '9') {
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
// run time: 2:35.144 (m:ss.mmm)
