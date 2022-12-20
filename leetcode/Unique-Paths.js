const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 62,
  name: 'Unique Paths',
  url: 'https://leetcode.com/problems/unique-paths/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [];

  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

console.time('time');
console.log(uniquePaths(3, 7));
console.timeEnd('time');
