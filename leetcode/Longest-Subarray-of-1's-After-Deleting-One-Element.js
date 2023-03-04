const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1493,
  // eslint-disable-next-line quotes
  name: "Longest Subarray of 1's After Deleting One Element",
  url:
    'https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
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

    res = Math.max(res, windowEnd - windowStart);
  }

  return res;
};

/**
    0 1 1 1 0 1 1 0 1
s     ^
e               ^

 */

console.time('time');
console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.timeEnd('time');
