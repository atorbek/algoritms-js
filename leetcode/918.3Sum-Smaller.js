/**
 * Given an array of n integers nums and a target, find the number of index triplets i, j, k
 * with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
 *
 * Example
 *
 * Example 1
 *
 * Input:  nums = [-2,0,1,3], target = 2
 * Output: 2
 * Explanation:
 * Because there are two triplets which sums are less than 2:
 * [-2, 0, 1]
 * [-2, 0, 3]
 *
 * Example2
 *
 * Input: nums = [-2,0,-1,3], target = 2
 * Output: 3
 * Explanation:
 * Because there are three triplets which sums are less than 2:
 * [-2, 0, -1]
 * [-2, 0, 3]
 * [-2, -1, 3]
 *
 * Challenge
 * Could you solve it in O(n2) runtime?
 **/
function numSubarrayProductLessThanK(nums, target = 0) {
  let sumSmaller = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum < target) {
        sumSmaller += k - j;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return sumSmaller;
}

const label = 'time';
console.time(label);
console.log(numSubarrayProductLessThanK([-2, 0, -1, 3], 2));
let e = new Date().getMilliseconds();
console.timeEnd(label);
