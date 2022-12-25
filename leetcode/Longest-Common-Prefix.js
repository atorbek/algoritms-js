const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 14,
  name: 'Longest Common Prefix',
  url: 'https://leetcode.com/problems/longest-common-prefix',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let count = 0;
    while (count < prefix.length && prefix[count] === strs[i][count]) {
      count++;
    }

    prefix = prefix.substring(0, count);
  }

  return prefix;
};

console.time('time');
console.log(longestCommonPrefix('flower', 'flow', 'flight'));
console.timeEnd('time');
