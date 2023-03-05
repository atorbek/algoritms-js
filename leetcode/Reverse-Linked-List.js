const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 206,
  name: 'Reverse Linked List',
  url: 'https://leetcode.com/problems/reverse-linked-list/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let tmp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = tmp;
  }

  return prev;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1);
const node2 = new ListNode(2);
head.next = node2;
const node3 = new ListNode(3);
node2.next = node3;
const node4 = new ListNode(4);
node3.next = node4;
const node5 = new ListNode(5);
node4.next = node5;

let b = new Date().getMilliseconds();
console.log(reverseList(head));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
