const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 560,
  name: 'Subarray Sum Equals K',
  url: 'https://leetcode.com/problems/subarray-sum-equals-k/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.
 *
 * Example 1:
 *
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 * Example 2:
 *
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 */
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map([[0, 1]]);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1);
  }
  return count;
}

let b = new Date().getMilliseconds();
console.log(subarraySum([0, 0, 0], 0));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
