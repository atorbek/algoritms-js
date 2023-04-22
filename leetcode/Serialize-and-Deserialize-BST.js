const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 449,
  name: 'Serialize and Deserialize BST',
  url: 'https://leetcode.com/problems/serialize-and-deserialize-bst/',
  difficulty: difficulty.medium,
  premium: false
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let stream = [];

  function dfs(root) {
    if (!root) {
      stream.push(-1);
      return;
    }

    stream.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);

  return stream;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const item = data.shift();

  if (item === -1) {
    return null;
  }

  const node = new TreeNode(item);

  node.left = deserialize(data);
  node.right = deserialize(data);

  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const label = 'time';
console.time(label);
console.log(deserialize(serialize([2, 1, 3])));
console.log(deserialize(serialize([])));
console.timeEnd(label);
