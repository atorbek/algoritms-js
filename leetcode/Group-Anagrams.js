const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 49,
  name: 'Group Anagrams',
  url: 'https://leetcode.com/problems/group-anagrams/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) {
    return [];
  }

  let dict = {};

  const count = [];

  for (let str of strs) {
    // n

    // array will be filled by 0
    for (let i = 0; i < 26; i++) {
      count[i] = 0;
    }

    // create key by str
    for (let i = 0; i < str.length; i++) {
      let charCode = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
      count[charCode] += 1;
    }

    let charCodesAsString = count.join('#');

    // ^3k

    if (Array.isArray(dict[charCodesAsString])) {
      dict[charCodesAsString].push(str);
    } else {
      dict[charCodesAsString] = [str];
    }
  } // O(n*3k) => O(n*k)

  return [...Object.values(dict)];
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function (strs) {
  let dict = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = [...strs[i]].sort().join(''); // n*klog(k)

    if (dict[sortedStr]) {
      dict[sortedStr].push(strs[i]);
    } else {
      dict[sortedStr] = [strs[i]];
    }
  }

  return [...Object.values(dict)]; // n
};

console.time('time');
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
console.timeEnd('time');
