const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 5,
  name: 'Longest Palindromic Substring',
  url: 'https://leetcode.com/problems/longest-palindromic-substring/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Example 3:
 * Input: s = "a"
 * Output: "a"
 *
 * Example 4:
 * Input: s = "ac"
 * Output: "a"
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 *
 */
function longestPalindrome2(s) {
  let longestPalindrome = '';

  function compare(s) {
    if (!s) {
      return;
    }

    // n
    if (longestPalindrome.length <= s.length && isPalindrome(s)) {
      longestPalindrome = s;
    }

    compare(s.slice(0, -1)); // n * n
    compare(s.slice(1));
    compare(s.slice(1, -1));

    return longestPalindrome;
  }

  return compare(s);
}

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

function longestPalindrome(s) {
  if (s == null || s.length < 1) {
    return '';
  }
  let start = 0;
  let end = 0;
  // babad
  //  ab
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i); // 1
    const len2 = expandAroundCenter(s, i, i + 1); // 0
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  let l = left;
  let r = right;
  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    l--;
    r++;
  }

  return r - l - 1;
}

console.time('time');
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('ac'));
console.log(longestPalindrome('"abbcccbbbcaaccbababcbcabca"'));
console.timeEnd('time');
