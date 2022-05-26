const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 1016,
  name: 'Minimum Swaps To Make Sequences Increasing',
  url: 'https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/',
  difficulty: difficulty.medium,
  premium: true
};

/**
 * Description:
 * Given a binary array data, return the minimum number of swaps
 * required to group all 1’s present in the array together in any place in the array.
 *
 * Example 1:
 *
 * Input: [1,0,1,0,1]
 * Output: 1
 * Explanation:
 * There are 3 ways to group all 1's together:
 * [1,1,1,0,0] using 1 swap.
 * [0,1,1,1,0] using 2 swaps.
 * [0,0,1,1,1] using 1 swap.
 * The minimum is 1.
 *
 * Example 2:
 *
 * Input: [0,0,0,1,0]
 * Output: 0
 * Explanation:
 * Since there is only one 1 in the array, no swaps needed.
 *
 * Example 3:
 *
 * Input: [1,0,1,0,1,0,0,1,1,0,1]
 * Output: 3
 * Explanation:
 * One possible solution that uses 3 swaps is [0,0,0,0,0,1,1,1,1,1,1].
 */
function minSwaps(binaryArray) {
  const totalNumberOne = binaryArray.reduce((acc, cur) => acc + cur, 0);
  let minSwaps = 0;
  let sum = 0;
  let left = 0;

  for (let i = 0; i < binaryArray.length; ++i) {
    sum += binaryArray[i];
    if (i - left + 1 > totalNumberOne) {
      sum -= binaryArray[left];
      ++left;
    }
    minSwaps = Math.max(minSwaps, sum);
  }
  return totalNumberOne - minSwaps;
}

let b = new Date().getMilliseconds();
console.log(minSwaps([1, 0, 1, 0, 1, 0, 0])); // O(n)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
