const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 48,
  name: 'Rotate Image',
  url: 'https://leetcode.com/problems/rotate-image/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  function transpose(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let tmp = matrix[j][i];
        matrix[j][i] = matrix[i][j];
        matrix[i][j] = tmp;
      }
    }
  }

  function reverse(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
        let tmp = matrix[i][j];
        matrix[i][j] = matrix[i][n - j - 1];
        matrix[i][n - j - 1] = tmp;
      }
    }
  }

  // Сначала транспонируем матрицу, т.е нужно каждую строчку исходной матрицы записать в виде столбца в том же порядке
  transpose(matrix);
  // Затем делаем реверс каждой строки
  reverse(matrix);
};

/**

  4 5 0 -2 -3 1
0 4 9 9  7  4 5

(prefixSum(j) - prefixSum(i)) % k = 0

prefixSum(j) % k - prefixSum(i)% k = 0

prefixSum(j) % k = prefixSum(i) % k

Если остатки равны, то этот подмасcив делиться на k без остатка.
 */

const label = 'time';
console.time(label);
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate(matrix1);
console.log(matrix1);
const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];
rotate(matrix2);
console.log(matrix2);
console.timeEnd(label);
