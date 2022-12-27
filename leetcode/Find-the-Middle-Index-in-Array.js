const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1991,
  name: 'Find the Middle Index in Array',
  url: 'https://leetcode.com/problems/find-the-middle-index-in-array/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];

    if (leftSum - nums[i] === sum - leftSum) {
      return i;
    }
  }

  return -1;
};

const label = 'time';
console.time(label);
console.log(findMiddleIndex([2, 3, -1, 8, 4]));
console.log(findMiddleIndex([1, -1, 4]));
console.log(findMiddleIndex([2, 5]));
console.timeEnd(label);
