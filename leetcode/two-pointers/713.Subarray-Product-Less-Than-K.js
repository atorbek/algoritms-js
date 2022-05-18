/**
 * Given an array of integers nums and an integer k, return the number of contiguous
 *  subarrays where the product of all the elements in the subarray is strictly less than k.
 *
 * Example 1:
 *
 * Input: nums = [10,5,2,6], k = 100
 * Output: 8
 * Explanation: The 8 subarrays that have product less than 100 are:
 * [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
 * Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
 *
 * Example 2:
 *
 * Input: nums = [1,2,3], k = 0
 * Output: 0
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 3 * 104
 * 1 <= nums[i] <= 1000
 * 0 <= k <= 106
 **/
function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;

  let prod = 1;
  let ans = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];

    while (prod >= k) {
      prod /= nums[left++];
    }

    ans += right - left + 1;
  }

  return ans;
}

// 10 5 2 6

// 2 5 6 10
// ^      ^

//     ^  ^

const label = 'time';
console.time(label);
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
let e = new Date().getMilliseconds();
console.timeEnd(label);
