const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 63,
  name: 'Unique Paths II',
  url: 'https://leetcode.com/problems/unique-paths-ii/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  obstacleGrid[0][0] = 1;

  for (let col = 1; col < n; col++) {
    obstacleGrid[0][col] =
      obstacleGrid[0][col] === 0 && obstacleGrid[0][col - 1] === 1 ? 1 : 0;
  }

  for (let row = 1; row < m; row++) {
    obstacleGrid[row][0] =
      obstacleGrid[row][0] === 0 && obstacleGrid[row - 1][0] === 1 ? 1 : 0;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }

  return obstacleGrid[m - 1][n - 1];
};

console.time('time');
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
);

uniquePathsWithObstacles([
  [0, 1],
  [0, 0]
]);
console.timeEnd('time');
