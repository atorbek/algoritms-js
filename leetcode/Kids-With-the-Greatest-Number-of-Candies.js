const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1431,
  name: 'Kids With the Greatest Number of Candies',
  url:
    'https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = candies.reduce((max, candyCount) => Math.max(max, candyCount), 1);

  for (let i = 0; i < candies.length; i++) {
    result[i] = candies[i] + extraCandies >= max;
  }

  return result;
};

const label = 'time';
console.time(label);
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
console.timeEnd(label);
