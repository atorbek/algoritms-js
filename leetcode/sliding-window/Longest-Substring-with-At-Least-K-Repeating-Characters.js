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
function longestSubstring(s, k) {}

let b = new Date().getMilliseconds();
console.log(longestSubstring('aaabb', 3)); // O(n)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
