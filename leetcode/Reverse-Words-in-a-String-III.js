const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 557,
  name: 'Reverse Words in a String III',
  url: 'https://leetcode.com/problems/reverse-words-in-a-string-iii/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let a = s.split('');
  let lastStart = -1;

  for (let i = 0; i <= a.length; i++) {
    if (i === a.length || a[i] === ' ') {
      let start = lastStart + 1;
      let end = i - 1;

      while (start < end) {
        const tmp = a[start];
        a[start] = a[end];
        a[end] = tmp;
        start++;
        end--;
      }

      lastStart = i;
    }
  }

  return a.join('');
};

console.time('time');
// eslint-disable-next-line quotes
console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));
console.timeEnd('time');
