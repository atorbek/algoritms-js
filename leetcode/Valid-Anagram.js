const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 242,
  name: 'Valid Anagram',
  url: 'https://leetcode.com/problems/valid-anagram/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 *
 */
function isAnagram(s, t) {
  const dict1 = buildDictionary(s); // O(n)
  const dict2 = buildDictionary(t); // O(n)

  if (Object.keys(dict1).length !== Object.keys(dict2).length) {
    // O(n)
    return false;
  }

  for (let c in dict1) {
    if (dict1[c] !== dict2[c]) {
      return false;
    }
  }

  return true;
}

function buildDictionary(str) {
  const dictionary = {};

  str = str.toLowerCase().replace(/[^\w]/g);
  for (const c of str) {
    dictionary[c] = dictionary[c] + 1 || 1;
  }

  return dictionary;
}

console.time('time');
console.log(isAnagram('hell,o', 'ehlol'));
console.log(isAnagram('hello', 'bye'));
console.log(isAnagram('hello', 'hello'));
console.log(isAnagram('hello', 'oleh'));
console.log(isAnagram('hello', 'helo'));
console.timeEnd('time');
