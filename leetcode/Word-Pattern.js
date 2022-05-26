const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 290,
  name: 'Word Pattern',
  url: 'https://leetcode.com/problems/word-pattern/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * https://leetcode.com/problems/word-pattern/
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 *
 * Example 1:
 * Input: pattern = "abba", s = "dog cat cat dog"
 * Output: true
 *
 * Example 2:
 * Input: pattern = "abba", s = "dog cat cat fish"
 * Output: false
 *
 * Example 3:
 * Input: pattern = "aaaa", s = "dog cat cat dog"
 * Output: false
 * Example 4:
 *
 * Input: pattern = "abba", s = "dog dog dog dog"
 * Output: false
 *
 *
 * Constraints:
 *
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lower-case English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
 * Accepted
 *
 *
 */
function wordPattern(pattern, s) {
  s = s.split(' ');

  if (pattern.length !== s.length) {
    return false;
  }

  const dict1 = {};
  const dict2 = {};
  for (let i = 0; i < s.length; i++) {
    ch1 = s[i];
    ch2 = pattern[i];

    if (!dict1[ch1] && !dict2[ch2]) {
      dict1[ch1] = ch2;
      dict2[ch2] = ch1;
    } else if (!(dict1[ch1] === ch2 && dict2[ch2] === ch1)) {
      return false;
    }
  }

  return true;
}

const s = '   ';
console.time('time');
console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
console.log(wordPattern('abba', 'dog dog dog dog')); // false
console.log(wordPattern('ab', 'happy hacking')); // false
console.timeEnd('time');
