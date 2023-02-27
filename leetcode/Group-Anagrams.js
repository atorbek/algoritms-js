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
https: console.time('time');
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
console.timeEnd('time');
