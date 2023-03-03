const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 974,
  name: 'Subarray Sums Divisible by K',
  url: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let ans = 0;
  let prefix = 0;

  let count = new Array(k).fill(0);

  count[0] = 1;

  for (let num of nums) {
    // Прибавляем k и еще раз берем по модулю, чтобы не было отрицательных чисел
    prefix = (prefix + (num % k) + k) % k;
    ans += count[prefix];
    ++count[prefix];
  }

  return ans;
};

/**

  4 5 0 -2 -3 1
0 4 9 9  7  4 5

(prefixSum(j) - prefixSum(i)) % k = 0

prefixSum(j) % k - prefixSum(i)% k = 0

prefixSum(j) % k = prefixSum(i) % k

Если остатки равны, то этот подмасcив делиться на k без остатка.
 */

const label = 'time';
console.time(label);
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
console.log(subarraysDivByK([5], 9));
console.timeEnd(label);
