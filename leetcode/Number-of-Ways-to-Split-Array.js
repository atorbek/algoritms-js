const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 2270,
  name: 'Number of Ways to Split Array',
  url: 'https://leetcode.com/problems/number-of-ways-to-split-array/',
  difficulty: difficulty.middle,
  premium: false
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  const prefixSum = [0];
  let counter = 0;

  for (let i = 1; i <= nums.length; i++) {
    prefixSum.push(prefixSum[i - 1] + nums[i - 1]);
  }

  for (let i = 0; i < prefixSum.length; i++) {
    if (i + 1 === prefixSum.length - 1) {
      break;
    }

    const diff = prefixSum[prefixSum.length - 1] - prefixSum[i + 1];

    if (prefixSum[i + 1] >= diff) {
      counter += 1;
    }
  }

  return counter;
};

// 10 4 -8 7
// 0 10 14 6 13

// 13 - 10 = 3

const label = 'time';
console.time(label);
console.log(waysToSplitArray([10, 4, -8, 7]));
console.log(waysToSplitArray([2, 3, 1, 0]));
console.timeEnd(label);
