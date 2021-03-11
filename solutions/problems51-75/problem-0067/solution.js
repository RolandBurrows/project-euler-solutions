console.log('Running solution for Problem 0067...');
console.time('run time');

const fs = require('fs');

console.log('> parsing data file');
let bigBermuda = [];
const rawData = fs.readFileSync('p067_triangle.txt', 'utf8');
const dataLines = rawData.match(/.+/g);  // last line in the data file is an empty newline
dataLines.forEach( function(line) {
  var formattedArray = new Array(100).fill(0);
  var lineArray = line.split(' ');
  lineArray.forEach( function(data, index) {
    // replace empty array of length 100 with new data points
    formattedArray[index] = parseInt(data);
  });
  bigBermuda.push(formattedArray);
});

console.log('> walking the triangle');
let triHeight = bigBermuda.length;
while (triHeight > 1) {
  // consider the last two rows in the triangle
  var lastRow = bigBermuda[triHeight - 1];
  var upRow = bigBermuda[triHeight - 2];
  var rowLength = lastRow.length;
  var newRow = [];
  for (var i = 1; i != rowLength+1; i++) {
    // if right-side end of triangle, maintain boundary
    if (upRow[rowLength-i] === 0) {
      newRow.push(0);
      continue;
    }
    // compare values between rows and take bigger possible sum
    var innerSum = 0;
    if (lastRow[rowLength-i] > lastRow[rowLength-(i-1)]) {
      innerSum = upRow[rowLength-i] + lastRow[rowLength-i];
      newRow.push(innerSum);
    } else {
      innerSum = upRow[rowLength-i] + lastRow[rowLength-(i-1)];
      newRow.push(innerSum);
    }
  }

  // remove last two lines of triangle
  bigBermuda.pop();
  bigBermuda.pop();

  // replace with new line
  newRow.reverse();  // new row gets created from right to left
  bigBermuda.push(newRow);
  triHeight = bigBermuda.length;
}

console.log('Find the maximum total from top to bottom.');
console.log('Answer:', bigBermuda[0][0]);

console.timeLog('run time');

// Answer: 7273
// run time: 4.643ms
