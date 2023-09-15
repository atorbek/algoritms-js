const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 487,
  name: 'Max Consecutive Ones II',
  url: 'https://leetcode.com/problems/max-consecutive-ones-ii/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let zeros = 0;
  let res = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] === 0) {
      zeros++;
    }

    while (zeros > 1) {
      if (nums[windowStart] === 0) {
        zeros--;
      }
      windowStart++;
    }

    res = Math.max(res, windowEnd - windowStart + 1);
  }

  return res;
};

/**
    1 0 0 0 1 0 1
    ^
    ^ 
 */

console.time('time');
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.timeEnd('time');
