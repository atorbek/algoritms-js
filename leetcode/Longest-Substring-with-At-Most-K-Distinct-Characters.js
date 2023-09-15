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
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  const n = s.length;
  let maxSize = 0;

  const counter = new Map();

  let left = 0;
  for (let right = 0; right < n; right++) {
    counter.set(s[right], counter.get(s[right]) + 1 || 1);

    while (counter.size > k) {
      counter.set(s[left], counter.get(s[left]) - 1);
      if (counter.get(s[left]) == 0) {
        counter.delete(s[left]);
      }
      left++;
    }

    maxSize = Math.max(maxSize, right - left + 1);
  }

  return maxSize;
};

/**

         eceba
 start   ^
 end        ^

    ece
    ba


    e: 2,
    c: 1

    count = 2 


 */

let b = new Date().getMilliseconds();
console.log(lengthOfLongestSubstringKDistinct('aabbb', 2)); // O(n)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
