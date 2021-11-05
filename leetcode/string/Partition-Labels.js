/**
 * You are given a string s. We want to partition the string
 * into as many parts as possible so that each letter appears in at most one part.
 *
 * Return a list of integers representing the size of these parts.
 *
 *
 * Example 1:
 *
 * Input: s = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
 *
 * Example 2:
 *
 * Input: s = "eccbbbbdec"
 * Output: [10]
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 500
 * s consists of lowercase English letters.
 */

// O(n^2)
function partitionLabels2(s) {
  const dict = {};

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    dict[c] = dict[c] + 1 || 1;
  }

  let l = 0;
  let r = 0;

  function isAppearLetter(l, r) {
    for (let i = l; i < r; i++) {
      const ch = s[i];

      if (dict[ch]) {
        return false;
      }
    }

    return true;
  }

  let res = [];
  let sum = 0;
  while (r < s.length) {
    let ch = s[r];
    dict[ch] = dict[ch] - 1 || 0;

    if (dict[ch] === 0 && isAppearLetter(l, r)) {
      res.push(r - l + 1);
      l = r + 1;
    }

    r += 1;
  }

  return res;
}

// O(n)
function partitionLabels(s) {
  const dict = {};

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    dict[ch] = i;
  }

  let j = 0;
  let anchor = 0;

  let res = [];

  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    j = Math.max(j, dict[ch]);
    if (i === j) {
      res.push(i - anchor + 1);
      anchor = i + 1;
    }
  }

  return res;
}

console.time('time');
console.log(partitionLabels('abaccbdeffed'));
// console.log(partitionLabels('ababcbacadefegdehijhklij'));
// console.log(partitionLabels('eccbbbbdec'));
console.timeEnd('time');

// abaccbdeffed
//
