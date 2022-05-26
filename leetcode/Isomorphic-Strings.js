/**
 * https://leetcode.com/problems/isomorphic-strings/
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 *
 * Example 1:
 *
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Example 3:
 *
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Constraints:
 *
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 *
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const dict1 = {};
  const dict2 = {};

  for (let i = 0; i < s.length; i++) {
    const ch1 = s[i];
    const ch2 = t[i];

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
console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('badc', 'baba')); // false
console.timeEnd('time');

const obj1 = {
  b: 'b',
  a: 'a',
  d: undefined
};

const obj2 = {
  b: 'b',
  a: 'a'
};
