const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 704,
  name: 'Binary Search',
  url: 'https://leetcode.com/problems/binary-search/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * Example 2:
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -104 < nums[i], target < 104
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 *
 */
function search(nums, target) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

const arr1 = [-1, 0, 3, 5, 9, 12];
const arr2 = [5];
console.time('time');
console.log(search(arr1, 9));
console.log(search(arr2, 5));
console.timeEnd('time');

// 8 1 2 3 4 2 3 1
// 1 2 3 4 5 6 7 8
