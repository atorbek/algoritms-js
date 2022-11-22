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
  const dict1 = buildDictionary(p);

  let startWindow = 0;
  let endWindow = p.length - 1;

  let result = [];

  if (s.length < p.length) {
    return [];
  }

  if (s === p) {
    return [0];
  }

  const dict2 = {};

  while (endWindow < s.length) {
    for (let i = startWindow; i <= endWindow; i++) {
      dict2[s[i]] = dict2[s[i]] + 1 || 1;
    }

    let isAnagram = true;

    for (let c in dict1) {
      if (dict1[c] !== dict2[c]) {
        isAnagram = false;
        break;
      }
    }

    if (isAnagram) {
      result.push(startWindow);
    }

    startWindow++;
    endWindow++;
  }

  return result;
};

function buildDictionary(str) {
  const dictionary = {};

  str = str.toLowerCase().replace(/[^\w]/g);
  for (const c of str) {
    dictionary[c] = dictionary[c] + 1 || 1;
  }

  return dictionary;
}

console.time('time');
console.log(findAnagrams('cbaebabacd', 'abc'));
console.timeEnd('time');
