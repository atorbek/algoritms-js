const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 268,
  name: 'Missing Number',
  url: 'https://leetcode.com/problems/missing-number/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sumRemaining = 0;
  let total = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    let remaining = gas[i] - cost[i];

    if (sumRemaining >= 0) {
      sumRemaining += remaining;
    } else {
      sumRemaining = remaining;
      start = i;
    }

    total += remaining;
  }

  return total >= 0 ? start : -1;
};

console.time('time');
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
console.timeEnd('time');
