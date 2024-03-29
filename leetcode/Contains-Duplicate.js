const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 217,
  name: 'Contains Duplicate',
  url: 'https://leetcode.com/problems/contains-duplicate/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 *
 *
 */
function containsDuplicate(nums) {
  nums.sort((a, b) => a - b);

  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
    i += 1;
  }

  return false;
}

const arr1 = [1, 2, 3, 1];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.time('time');
console.log(containsDuplicate(arr1));
console.log(containsDuplicate(arr2));
console.log(containsDuplicate(arr3));
console.timeEnd('time');
