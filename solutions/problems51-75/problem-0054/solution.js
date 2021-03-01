console.log('Running solution for Problem 0054...');
console.time('run time');

const fs = require('fs');
const cardValueObj = {
  'A': 13,
  'K': 12,
  'Q': 11,
  'J': 10,
  '10': 9,
  '9': 8,
  '8': 7,
  '7': 6,
  '6': 5,
  '5': 4,
  '4': 3,
  '3': 2,
  '2': 1
};
const handRankObj = {
  'royalFlush': 10,
  'straightFlush': 9,
  'fourOfKind': 8,
  'fullHouse': 7,
  'flush': 6,
  'straight': 5,
  'threeOfKind': 4,
  'twoPairs': 3,
  'onePair': 2,
  'highCard': 1
};


function whatIsTheHighCard(handString) {
  if (handString === '') { return ''; }
  var handCopyStr = handString;
  // '2C5C7D8SQH'
  var cards = handCopyStr.match(/.{1,2}/g);
  // ['2C','5C','7D','8S','QH']
  var highValue = 0;
  var highCard = '';
  cards.forEach( function(card) {
    var candidate = cardValueObj[card.charAt(0)];
    if (candidate > highValue) {
      highValue = candidate;
      highCard = card;
    }
  });
  return highCard;
}
console.assert(whatIsTheHighCard('2C5C7D8SQH') === 'QH', 'whatIsTheHighCard');

function whatHandDoIHave(handString) {
  /*
    return ['rankedHandType', 'matchingPartOfHand', 'remainderOfHand']
  */
  // RANKS
  var onePair = false;
  var twoPairs = false;
  var threeOfKind = false;
  var straight = false;
  var flush = false;
  var fullHouse = false;
  var fourOfKind = false;
  var royalStraight = false;
  // VALUES
  const two = (handString.match(/2/g)||[]).length;
  const three = (handString.match(/3/g)||[]).length;
  const four = (handString.match(/4/g)||[]).length;
  const five = (handString.match(/5/g)||[]).length;
  const six = (handString.match(/6/g)||[]).length;
  const seven = (handString.match(/7/g)||[]).length;
  const eight = (handString.match(/8/g)||[]).length;
  const nine = (handString.match(/9/g)||[]).length;
  const ten = (handString.match(/T/g)||[]).length;
  const jack = (handString.match(/J/g)||[]).length;
  const queen = (handString.match(/Q/g)||[]).length;
  const king = (handString.match(/K/g)||[]).length;
  const ace = (handString.match(/A/g)||[]).length;
  const valueCounts = [two,three,four,five,six,seven,eight,nine,ten,jack,queen,king,ace];
  // SUITS
  const club = (handString.match(/C/g)||[]).length;
  const diamond = (handString.match(/D/g)||[]).length;
  const heart = (handString.match(/H/g)||[]).length;
  const spade = (handString.match(/S/g)||[]).length;
  const suitCounts = [club,diamond,heart,spade];
  // LOGIC
  //console.log(valueCounts);
  //console.log(suitCounts);
  if (ace === 1 && king === 1 && queen === 1 && jack === 1 && ten === 1) {
    royalStraight = true;
  }
  var straightCopyStr = [...valueCounts].join('');
  var straightRegex = /(1)\1*/g;
  var straightMatch;
  var straightLongest = '';
  while (straightMatch = straightRegex.exec(straightCopyStr)) {
    straightLongest = straightMatch[0].length > straightLongest.length ? straightMatch[0] : straightLongest;
  }
  var straightValue = straightLongest.length;
  if (straightValue === 5) {
    straight = true;
  }
  if (valueCounts.includes(4)) {
    fourOfKind = true;
  }
  if (valueCounts.includes(3) && valueCounts.includes(2)) {
    fullHouse = true;
  }
  if (suitCounts.includes(5)) {
    flush = true;
  }
  if (valueCounts.includes(3) && !valueCounts.includes(2)) {
    threeOfKind = true;
  }
  var pairsCopyStr = [...valueCounts].join('');
  var pairsMatch = pairsCopyStr.match(/2/g);
  var pairsFound = (pairsMatch||[]).length;
  if (pairsFound === 2) {
    twoPairs = true;
  }
  if (pairsFound === 1) {
    onePair = true;
  }
  // PARSING
  if (royalStraight && flush) {
    return 'royalFlush';
  }
  if (straight && flush) {
    return 'straightFlush';
  }
  if (fourOfKind) {
    return 'fourOfKind';
  }
  if (fullHouse) {
    return 'fullHouse';
  }
  if (flush) {
    return 'flush';
  }
  if (straight) {
    return 'straight';
  }
  if (threeOfKind) {
    return 'threeOfKind';
  }
  if (twoPairs) {
    return 'twoPairs';
  }
  if (onePair) {
    return 'onePair';
  }
  return `highcard-${whatIsTheHighCard(handString)}`;
  throw "unparsable poker hand!"  // this should never happen
}
console.assert(whatHandDoIHave('TSJSQSKSAS') === 'royalFlush', 'hand: royalFlush');
console.assert(whatHandDoIHave('2S3S4S5S6S') === 'straightFlush', 'hand: straightFlush');
console.assert(whatHandDoIHave('JCJHJDJS2C') === 'fourOfKind', 'hand: fourOfKind');
console.assert(whatHandDoIHave('2H2D4C4D4S') === 'fullHouse', 'hand: fullHouse');
console.assert(whatHandDoIHave('3C3D3S9S9D') === 'fullHouse', 'hand: fullHouse');
console.assert(whatHandDoIHave('2H4H6H8HTH') === 'flush', 'hand: flush');
console.assert(whatHandDoIHave('5C6S7H8D9C') === 'straight', 'hand: straight');
console.assert(whatHandDoIHave('3C5HQHQSQD') === 'threeOfKind', 'hand: threeOfKind');
console.assert(whatHandDoIHave('KSJD5DJHKC') === 'twoPairs', 'hand: twoPairs');
console.assert(whatHandDoIHave('AS3H5C8HAC') === 'onePair', 'hand: onePair');
console.assert(whatHandDoIHave('2C5C7D8SQH') === 'highcard-QH', 'hand: highCard');


// extract poker hands data
const rawData = fs.readFileSync('p054_poker.txt', 'utf8');
const pokerHandData = rawData.split("\n");
var pokerHands = [];
pokerHandData.forEach( function(handSet) {
  // '8C TS KC 9H 4S 7D 2S 5D 3S AC'
  const handFormatted = handSet.replace(/\s/g, '');
  // '8CTSKC9H4S7D2S5D3SAC'
  const firstHand = handFormatted.slice(0,10);
  const secondHand = handFormatted.slice(10,20);
  // ['8CTSKC9H4S','7D2S5D3SAC']
  pokerHands.push([firstHand, secondHand]);
});
console.assert(pokerHands[0].toString() === "8CTSKC9H4S,7D2S5D3SAC", 'parsing from file 1');
console.assert(pokerHands[999].toString() === "ASKD3DJD8H,7C8C5CQD6C", 'parsing from file 2');
console.assert(pokerHands.length === 1000, 'number of hands');
// data format:
// [
//   ['8CTSKC9H4S','7D2S5D3SAC'],
//   ['5CAD5DAC9C','7C5H8DTDKS'],
//   etc.
// ]

pokerHands.forEach( function(handSet) {
  console.log(`${whatHandDoIHave(handSet[0])}  vs.  ${whatHandDoIHave(handSet[1])}`);
});


console.log('Answer:');
console.timeLog('run time');
