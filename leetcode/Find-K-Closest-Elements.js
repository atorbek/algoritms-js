const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 658,
  name: 'Find K Closest Elements',
  url: 'https://leetcode.com/problems/find-k-closest-elements/',
  difficulty: difficulty.medium,
  premium: false
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElementsSpaceN = function (arr, k, x) {
  return arr
    .sort((num1, num2) => Math.abs(num1 - x) - Math.abs(num2 - x))
    .slice(0, k)
    .sort((b, a) => b - a);
}; // O(n*log(n) + k*log(k)), O(N)

var findClosestElements = function (arr, k, x) {
  let left = 0;
  // If there needs to be k elements, then the left bound's upper limit is arr.length - k, because if it were any further to the right, you would run out of elements to include in the final answer.
  right = arr.length - k;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const result = [];

  for (let i = left; i < left + k; i++) {
    result.push(arr[i]);
  }

  return result;
}; // O(log(n - k) + k) , O(1)

/**

    The farthest right it could possibly be is the length of the array - k, otherwise there wouldn't be enough elements to it's right.

 */

/**

    1 2 3 4 5
    
    2 1 0 1 2

    0 1 1 2 2

    3 2 4 1 5

    x = 3
    k = 4

 */

/**

   via binary search
 
    1 2 3 4 5

    x = 3 
    k = 4

    left = 0
    right = 1

    1 2 3 4 5
      ^

    x = 3 
    k = 4

    left = 0
    right = 1
 
  */

const label = 'time';
console.time(label);
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
console.timeEnd(label);
