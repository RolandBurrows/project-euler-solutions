console.log('Running solution for Problem 0011...');

// challenge settings
const row01 = ['08','02','22','97','38','15','00','40','00','75','04','05','07','78','52','12','50','77','91','08'];
const row02 = ['49','49','99','40','17','81','18','57','60','87','17','40','98','43','69','48','04','56','62','00'];
const row03 = ['81','49','31','73','55','79','14','29','93','71','40','67','53','88','30','03','49','13','36','65'];
const row04 = ['52','70','95','23','04','60','11','42','69','24','68','56','01','32','56','71','37','02','36','91'];
const row05 = ['22','31','16','71','51','67','63','89','41','92','36','54','22','40','40','28','66','33','13','80'];
const row06 = ['24','47','32','60','99','03','45','02','44','75','33','53','78','36','84','20','35','17','12','50'];
const row07 = ['32','98','81','28','64','23','67','10','26','38','40','67','59','54','70','66','18','38','64','70'];
const row08 = ['67','26','20','68','02','62','12','20','95','63','94','39','63','08','40','91','66','49','94','21'];
const row09 = ['24','55','58','05','66','73','99','26','97','17','78','78','96','83','14','88','34','89','63','72'];
const row10 = ['21','36','23','09','75','00','76','44','20','45','35','14','00','61','33','97','34','31','33','95'];
const row11 = ['78','17','53','28','22','75','31','67','15','94','03','80','04','62','16','14','09','53','56','92'];
const row12 = ['16','39','05','42','96','35','31','47','55','58','88','24','00','17','54','24','36','29','85','57'];
const row13 = ['86','56','00','48','35','71','89','07','05','44','44','37','44','60','21','58','51','54','17','58'];
const row14 = ['19','80','81','68','05','94','47','69','28','73','92','13','86','52','17','77','04','89','55','40'];
const row15 = ['04','52','08','83','97','35','99','16','07','97','57','32','16','26','26','79','33','27','98','66'];
const row16 = ['8','36','68','87','57','62','20','72','03','46','33','67','46','55','12','32','63','93','53','69'];
const row17 = ['04','42','16','73','38','25','39','11','24','94','72','18','08','46','29','32','40','62','76','36'];
const row18 = ['20','69','36','41','72','30','23','88','34','62','99','69','82','67','59','85','74','04','36','16'];
const row19 = ['20','73','35','29','78','31','90','01','74','31','49','71','48','86','81','16','23','57','05','54'];
const row20 = ['01','70','54','71','83','51','54','69','16','92','33','48','61','43','52','01','89','19','67','48'];

var theGrid = [];
theGrid.push(row01);
theGrid.push(row02);
theGrid.push(row03);
theGrid.push(row04);
theGrid.push(row05);
theGrid.push(row06);
theGrid.push(row07);
theGrid.push(row08);
theGrid.push(row09);
theGrid.push(row10);
theGrid.push(row11);
theGrid.push(row12);
theGrid.push(row13);
theGrid.push(row14);
theGrid.push(row15);
theGrid.push(row16);
theGrid.push(row17);
theGrid.push(row18);
theGrid.push(row19);
theGrid.push(row20);
// theGrid[row][column]
// top left: theGrid[0][0], bottom right: theGrid[19][19]

// slice vertically
var verticalSlices = [];
for (var row = 0; row <= 16; row++) {
  for (var col = 0; col <= 19; col++) {
    verticalSlices.push([
      theGrid[row][col],
      theGrid[row+1][col],
      theGrid[row+2][col],
      theGrid[row+3][col]
    ]);
  }
}

// slice horizontally
var horizontalSlices = [];
for (var row = 0; row <= 19; row++) {
  for (var col = 0; col <= 16; col++) {
    horizontalSlices.push([
      theGrid[row][col],
      theGrid[row][col+1],
      theGrid[row][col+2],
      theGrid[row][col+3]
    ]);
  }
}

// slice hack-diagonal \\\\
var hackSlices = [];
for (var row = 0; row <= 16; row++) {
  for (var col = 0; col <= 16; col++) {
    hackSlices.push([
      theGrid[row][col],
      theGrid[row+1][col+1],
      theGrid[row+2][col+2],
      theGrid[row+3][col+3]
    ]);
  }
}

// slice slash-diagonal ////
var slashSlices = [];
for (var row = 3; row <= 19; row++) {
  for (var col = 3; col <= 19; col++) {
    slashSlices.push([
      theGrid[row][col-3],
      theGrid[row-1][col-2],
      theGrid[row-2][col-1],
      theGrid[row-3][col]
    ]);
  }
}

// map the slices and their configuration & products
var slicesMap = new Map();

var counter = 0;
verticalSlices.forEach( function(slice) {
  counter++;
  var product = 1;
  slice.forEach( function(value) {
    product = product * value;
  });
  slicesMap.set(`vertical${counter}`,{'slice': slice, 'product': product})
});

counter = 0;
horizontalSlices.forEach( function(slice) {
  counter++;
  var product = 1;
  slice.forEach( function(value) {
    product = product * value;
  });
  slicesMap.set(`horizontal${counter}`,{'slice': slice, 'product': product})
});

counter = 0;
hackSlices.forEach( function(slice) {
  counter++;
  var product = 1;
  slice.forEach( function(value) {
    product = product * value;
  });
  slicesMap.set(`hack${counter}`,{'slice': slice, 'product': product})
});

counter = 0;
slashSlices.forEach( function(slice) {
  counter++;
  var product = 1;
  slice.forEach( function(value) {
    product = product * value;
  });
  slicesMap.set(`slash${counter}`,{'slice': slice, 'product': product})
});

// sort products
var sortedValues = [...slicesMap.entries()].sort((a, b) => b[1].product - a[1].product);

var highestProductSliceKey = sortedValues[0][0];
var highestProductSliceValue = sortedValues[0][1];

var sliceType = '';
if (highestProductSliceKey.includes('vertical')) {
  sliceType = 'vertical (||||)';
}
if (highestProductSliceKey.includes('horizontal')) {
  sliceType = 'horizontal (----)';
}
if (highestProductSliceKey.includes('hack')) {
  sliceType = 'hack-diagonal (\\\\)';
}
if (highestProductSliceKey.includes('slash')) {
  sliceType = 'slash-diagonal (////)';
}

console.log('The 4 adjacent values with the highest product are:');
console.log(`  type: ${sliceType}`);
console.log(`  values: [${highestProductSliceValue.slice}]`);
console.log(`  product: '${highestProductSliceValue.product}'`);

// The 4 adjacent values with the highest product are:
//   type: slash-diagonal (////)
//   values: [87,97,94,89]
//   product: '70600674'
