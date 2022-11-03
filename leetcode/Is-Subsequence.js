const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 392,
  name: '392. Is Subsequence',
  url: 'https://leetcode.com/problems/is-subsequence/',
  difficulty: difficulty.easy,
  premium: true
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let l = 0,
    r = 0;

  let count = 0;

  while (r < t.length) {
    if (s[l] === t[r]) {
      count++;
      l++;
      r++;
    } else {
      r++;
    }
  }

  return count === s.length;
};
const label = 'time';
console.time(label);
console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
console.timeEnd(label);
