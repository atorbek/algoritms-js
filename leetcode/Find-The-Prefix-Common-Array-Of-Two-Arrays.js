const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 2657,
  name: 'Find the Prefix Common Array of Two Arrays',
  url:
    'https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const set = new Set();
  const res = [];
  let cnt = 0;

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      cnt++;
    } else {
      set.add(A[i]);
    }

    if (set.has(B[i])) {
      cnt++;
    } else {
      set.add(B[i]);
    }

    res[i] = cnt;
  }

  return res;
};

const label = 'time';
console.time(label);
console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]));
console.timeEnd(label);
