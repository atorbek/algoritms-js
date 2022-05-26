const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 349,
  name: 'Intersection of Two Arrays',
  url: 'https://leetcode.com/problems/intersection-of-two-arrays/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * Explanation: [4,9] is also accepted.
 *
 * Constraints:
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const result = [];

  const map = nums1.reduce((acc, num) => {
    acc[num] = acc[num] || 1;

    return acc;
  }, {});

  for (let i = 0; i < nums2.length; i++) {
    const current = nums2[i];
    const count = map[current];

    if (count && count > 0) {
      result.push(current);
      map[current] -= 1;
    }
  }

  return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2, 1];
console.time('time');
console.log(intersection(nums1, nums2));
console.timeEnd('time');

// 4 9 5  |  9 4 9 8 4
//     ^         ^
