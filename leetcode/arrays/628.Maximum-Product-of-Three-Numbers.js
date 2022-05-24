/**
 * Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
 *
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: 6
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: 24
 *
 * Example 3:
 * Input: nums = [-1,-2,-3]
 * Output: -6
 *
 *
 * Constraints:
 *
 * 3 <= nums.length <= 104
 * -1000 <= nums[i] <= 1000
 *
 **/
function maximumProduct(nums) {
  nums = nums.sort((a, b) => a - b);

  let len = nums.length;

  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[len - 1] * nums[len - 2] * nums[len - 3],
    nums[0] * nums[1] * nums[len - 1]
  );
}

const label = 'time';
console.time(label);
console.log(maximumProduct([-1, -2, 3, 4]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3, -4])); // -4,-3,-2,-1
console.log(maximumProduct([-1, -2, -3, 4])); // -3,-2,-1,4
console.log(maximumProduct([1, -2, -3, 4])); // -3,-2,1,4
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
console.log(
  maximumProduct([
    -710,
    -107,
    -851,
    657,
    -14,
    -859,
    278,
    -182,
    -749,
    718,
    -640,
    127,
    -930,
    -462,
    694,
    969,
    143,
    309,
    904,
    -651,
    160,
    451,
    -159,
    -316,
    844,
    -60,
    611,
    -169,
    -73,
    721,
    -902,
    338,
    -20,
    -890,
    -819,
    -644,
    107,
    404,
    150,
    -219,
    459,
    -324,
    -385,
    -118,
    -307,
    993,
    202,
    -147,
    62,
    -94,
    -976,
    -329,
    689,
    870,
    532,
    -686,
    371,
    -850,
    -186,
    87,
    878,
    989,
    -822,
    -350,
    -948,
    -412,
    161,
    -88,
    -509,
    836,
    -207,
    -60,
    771,
    516,
    -287,
    -366,
    -512,
    509,
    904,
    -459,
    683,
    -563,
    -766,
    -837,
    -333,
    93,
    893,
    303,
    908,
    532,
    -206,
    990,
    280,
    826,
    -13,
    115,
    -732,
    525,
    -939,
    -787
  ])
);
let e = new Date().getMilliseconds();
console.timeEnd(label);
