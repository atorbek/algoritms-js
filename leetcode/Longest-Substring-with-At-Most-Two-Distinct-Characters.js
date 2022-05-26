const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 928,
  name: 'Longest Substring with At Most Two Distinct Characters',
  url:
    'https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 * Description:
 * Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.
 *
 * Example 1:
 *
 * Input: "eceba"
 * Output: 3
 * Explanation: t is "ece" which its length is 3.
 * Example 2:
 *
 * Input: "ccaabbb"
 * Output: 5
 * Explanation: t is "aabbb" which its length is 5.
 */
function lengthOfLongestSubstringKDistinct(str) {
  let f = 0;
  let l = 0;
  let resSize = 0;

  while (str.length >= l) {
    const subStr = str.substring(f, l);

    const size = new Set([...subStr]).size;

    if (size > 2) {
      resSize = subStr.length;
      f++;
      l++;
    } else {
      resSize = subStr.length;
      l++;
    }
  }

  return resSize;
}

let b = new Date().getMilliseconds();
console.log(lengthOfLongestSubstringKDistinct('aabbb')); // O(n)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
