/**
 * Given an integer array nums of length n and an integer target,
 * find three integers in nums such that the sum is closest to target.
 *
 * Return the sum of the three integers.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Example 1:
 *
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * Example 2:
 *
 * Input: nums = [0,0,0], target = 1
 * Output: 0
 *
 *
 * Constraints:
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -104 <= target <= 104
 *
 **/
function threeSumClosest(nums, target = 0) {
  let result = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        return sum;
      }

      let diff1 = Math.abs(target - sum);
      let diff2 = Math.abs(target - result);

      if (diff1 < diff2) {
        result = sum;
      }

      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
}

//-3 0 1 2

const label = 'run function';
console.time(label);
console.log(threeSumClosest([0, 2, 1, -3], 1));
let e = new Date().getMilliseconds();
console.timeEnd(label);
