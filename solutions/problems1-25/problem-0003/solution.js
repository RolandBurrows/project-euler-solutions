console.log('Running solution for Problem 0003...');

// challenge settings
const numberToFactor = 600851475143;

// TODO: research Pollard's rho algorithm further

function largestPrimeFactor() {
  var factor = 2;  // start with smallest possible non-1 factor
  var num = numberToFactor;
  while (num > 1) {
    // iteratively increase potential factors until largest found
    if (num % factor === 0) { 
        num = num / factor;
    } else {
        factor++;
    }
  }
  return factor;
}

console.log('Answer:', largestPrimeFactor());

// Answer: 6857
