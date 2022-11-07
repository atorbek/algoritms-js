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
  let i = 0,
    j = 0;

  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === s.length;
};

const label = 'time';
console.time(label);
console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
console.timeEnd(label);
