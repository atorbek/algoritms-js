const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 438,
  name: 'Find All Anagrams in a String',
  url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
  difficulty: difficulty.middle,
  premium: false
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  const charCounts = [];

  if (s.length === 0 || s === null) {
    return result;
  }

  for (const c of p) {
    charCounts[c.charCodeAt(0) - 'a'.charCodeAt(0)] =
      charCounts[c.charCodeAt(0) - 'a'.charCodeAt(0)] + 1 || 1;
  }

  console.log(charCounts);

  let left = 0;
  let right = 0;

  let count = p.length;

  //count = 1

  //cbaebabcd
  //^
  //   ^

  while (right < s.length) {
    if (charCounts[s.charCodeAt(right++) - 'a'.charCodeAt(0)]-- >= 1) {
      count--;
    }

    console.log(count, left, right);

    if (count === 0) {
      result.push(left);
    }

    if (
      right - left === p.length &&
      charCounts[s.charCodeAt(left++) - 'a'.charCodeAt(0)]++ >= 0
    ) {
      count++;
    }
  }

  return result;
};

console.time('time');
console.log(findAnagrams('cbaebabacd', 'abc'));
console.timeEnd('time');
