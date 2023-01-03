const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 283,
  name: 'Move Zeroes',
  url: 'https://leetcode.com/problems/move-zeroes/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length;

  let count = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.time('time');
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.timeEnd('time');
