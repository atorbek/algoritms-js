const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1658,
  name: 'Minimum Operations to Reduce X to Zero',
  url: 'https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * You are given an integer array nums and an integer x.
 * In one operation, you can either remove the leftmost or the rightmost element from the array nums
 * and subtract its value from x. Note that this modifies the array for future operations.
 *
 * Return the minimum number of operations to reduce x to exactly 0 if it's possible, otherwise, return -1.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,4,2,3], x = 5
 * Output: 2
 * Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
 * Example 2:
 *
 * Input: nums = [5,6,7,8,9], x = 4
 * Output: -1
 * Example 3:
 *
 * Input: nums = [3,2,20,1,1,3], x = 10
 * Output: 5
 * Explanation: The optimal solution is to remove the last three elements and the first two elements
 * (5 operations in total) to reduce x to zero.
 */
function minOperations(nums, x) {
  const target = nums.reduce((prev, curr) => prev + curr) - x;

  if (target === 0) {
    return nums.length;
  }

  let left = 0;
  let right = 0;
  let current = 0;
  let count = 0;

  while (right < nums.length) {
    current = current + nums[right];

    while (left < right && current > target) {
      current = current - nums[left];
      left = left + 1;
    }
    if (current === target) {
      count = Math.max(count, right - left + 1);
    }
    right = right + 1;
  }

  return count === 0 ? -1 : nums.length - count;
}

let b = new Date().getMilliseconds();
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
