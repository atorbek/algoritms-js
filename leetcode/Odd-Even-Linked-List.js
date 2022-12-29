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
var oddEvenList = function (head) {
  let list = head;

  let evenStart = null;
  let evenEnd = null;
  let oddStart = null;
  let oddEnd = null;
  let currentNode = list;
  let counter = 1;

  if (!list || !list.next) {
    return list;
  }

  while (currentNode) {
    if (counter % 2 === 0) {
      if (!evenStart) {
        evenStart = currentNode;
        evenEnd = evenStart;
      } else {
        evenEnd.next = currentNode;
        evenEnd = evenEnd.next;
      }
    } else {
      if (!oddStart) {
        oddStart = currentNode;
        oddEnd = oddStart;
      } else {
        oddEnd.next = currentNode;
        oddEnd = oddEnd.next;
      }
    }

    currentNode = currentNode.next;
    counter++;
  }

  oddEnd.next = evenStart;
  evenEnd.next = null;

  list = oddStart;

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

const head2 = new ListNode(2);
const node22 = new ListNode(1);
head2.next = node22;
const node33 = new ListNode(3);
node22.next = node33;
const node24 = new ListNode(5);
node33.next = node24;
const node25 = new ListNode(6);
node24.next = node25;
const node26 = new ListNode(4);
node25.next = node26;
const node27 = new ListNode(7);
node26.next = node27;

let b = new Date().getMilliseconds();
console.log(oddEvenList(head));
console.log(oddEvenList(head2));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
