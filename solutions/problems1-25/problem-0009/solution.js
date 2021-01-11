console.log('Running solution for Problem 0009...');

// challenge settings
const tripletCeiling = 1000;

var aStart = 1
var bStart = 2;
var cStart = tripletCeiling - bStart - aStart;
var a = aStart;
var b = bStart;
var c = cStart;
var answerFound = false;

// loop over all possible values for a, iteratively
for (a; b < c; a++) {
  // loop over all accompanying possible values for b
  for (b; b < c; b++) { 
    if ((a**2)+(b**2)==(c**2)) {
      answerFound = true;
      break;
    };
    c--;
  }
  // end loop early if answer is found
  if (answerFound) {
    break;
  };
  // reset values for next loop
  b = a + 1;
  c = tripletCeiling - b - a - 1;  // minus 1 because 'a' will ++ at the end of current loop
  if (c <= b) { throw "err: no matching values found within range" };
}

console.log(`${a} + ${b} + ${c} == ${a+b+c}`);
console.log(`${a}² + ${b}² == ${c}²`);
console.log(`${a} * ${b} * ${c} == ${a*b*c}`);

// 200 + 375 + 425 == 1000
// 200² + 375² == 425²
// 200 * 375 * 425 == 31875000
