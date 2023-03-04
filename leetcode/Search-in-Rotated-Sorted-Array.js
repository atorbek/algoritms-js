const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 33,
  name: 'Search in Rotated Sorted Array',
  url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    }

    if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
  }

  return nums[start] == target ? start : -1;
};

console.time('time');
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.timeEnd('time');

/**

  4 5 6 7 0 1 2
          ^
          ^

 */
