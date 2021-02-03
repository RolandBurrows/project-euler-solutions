console.log('Running solution for Problem 0031...');

// challenge settings
const desiredAmount = 200;  // £2
const coinAmounts = [1,2,5,10,20,50,100,200];

// create array equal to the desired amount we want to combinatorially target (plus one)
// with the zero-th position being the seed value of the lowest coin
// fill the rest of the array with 0's that we'll modify into the combo values
var combosArray = new Array(desiredAmount+1).fill(0);
combosArray[0] = 1;

// loop over every coin type
for (var coinPosition = 0; coinPosition < coinAmounts.length; coinPosition++) {
  // loop over every coin value
  for (var coinNext = coinAmounts[coinPosition]; coinNext <= desiredAmount; coinNext++) {
    // set the next value equal to previous possible combos + new possibilities
    combosArray[coinNext] += combosArray[coinNext - coinAmounts[coinPosition]];
  }
}

console.log('How many different ways can £2 be made using any number of coins?');
// last value in the array has the total possible combos
console.log('Answer:', combosArray[combosArray.length-1]);

// How many different ways can £2 be made using any number of coins?
// Answer: 73682
