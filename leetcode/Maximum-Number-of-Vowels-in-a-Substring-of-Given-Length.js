const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1456,
  name: 'Maximum Number of Vowels in a Substring of Given Length',
  url:
    'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * Given a string s and an integer k.
 *
 * Return the maximum number of vowel letters in any substring of s with length k.
 *
 * Vowel letters in English are (a, e, i, o, u).
 *
 * Example 1:
 *
 * Input: s = "abciiidef", k = 3
 * Output: 3
 * Explanation: The substring "iii" contains 3 vowel letters.
 * Example 2:
 *
 * Input: s = "aeiou", k = 2
 * Output: 2
 * Explanation: Any substring of length 2 contains 2 vowels.
 * Example 3:
 *
 * Input: s = "leetcode", k = 3
 * Output: 2
 * Explanation: "lee", "eet" and "ode" contain 2 vowels.
 * Example 4:
 *
 * Input: s = "rhythms", k = 4
 * Output: 0
 * Explanation: We can see that s doesn't have any vowel letters.
 * Example 5:
 *
 * Input: s = "tryhard", k = 4
 * Output: 1
 */
function maxVowels(s, k) {
  let maxVowels = 0;
  let bufVowels = 0;
  let windowStart = 0;

  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (vowels.has(s[windowEnd])) {
      bufVowels++;
    }

    if (windowStart + k - 1 < windowEnd) {
      if (vowels.has(s[windowStart])) {
        bufVowels--;
      }
      windowStart++;
    }

    maxVowels = Math.max(maxVowels, bufVowels);
  }

  return maxVowels;
}

let b = new Date().getMilliseconds();
console.log(maxVowels('tryhard', 4)); // O(n)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
