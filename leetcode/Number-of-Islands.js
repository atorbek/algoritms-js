const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 200,
  name: 'Number of Islands',
  url: 'https://leetcode.com/problems/number-of-islands/',
  difficulty: difficulty.middle,
  premium: false
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        callBFS(grid, i, j);
      }
    }
  }

  return count;
};

function callBFS(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === '0'
  ) {
    return;
  }

  grid[i][j] = '0';
  callBFS(grid, i + 1, j);
  callBFS(grid, i - 1, j);
  callBFS(grid, i, j + 1);
  callBFS(grid, i, j - 1);
}

let b = new Date().getMilliseconds();
console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
