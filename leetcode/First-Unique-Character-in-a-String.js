


/**
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 *
 *
 * Example 1:
 *
 * Input: s = "leetcode"
 * Output: 0
 *
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 *
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 *
 * Constraints:
 *
 * 1 <= s.length <= 105
 * s consists of only lowercase English letters.
 *
 */
function firstUniqChar(s) {
  const characters = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (characters.has(ch)) {
      characters.set(ch, characters.get(ch) + 1);
    } else {
      characters.set(ch, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (characters.get(ch) === 1) {
      return i;
    }

  }

  return -1;
}

const s = "   ";
console.time('time');
console.log(firstUniqChar(s));
console.timeEnd('time');
