console.log('Running solution for Problem 0018...');

const testTriangle = [
  [3,0,0,0],
  [7,4,0,0],
  [2,4,6,0],
  [8,5,9,3]
];

const bermuda = [
  [75,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [95,64,00,00,00,00,00,00,00,00,00,00,00,00,00],
  [17,47,82,00,00,00,00,00,00,00,00,00,00,00,00],
  [18,35,87,10,00,00,00,00,00,00,00,00,00,00,00],
  [20,04,82,47,65,00,00,00,00,00,00,00,00,00,00],
  [19,01,23,75,03,34,00,00,00,00,00,00,00,00,00],
  [88,02,77,73,07,63,67,00,00,00,00,00,00,00,00],
  [99,65,04,28,06,16,70,92,00,00,00,00,00,00,00],
  [41,41,26,56,83,40,80,70,33,00,00,00,00,00,00],
  [41,48,72,33,47,32,37,16,94,29,00,00,00,00,00],
  [53,71,44,65,25,43,91,52,97,51,14,00,00,00,00],
  [70,11,33,28,77,73,17,78,39,68,17,57,00,00,00],
  [91,71,52,38,17,14,91,43,58,50,27,29,48,00,00],
  [63,66,04,68,89,53,67,30,73,16,69,87,40,31,00],
  [04,62,98,27,23,09,70,98,73,93,38,53,60,04,23]
];

// copy the data
var theTriangle = bermuda;  // test with testTriangle first
var triHeight = theTriangle.length;

while (triHeight > 1) {
  // consider the last two rows in the triangle
  var lastRow = theTriangle[triHeight - 1];
  var upRow = theTriangle[triHeight - 2];
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
  theTriangle.pop();
  theTriangle.pop();

  // replace with new line
  newRow.reverse();  // new row gets created from right to left
  theTriangle.push(newRow);
  triHeight = theTriangle.length;
  // print operations
  // theTriangle.forEach( function(row) {
  //   console.log(row);
  // });
  // console.log('');
}

console.log(`The maximum sum from top to bottom of the given triangle is '${theTriangle[0][0]}'.`);

// The maximum sum from top to bottom of the given triangle is '1074'.
