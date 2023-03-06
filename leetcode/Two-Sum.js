const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1,
  name: 'Two Sum',
  url: 'https://leetcode.com/problems/two-sum/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (arr, target) => {
  const dict = {};

  arr.forEach((elem, i) => {
    dict[elem] = i;
  });

  for (let i = 0; i < arr.length; i++) {
    diff = target - arr[i];

    if (dict[diff] && dict[diff] !== i) {
      return [i, dict[diff]];
    }
  }
  return [];
};

/**
    {
        2: 0,
        7: 1,
        11: 2,
        15: 3
    }

    9 - 2 = 7

    2 7 11 15 / 9

 */
