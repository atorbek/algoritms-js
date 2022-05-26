const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: 234,
  name: 'Palindrome Linked List',
  url: 'https://leetcode.com/problems/palindrome-linked-list/',
  difficulty: difficulty.easy,
  premium: false
};

/**
 * Given the head of a singly linked list, return true if it is a palindrome.
 *
 *
 *
 * Example 1:
 *
 * Input: head = [1,2,2,1]
 * Output: true
 *
 *  Example 2:
 *
 * Input: head = [1,2]
 * Output: false
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 105].
 * 0 <= Node.val <= 9
 *
 * Follow up: Could you do it in O(n) time and O(1) space?
 **/
function isPalindrome(head) {
  let tortoise = head;
  let hare = head;

  let prev = null;
  let next = null;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  while (tortoise !== null) {
    next = tortoise.next;
    tortoise.next = prev;
    prev = tortoise;
    tortoise = next;
  }

  tortoise = prev;
  hare = head;

  while (tortoise !== null) {
    if (tortoise.val !== hare.val) {
      return false;
    }

    tortoise = tortoise.next;
    hare = hare.next;
  }

  return true;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head1 = new ListNode(1, new ListNode(2, new ListNode(1)));

const head2 = new ListNode(1, new ListNode(2));

// 1 2 2 1
//     ^

// 1 2
//

let b = new Date().getMilliseconds();
console.log(isPalindrome(head1));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
