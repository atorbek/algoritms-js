const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1706,
  name: 'Where Will the Ball Fall',
  url: 'https://leetcode.com/problems/where-will-the-ball-fall/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const result = [];

  for (let j = 0; j < grid[0].length; j++) {
    result[j] = findBallDropColumn(0, j, grid);
  }

  return result;
};

function findBallDropColumn(i, j, grid) {
  if (i == grid.length) {
    return j;
  }

  const nextColumn = j + grid[i][j];

  if (
    nextColumn < 0 ||
    nextColumn > grid[0].length - 1 ||
    grid[i][j] != grid[i][nextColumn]
  ) {
    return -1;
  }

  return findBallDropColumn(i + 1, nextColumn, grid);
}

console.time('time');
console.log(
  findBall([
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1]
  ])
);
console.log(findBall([[-1]]));
console.log(
  findBall([
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1]
  ])
);
console.timeEnd('time');
