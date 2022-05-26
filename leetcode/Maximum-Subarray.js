const { difficulty } = require('../constants');

const leetcode = {
  id: 53,
  name: ' Maximum Subarray',
  url: 'https://leetcode.com/problems/maximum-subarray/',
  difficulty: difficulty.easy,
  premium: false
};

function maxSubArray(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];

    if (curSum > maxSum) {
      maxSum = curSum;
    }

    if (curSum < 0) {
      curSum = 0;
    }
  }

  return maxSum;
}

console.time('time');
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.timeEnd('time');

module.exports = {
  leetcode
};
