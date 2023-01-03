const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 108,
  name: 'Convert Sorted Array to Binary Search Tree',
  url:
    'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  return convertToBST(nums, start, end);
};

function convertToBST(nums, start, end) {
  if (start > end) {
    return null;
  }

  const mid = parseInt((start + end) / 2);

  const node = new TreeNode(nums[mid]);

  node.right = convertToBST(nums, mid + 1, end);
  node.left = convertToBST(nums, start, mid - 1);

  return node;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.time('time');
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.log(sortedArrayToBST([1, 3]));
console.timeEnd('time');
