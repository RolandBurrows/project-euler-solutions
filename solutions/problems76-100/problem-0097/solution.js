console.log('Running solution for Problem 0097...');
console.time('run time');

let primeNum = (BigInt(28433) * (BigInt(2)**BigInt(7830457))) + BigInt(1);
// TODO: investigate why the following lines hang the process
// let resultStr = primeNum.toString();
// let result = resultStr.slice(resultStr.length - 10);
let result = primeNum % BigInt(10000000000);

console.log('Find the last ten digits of this prime number.');
console.log('Answer:', result.toString());

console.timeLog('run time');

// Answer: 8739992577
// run time: 6.233ms
