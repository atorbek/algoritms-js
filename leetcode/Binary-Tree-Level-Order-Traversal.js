const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 102,
  name: 'Binary Tree Level Order Traversal',
  url: 'https://leetcode.com/problems/n-ary-tree-preorder-traversal/',
  difficulty: difficulty.medium,
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const stack = []; // [3]
  const res = []; // [3]

  if (!root) {
    return [];
  }

  stack.push([root]);
  res.push([root.val]);

  while (stack.length) {
    const nodes = stack.shift();

    const stackNodes = [];
    const resNodes = [];

    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].left !== null) {
        stackNodes.push(nodes[i].left);
        resNodes.push(nodes[i].left.val);
      }

      if (nodes[i].right !== null) {
        stackNodes.push(nodes[i].right);
        resNodes.push(nodes[i].right.val);
      }
    }

    if (stackNodes.length) {
      stack.push(stackNodes);
      res.push(resNodes);
    }
  }

  return res;
};

// [1,2,3,4,null,null,5]

//      1

//  2        3

//4  null  null  5

//[[1],[2,3],[4],[5]]

// [[1],[2,3],[4,5]]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const label = 'time';
console.time(label);
console.log(levelOrder(root));
console.timeEnd(label);
