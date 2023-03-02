const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 3,
  name: 'Longest Substring Without Repeating Characters',
  url:
    'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  difficulty: difficulty.medium,
  premium: false
};

function lengthOfLongestSubstring(s) {
  let ans = 0;
  const map = {};

  let i = 0;
  for (let j = 0; j < s.length; j++) {
    if (map[s.charCodeAt(j)]) {
      i = Math.max(map[s.charCodeAt(j)], i);
    }

    ans = Math.max(ans, j - i + 1);
    map[s.charCodeAt(j)] = j + 1;
  }

  return ans;
}

console.time('time');
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.timeEnd('time');
