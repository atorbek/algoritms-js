const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 125,
  name: 'Valid Palindrome',
  url: 'https://leetcode.com/problems/valid-palindrome/',
  difficulty: difficulty.easy,
  premium: false
};

/**
*   Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*
* Example 1:
*
* Input: s = "A man, a plan, a canal: Panama"
* Output: true
* Explanation: "amanaplanacanalpanama" is a palindrome.

* Example 2:
*
* Input: s = "race a car"
* Output: false
* Explanation: "raceacar" is not a palindrome.
*
*
* Constraints:
*
* 1 <= s.length <= 2 * 105
* s consists only of printable ASCII characters.
 */
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }

    l += 1;
    r -= 1;
  }

  return true;
}

const s1 = 'A man, a plan, a canal: Panama';
const s2 = 'race a car';
const s3 = 'ab_a';
const s4 = '0P';
console.time('time');
console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));
console.log(isPalindrome(s4));
console.timeEnd('time');
