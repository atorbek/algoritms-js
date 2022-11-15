const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 278,
  name: 'First Bad Point',
  url: 'https://leetcode.com/problems/first-bad-version/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

const isBadVersion = (version) => {
  return version === 4;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;

    while (start < end) {
      const mid = Math.trunc((end - start) / 2) + start;

      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    return start;
  };
};

// 1 2 3 4 5

const label = 'time';
console.time(label);
console.log(solution(isBadVersion)(5));
console.timeEnd(label);
