//https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createListByArray(arr) {
  let list = new ListNode(arr[0]);
  let nextNode = list;

  for (let i = 1; i < arr.length; i++) {
    nextNode.next = new ListNode(arr[i]);
    nextNode = nextNode.next;
  }

  return list;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let sumL1 = '';
  let sumL2 = '';
  let nextL1 = l1;
  let nextL2 = l2;

  while (nextL1.next !== null || nextL2.next !== null) {
    if (nextL1.next !== null) {
      sumL1 = `${nextL1.val}${sumL1}`;
      nextL1 = nextL1.next;
    }
    if (nextL2.next !== null) {
      sumL2 = `${nextL2.val}${sumL2}`;
      nextL2 = nextL2.next;
    }
  }

  sumL1 = `${nextL1.val}${sumL1}`;
  sumL2 = `${nextL2.val}${sumL2}`;

  let sum = BigInt(sumL1) + BigInt(sumL2);

  const arr = sum.toString(10).split('').reverse();

  return createListByArray(arr);
}

l1 = createListByArray([9, 9, 9, 9, 9, 9, 9]);
l2 = createListByArray([9, 9, 9, 9]);

addTwoNumbers(l1, l2);
