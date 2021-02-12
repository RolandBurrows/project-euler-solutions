console.log('Running solution for Problem 0040...');

var champernowne = '';
for (var i = 1; i <= 1000000; i++) {
  champernowne = champernowne.concat(i.toString());
}

const d1 = parseInt(champernowne.charAt(1-1));
const d10 = parseInt(champernowne.charAt(10-1));
const d100 = parseInt(champernowne.charAt(100-1));
const d1000 = parseInt(champernowne.charAt(1000-1));
const d10000 = parseInt(champernowne.charAt(10000-1));
const d100000 = parseInt(champernowne.charAt(100000-1));
const d1000000 = parseInt(champernowne.charAt(1000000-1));

const solutionProduct = d1 * d10 * d100 * d1000 * d10000 * d100000 * d1000000;

console.log('Answer:', solutionProduct);

// Answer: 210
