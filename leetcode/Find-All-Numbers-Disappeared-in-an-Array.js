/**
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 *
 * Example 1:
 *
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 *
 * Example 2:
 *
 * Input: nums = [1,1]
 * Output: [2]
 *
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 105
 * 1 <= nums[i] <= n
 *
 *
 * Follow up: Could you do it without extra space and in O(n) runtime?
 * You may assume the returned list does not count as extra space.
 *
 */
function findDisappearedNumbers(nums) {
  let start = 0;
  let res = [];

  while (start < nums.length) {
    const num = nums[start] - 1;
    if (nums[start] != nums[num]) {
      const tmp = nums[num];
      nums[num] = nums[start];
      nums[start] = tmp;
    } else {
      start += 1;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    const num = nums[i - 1];

    if (num !== i) {
      res.push(i);
    }
  }

  return res;
}

const arr1 = [4, 3, 2, 7, 8, 2, 3, 1];
const arr2 = [1, 1];
console.time('time');
console.log(findDisappearedNumbers(arr1));
console.log(findDisappearedNumbers(arr2));
console.timeEnd('time');

// 8 1 2 3 4 2 3 1
// 1 2 3 4 5 6 7 8
