const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1539,
  name: 'Kth Missing Positive Number',
  url: 'https://leetcode.com/problems/kth-missing-positive-number/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let i = 1;
  let count = 0;
  let j = 0;

  while (k !== count) {
    if (i === arr[j]) {
      j += 1;
    } else {
      count += 1;
    }

    i++;
  }

  return i - 1;
};

/*

    0 2 3 4 0 0 7 0 0 0 11
    ^
*/

const label = 'time';
console.time(label);
console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
console.timeEnd(label);
