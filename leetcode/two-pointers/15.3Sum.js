/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Example 2:
 *
 * Input: nums = []
 * Output: []
 *
 * Example 3:
 *
 * Input: nums = [0]
 * Output: []
 *
 *
 * Constraints:
 *
 * 0 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 *
 **/
//O(n^2)
function threeSum(nums, target = 0) {
  const result = [];

  if (nums.length < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
        continue;
      }

      if (sum < target) {
        j++;
        continue;
      }

      if (sum > target) {
        k--;
        continue;
      }
    }
  }

  return result;
}

//O(n^3)
function threeSumBruteForce(nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const el1 = nums[i];

    if (i !== 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      const el2 = nums[j];

      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;

      for (let k = j + 1; k < nums.length; k++) {
        const el3 = nums[k];

        if (k !== j + 1 && nums[k] === nums[k - 1]) continue;

        if (el1 + el2 + el3 === 0) {
          result.push([el1, el2, el3]);
        }
      }
    }
  }

  return result;
}

/**
 * -1, 0, 1, 2, -1, -4
 * -4, -1, -1, 0, 1, 2
 *
 * -4 -1 -1
 * -4 -1  0
 * -4 -1 -1
 * -1 0 -4
 *
 * -1 1 2
 * -1 1 -1
 * -1 1 -4
 *
 * -1 2 -1
 * -1 2 -4
 *
 * -1 -1 -4
 *
 *  0 1 2
 *  0 1 -1
 *  0 1 -4
 *
 */

// [[-1,-1,2],[-1,0,1]
//    0  4 3
const label = 'run function';
console.time(label);
// console.log(threeSumBruteForce([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
let e = new Date().getMilliseconds();
console.timeEnd(label);
