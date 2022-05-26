const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1100,
  name: 'Find K Length Substrings With No Repeated Characters',
  url:
    'https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 *
 * Given a string S, return the number of substrings of length K with no repeated characters.
 *
 * Example 1:
 *
 * Input: S = "havefunonleetcode", K = 5
 * Output: 6
 * Explanation:
 * There are 6 substrings they are : 'havef','avefu','vefun','efuno','etcod','tcode'.
 * Example 2:
 *
 * Input: S = "home", K = 5
 * Output: 0
 * Explanation:
 * Notice K can be larger than the length of S. In this case is not possible to find any substring.
 */
function numKLenSubstrNoRepeats(str, k) {
  let f = 0;
  let l = k;
  let counter = 0;

  let repeaterMap = new Map();

  for (let i = f; i < l; i++) {
    if (repeaterMap.has(str[i])) {
      repeaterMap.set(str[i], repeaterMap.get(str[i]) + 1);
    } else {
      repeaterMap.set(str[i], 1);
    }

    if (l - i === 1) {
      if (repeaterMap.size === k) {
        counter++;
      }

      if (str.length !== l) {
        i = f++;
        l++;
        repeaterMap = new Map();
      }
    }
  }

  return counter;
}

function numKLenSubstrNoRepeats1(str, k) {
  let f = 0;
  let l = k;
  let counter = 0;

  if (str.length < k) {
    return counter;
  }

  while (str.length >= l) {
    const repeaterSet = new Set([...str.substring(f, l)]);

    if (repeaterSet.size === k) {
      counter++;
    }

    f++;
    l++;
  }

  return counter;
}

let b = new Date().getMilliseconds();
console.log(numKLenSubstrNoRepeats('havefunonleetcode', 5)); // O(n^2)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
b = new Date().getMilliseconds();
console.log(numKLenSubstrNoRepeats1('havefunonleetcode', 5)); // O(n)
e = new Date().getMilliseconds();
console.log(e - b + 'ms');
