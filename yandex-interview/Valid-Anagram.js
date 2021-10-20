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
function isPalindrome(s, t) {
  const dict1 = buildDictionary(s);
  const dict2 = buildDictionary(t);

  if (Object.keys(dict1).length !== Object.keys(dict2).length) {
    return false;
  }

  for (const ch in dict1) {
    if (dict1[ch] !== dict2[ch]) {
      return false;
    }
  }

  return true;
}

// /[^/w]/g

function buildDictionary(str) {
  dict = {};

  str = str.toLowerCase().replace(/[^\w]/g);
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    dict[ch] = dict[ch] + 1 || 1;
  }

  return dict;
}

console.time('time');
console.log(isPalindrome('hello', 'ehlol'));
console.log(isPalindrome('hello', 'bye'));
console.log(isPalindrome('hello', 'hello'));
console.log(isPalindrome('hello', 'oleh'));
console.log(isPalindrome('hello', 'helo'));
console.timeEnd('time');
