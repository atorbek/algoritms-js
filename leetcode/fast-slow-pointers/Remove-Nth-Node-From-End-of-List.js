/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 *
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 *  Example 2:
 *
 * Input: head = [1], n = 1
 * Output: []
 *
 * Example 3:
 *
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 * Follow up: Could you do this in one pass?
 **/
function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0, head);
  let tortoise = dummy;
  let hare = dummy;

  for (let i = 0; i <= n; i++) {
    hare = hare.next;
  }

  while (hare !== null) {
    tortoise = tortoise.next;
    hare = hare.next;
  }

  tortoise.next = tortoise.next.next;

  return head;
}

// 1 -> 2 -> 3 -> 4 -> 5
//           ^         ^

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(
  1,
  new ListNode(2)
  // , new ListNode(3, new ListNode(4, new ListNode(5))))
);

let b = new Date().getMilliseconds();
console.log(removeNthFromEnd(head, 2));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
