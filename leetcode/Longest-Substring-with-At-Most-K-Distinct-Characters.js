const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 386,
  name: 'Longest Substring with At Most K Distinct Characters',
  url:
    'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 *
 * Description
 * Given a string S, find the length of the longest substring T that contains at most k distinct characters.
 *
 * Example
 * Example 1:
 *
 * Input: S = "eceba" and k = 3
 * Output: 4
 * Explanation: T = "eceb"
 * Example 2:
 *
 * Input: S = "WORLD" and k = 4
 * Output: 4
 * Explanation: T = "WORL" or "ORLD"
 * Challenge
 */
function lengthOfLongestSubstringKDistinct(str, k) {
  let f = 0;
  let l = 0;
  let resSize = 0;

  while (str.length >= l) {
    const subStr = str.substring(f, l);

    const size = new Set([...subStr]).size;

    if (size > k) {
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
console.log(lengthOfLongestSubstringKDistinct('aabbb', 2)); // O(n)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
