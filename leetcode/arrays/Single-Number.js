/**
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 *
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 *
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 *
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 3 * 104
 * -3 * 104 <= nums[i] <= 3 * 104
 * Each element in the array appears twice except for one element which appears only once.
 *
 *
 */
function singleNumber(nums) {
  const dict = {};

  for(let i = 0; i < nums.length; i++) {
    const current = nums[i];
    dict[current] = dict[current] ? dict[current] + 1 : 1;
  }

  for(let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if(dict[current] === 1) {
      return current;
    }
  }

}

function singleNumber2(nums) {

  nums.sort((a,b) => a - b);

  let i = 0;
  while(i < nums.length) {
    if(nums[i] !== nums[i+1]) {
      return nums[i];
    }

    i += 2;

  }
}

function singleNumber3(nums) {
  // x ^ x = 0
  // 0 ^ x = x
  return nums.reduce((a,b)=>a ^ b);
}

const arr = [4,1,2,1,2];
console.time('time');
console.log(singleNumber3(arr));
console.timeEnd('time');



// 0 2   5 10
