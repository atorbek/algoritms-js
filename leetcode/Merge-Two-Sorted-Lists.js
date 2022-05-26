const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 21,
  name: 'Merge Two Sorted Lists',
  url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Example 1:
 *
 * Input: l1 = [1,2,4], l2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 *
 * Input: l1 = [], l2 = []
 * Output: []
 *
 * Example 3:
 *
 * Input: l1 = [], l2 = [0]
 * Output: [0]
 *
 *
 * Constraints:
 *
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both l1 and l2 are sorted in non-decreasing order.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

function mergeTwoLists(l1, l2) {
  let head = new ListNode();
  let tail = head;

  while (l1 !== null || l2 !== null) {
    if (l2 === null || (l1 !== null && l1.val < l2.val)) {
      tail.next = l1;
      l1 = l1.next;
      tail = tail.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
      tail = tail.next;
    }
  }

  return head.next;
}

let b = new Date().getMilliseconds();
console.log(mergeTwoLists(l1, l2));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
