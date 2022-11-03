const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 724,
  name: ' Find Pivot Index',
  url: 'https://leetcode.com/problems/find-pivot-index/',
  difficulty: difficulty.easy,
  premium: false
};

const pivotIndex = function (nums) {
  const sum = nums.reduce((acc, e) => acc + e, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - leftSum - nums[i]) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

const label = 'time';
console.time(label);
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
console.timeEnd(label);
