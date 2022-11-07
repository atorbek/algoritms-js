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
var reverseList = function (head) {
  let list = head;

  let currentNode = list;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }

  list = prevNode;
  return list;
};

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
