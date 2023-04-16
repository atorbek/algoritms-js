const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 4,
  name: 'Median of Two Sorted Arrays',
  url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
  difficulty: difficulty.hard,
  premium: false
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let n = nums1.length;
  let m = nums2.length;
  let m1 = -1;
  let m2 = -1;

  let count = 0;

  const mid = Math.floor((n + m) / 2);

  // Если количество элементов в массиве нечетное
  if ((m + n) % 2 == 1) {
    // Ходим пока массиву пока не достигнем его середину
    for (count = 0; count <= mid; count++) {
      // Если i и неравно размеру массива nums1 и j неравно размеру массива nums2
      // Эти условия нужны для того, чтобы пробежать по массиву
      // В m1 запоминаем каждый пройденный элемент массива nums1 и nums2
      if (i !== n && j !== m) {
        m1 = nums1[i] > nums2[j] ? nums2[j++] : nums1[i++];
      } else if (i < n) {
        m1 = nums1[i++];
      } else {
        m1 = nums2[j++];
      }
    } // O(n + m)

    return m1;
  } else {
    for (count = 0; count <= mid; count++) {
      m2 = m1;
      if (i != n && j != m) {
        m1 = nums1[i] > nums2[j] ? nums2[j++] : nums1[i++];
      } else if (i < n) {
        m1 = nums1[i++];
      } else {
        m1 = nums2[j++];
      }
    } // O(n + m)

    return (m1 + m2) / 2;
  }
};

const label = 'time';
console.time(label);
console.log(findMedianSortedArrays([1, 3], [2]));
console.timeEnd(label);
