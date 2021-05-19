/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * Example 4:
 *
 * Input: s = ""
 * Output: 0
 */
function lengthOfLongestSubstring(str) {
  let f = 0;
  let l = f;
  let count = 0;

  while (str.length >= l) {
    const subStr = new Set([...str.substring(f, l)]);

    if (subStr.size < l - f) {
      if (count < subStr.size) {
        count = subStr.size;
      }
      f++;
      l++;
    } else {
      if (count < subStr.size) {
        count = subStr.size;
      }

      l++;
    }
  }

  return count;
}

let b = new Date().getMilliseconds();
console.log(lengthOfLongestSubstring('a')); // O(n)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
