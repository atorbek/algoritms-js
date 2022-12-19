const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 54,
  name: 'Spiral Matrix',
  url: 'https://leetcode.com/problems/spiral-matrix/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];

  if (matrix.length === 0) {
    return res;
  }

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let columnBegin = 0;
  let columnEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
    for (let i = columnBegin; i <= columnEnd; i++) {
      res.push(matrix[rowBegin][i]);
    }

    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      res.push(matrix[i][columnEnd]);
    }

    columnEnd--;

    if (rowBegin <= rowEnd) {
      for (let i = columnEnd; i >= columnBegin; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }

    rowEnd--;

    if (columnBegin <= columnEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        res.push(matrix[i][columnBegin]);
      }
    }

    columnBegin++;
  }

  return res;
};

console.time('time');
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
);
console.timeEnd('time');
