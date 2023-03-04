const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 34,
  name: 'Find First and Last Position of Element in Sorted Array',
  url:
    'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function binarySearch(nums, target, isLeft = false) {
    let index = -1;

    let start = 0;
    let end = nums.length;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        index = mid;

        if (isLeft) {
          end = mid;
        } else {
          start = mid + 1;
        }
      } else if (nums[mid] > target) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    return index;
  }

  let res = [-1, -1];

  res[0] = binarySearch(nums, target, true);

  if (res[0] !== -1) {
    res[1] = binarySearch(nums, target);
  }

  return res;
};

console.time('time');
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.timeEnd('time');
