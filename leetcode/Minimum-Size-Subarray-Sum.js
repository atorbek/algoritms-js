const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 209,
  name: 'Minimum Size Subarray Sum',
  url: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr]
 * of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 *
 * Example 1:
 *
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 * Example 2:
 *
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 * Example 3:
 *
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 */
function minSubArrayLen(nums, target) {
  let n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= target) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left++];
    }
  }
  return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
}

let b = new Date().getMilliseconds();
console.log(minSubArrayLen([1, 2, 3, 4, 5], 11));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
