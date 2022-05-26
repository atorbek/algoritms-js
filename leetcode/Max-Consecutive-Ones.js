/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 * Example 2:
 *
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
 */
function findMaxConsecutiveOnes(nums) {
  let longestOnes = 0;
  let sum = 0;
  let windowEnd = 0;
  let windowStart = 0;

  while (windowEnd < nums.length) {
    sum += nums[windowEnd];

    if (sum + windowStart < windowEnd + 1) {
      longestOnes = Math.max(longestOnes, sum);
      sum = 0;
      windowStart = windowEnd + 1;
    }

    windowEnd++;
  }

  return Math.max(longestOnes, sum);
}

let b = new Date().getMilliseconds();
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // O(n)
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
