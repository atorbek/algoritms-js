const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 28,
  name: 'Find the Index of the First Occurrence in a String',
  url:
    'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let m = needle.length;
  let n = haystack.length;

  for (let windowStart = 0; windowStart <= n - m; windowStart++) {
    for (let i = 0; i < m; i++) {
      if (needle[i] != haystack[windowStart + i]) {
        break;
      }
      if (i == m - 1) {
        return windowStart;
      }
    }
  }

  return -1;
}; // O (n*m)

/**
    mississippi
      ^

    issip
    ^

 */

const label = 'time';
console.time(label);
console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
console.timeEnd(label);
