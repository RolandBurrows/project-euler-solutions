console.log('Running solution for Problem 0017...');

// challenge settings
const countCap = 1000;  // test with 5 first

// pre-load the known lengths of written-out numbers
const lexMap = {
  '0': 0,
  '1': 3,
  '2': 3,
  '3': 5,
  '4': 4,
  '5': 4,
  '6': 3,
  '7': 5,
  '8': 5,
  '9': 4,
  '10': 3,
  '11': 6,
  '12': 6,
  '13': 7,
  '14': 8,
  '15': 7,
  '16': 7,
  '17': 9,
  '18': 9,
  '19': 8,
  '20': 6,
  '30': 6,
  '40': 5,
  '50': 5,
  '60': 5,
  '70': 7,
  '80': 6,
  '90': 6,
  '100': 7,
  '1000': 8
};

var ultraCount = 0;

// count!
for (var num = 1; num <= countCap; num++) {
  var numString = num.toString();
  var numLength = numString.length;
  // places!
  for (var place = 0; place < numLength; place++) {
    var placeValue = '';
    var placeWordLength = 0;
    var totalPlaceValue = '';
    // thousands place!
    if (numLength - place === 4) {
      placeValue = numString.charAt(numLength-4);
      ultraCount += lexMap[placeValue];  // e.g. 'one'
      ultraCount += lexMap['1000'];  // 'thousand'
      totalPlaceValue = ''.concat(
        numString.charAt(numLength-4),
        numString.charAt(numLength-3),
        numString.charAt(numLength-2),
        numString.charAt(numLength-1)
      );
      // break for the values ending in all zeroes
      if (num % 1000 === 0) {
        break;  // e.g. 20
      }
    }
    // hundreds place!
    if (numLength - place === 3) {
      placeValue = numString.charAt(numLength-3);
      ultraCount += lexMap[placeValue];
      ultraCount += lexMap['100'];
      totalPlaceValue = ''.concat(
        numString.charAt(numLength-3),
        numString.charAt(numLength-2),
        numString.charAt(numLength-1)
      );
      // break for the values ending in all zeroes
      if (num % 100 === 0) {
        break;  // e.g. 20
      }
      ultraCount += 3;  // 'and'
    }
    // tens place!
    if (numLength - place === 2) {
      placeValue = numString.charAt(numLength-2);
      totalPlaceValue = ''.concat(
        numString.charAt(numLength-2),
        numString.charAt(numLength-1)
      );
      // test for one of the unique-worded place values 10-19
      if (placeValue === '1') {
        ultraCount += lexMap[totalPlaceValue];  // e.g. 11
        break;
      }
      if (Number(placeValue) > 1) {
        totalPlaceValue = numString.charAt(numLength-2);
        totalPlaceValue = totalPlaceValue.concat('0');
        ultraCount += lexMap[totalPlaceValue];
        // break for the values ending in zero ('twenty', not 'twenty zero')
        if (num % 10 === 0) {
          break;  // e.g. 20
        }
      }
    }
    // ones place!
    if (numLength - place === 1) {
      placeValue = numString.charAt(numLength-1);
      placeWordLength = lexMap[placeValue];
      ultraCount += placeWordLength;
    }    
  }
}

console.log(`The total number of characters of written-out numbers between 1 and ${countCap} is: '${ultraCount}'.`);

// The total number of characters of written-out numbers between 1 and 1000 is: '21124'.
