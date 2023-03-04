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
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = i;
  }

  let start = 0;
  let end = arr.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (mid === target && arr[mid] !== undefined) {
      return arr[mid];
    } else if (mid > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

console.time('time');
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.timeEnd('time');
