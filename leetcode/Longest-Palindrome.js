const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 409,
  name: 'Longest Palindrome',
  url: 'https://leetcode.com/problems/longest-palindrome/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const letters = {};

  for (let i = 0; i < s.length; i++) {
    letters[s[i]] = letters[s[i]] + 1 || 1;
  }

  const counts = Object.values(letters);

  let ans = 0;

  for (let i = 0; i < counts.length; i++) {
    ans += Math.trunc(counts[i] / 2) * 2;
    if (ans % 2 == 0 && counts[i] % 2 == 1) {
      ans++;
    }
  }

  return ans;
};

let b = new Date().getMilliseconds();
console.log(longestPalindrome('abccccdd'));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
