const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 202,
  name: 'Happy Number',
  url: 'https://leetcode.com/problems/happy-number/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function numSquareSum(n) {
    let squareSum = 0;
    while (n) {
      squareSum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    return squareSum;
  }

  let slow = n;
  let fast = n;

  do {
    slow = numSquareSum(slow);
    fast = numSquareSum(numSquareSum(fast));
  } while (slow !== fast);

  return slow == 1;
};

const label = 'time';
console.time(label);
console.log(isHappy(2));
console.log(isHappy(19));
console.timeEnd(label);
