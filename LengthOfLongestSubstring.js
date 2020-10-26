/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const strLen = s.length;
  let ans = 0;

  for (let first = 0; first < strLen; first++) {
    const tmp = [];
    for (let i = first; i < strLen; i++) {
      let char = s[i];

      if (tmp[char]) {
        break;
      }

      tmp[s.charAt(i)] = true;
      ans = Math.max(ans, i - first + 1);
    }
  }

  return ans;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
