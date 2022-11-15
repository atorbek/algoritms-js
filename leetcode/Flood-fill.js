const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 733,
  name: 'Backspace String Compare',
  url: 'https://leetcode.com/problems/flood-fill/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const stack = []; // 1 1

  const m = image.length - 1;
  const n = image[0].length - 1;

  const replacedColor = image[sr][sc];

  stack.push([sr, sc]);

  console.log([sr, sc]);

  while (stack.length) {
    const [i, j] = stack.pop();

    console.log(stack, [i, j], m, n);

    if (i >= 0 && i <= m && j >= 0 && j <= n) {
      if (
        image[i][j] !== undefined &&
        image[i][j] !== color &&
        image[i][j] === replacedColor
      ) {
        image[i][j] = color;

        stack.push([i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]);
      }
    }
  }

  return image;
};

let b = new Date().getMilliseconds();
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0]
    ],
    0,
    0,
    0
  )
);
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
