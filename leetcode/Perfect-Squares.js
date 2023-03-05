const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 279,
  name: 'Perfect Squares',
  url: 'https://leetcode.com/problems/perfect-squares/',
  difficulty: difficulty.medium,
  premium: false
};

function isPerfectSquare(n) {
  let square = Math.floor(Math.sqrt(n));
  return square * square === n;
}

function getSquares(n, rem) {
  if (isPerfectSquare(n)) {
    return 1;
  }

  if (rem === 1) {
    return 5;
  }

  let ans = 5;

  for (let first = 1; first * first <= n; first++) {
    ans = Math.min(ans, 1 + numSquares(n - first * first, rem - 1));
  }

  return ans;
}

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  return getSquares(n, 4);
};

function numSquares2(n) {
  let squares = new Array(n + 1);

  squares[0] = 0;

  let max = Number.MAX_VALUE;

  for (let i = 1; i < squares.length; i++) {
    squares[i] = Number.MAX_VALUE;

    for (let first = 1; first < max && i - first * first >= 0; first++) {
      squares[i] = Math.min(squares[i], 1 + squares[i - first * first]);
    }
  }

  return squares[n];
}

/**
 * https://stackoverflow.com/questions/39031099/perfect-square-in-leetcode

    1 2 3 4 5 6 7 8 9 10 11 12
    ^

    dp(1) = dp(1-1^2) = 1+dp(0) = 1
    dp(2) = dp(2-1^2) = 1+dp(1) = 2
    dp(3) = dp(3-1^2) = 1+dp(2) = 3

    dp(4) = dp(4-1^2) = 1+dp(3) = 4
    dp(4) = dp(4-2^2) = 1+dp(0) = 1  <- выбираем min = 1

    dp(5) = dp(5-1^2) = 1+dp(4) = 5
    dp(5) = dp(5-2^2) = 1+dp(1) = 2  <-  выбираем min = 2

    dp(6) = dp(6-1^2) = 1+dp(5) = 3
    dp(6) = dp(6-2^2) = 1+dp(2) = 3 <- min = 3

    dp(7) = dp(7-1^2) = 1+dp(6) = 4
    dp(7) = dp(7-2^2) = 1+dp(3) = 4 <- min = 4

    dp(8) = dp(8-1^2) = 1+dp(7) = 5
    dp(8) = dp(8-2^2) = 1+dp(4) = 2 <- min = 2

    dp(9) = dp(9-1^2) = 1+dp(8) = 3
    dp(9) = dp(9-2^2) = 1+dp(5) = 3 <- min = 3

    dp(10) = dp(10-1^2) = 1+dp(9) = 4
    dp(10) = dp(10-2^2) = 1+dp(6) = 4
    dp(10) = dp(10-3^2) = 1+dp(1) = 2 <- min = 2


    dp(11) = dp(11-1^2) = 1+dp(10) = 3
    dp(11) = dp(11-2^2) = 1+dp(7) = 5
    dp(11) = dp(11-3^2) = 1+dp(2) = 3 <- min = 3

    dp(12) = dp(12-1^2) = 1+dp(11) = 4
    dp(12) = dp(12-2^2) = 1+dp(8) = 3 <- min = 3
    dp(12) = dp(12-3^2) = 1+dp(3) = 4

    dp(13) = dp(13-1^2) = 1+dp(12) = 5
    dp(13) = dp(13-2^2) = 1+dp(9) = 4
    dp(13) = dp(13-3^2) = 1+dp(4) = 2 <- min = 3
 */

const arr = [4, 1, 2, 1, 2];
const label = 'time';
console.time(label);
console.log(numSquares(12));
console.log(numSquares(13));
console.log(numSquares2(12));
console.log(numSquares2(13));
console.timeEnd(label);
