const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 279,
  name: 'Perfect Squares',
  url: 'https://leetcode.com/problems/perfect-squares/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n);

  dp[0] = 0;

  for (let target = 0; target <= n; target++) {
    for (let s = 1; s <= target; s++) {
      let square = s * s;

      if (target - square < 0) {
        break;
      }

      dp[target] = Math.min(dp[target], 1 + dp[target - square]);
    }
  }

  return dp[n];
};

console.time('time');
console.log(numSquares(12));
console.timeEnd('time');
