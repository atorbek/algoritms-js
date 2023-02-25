const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 88,
  name: 'Merge Sorted Array',
  url: 'https://leetcode.com/problems/merge-sorted-array/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];

    if (fVal > sVal) {
      nums1[i] = fVal;
      first--;
      i--;
    } else {
      nums1[i] = sVal;
      second--;
      i--;
    }
  }
};

const label = 'time';
console.time(label);
const nums11 = [1, 2, 3, 0, 0, 0];
const nums21 = [2, 5, 6];
merge(nums11, 3, nums21, 3);
console.log(nums11);
const nums12 = [1];
const nums22 = [];
merge(nums12, 1, nums22, 0);
console.log(nums12);
const nums13 = [0];
const nums23 = [0];
merge(nums13, 0, nums23, 1);
console.log(nums12);
console.timeEnd(label);
