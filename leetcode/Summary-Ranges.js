const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 228,
  name: 'Summary Ranges',
  url: 'https://leetcode.com/problems/summary-ranges/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  nums.sort((a, b) => a - b); // n*logn

  let l = 0;
  let r = 0;
  let res = [];

  while (r < nums.length) {
    // n
    l = r;
    while (r + 1 < nums.length && nums[r + 1] === nums[r] + 1) {
      r += 1;
    }

    if (l === r) {
      res.push(nums[l] + '');
    } else {
      res.push(nums[l] + '->' + nums[r]);
    }

    r += 1;
  }

  return res; // n
};

const label = 'time';
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.timeEnd(label);
