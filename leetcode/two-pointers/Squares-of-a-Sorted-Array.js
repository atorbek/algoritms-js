/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *
 * Example 1:
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 *
 * Example 2:
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * nums is sorted in non-decreasing order.
 *
 *
 * Follow up: Squaring each element and sorting the new array is very trivial,
 * could you find an O(n) solution using a different approach?
 **/
function sortedSquares(nums) {
  let i = 0;
  let j = nums.length - 1;
  let ans = [];

  for (let k = nums.length - 1; k >= 0; k--) {
    let x = nums[i] * nums[i];
    let y = nums[j] * nums[j];
    ans[k] = Math.max(x, y);
    if (x < y) {
      j--;
    } else {
      i++;
    }
  }

  return ans;
}

// 16 1 0 18 10
// 10 1 0 18 16

let b = new Date().getMilliseconds();
console.log(sortedSquares([-4, -1, 0, 3, 10]));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
