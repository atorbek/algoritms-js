/**
 * You are given the head of a singly linked-list. The list can be represented as:
 *
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 *
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 *
 * Example 2:
 *
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 5 * 104].
 * 1 <= Node.val <= 1000
 **/
function reorderList(head) {
  if (!head || !head.next) {
    return head;
  }

  const mid = getMid(head);

  const left = reorderList(head);
  const right = reorderList(mid);

  return merge(left, right);
}

function getMid(head) {
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = prev ? prev.next : head;

    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  return slow;
}



// 4 -> 2 -> 1 -> 3
//      /\
//     /  \
//   4->2 1->3
//   /      \
// 2->4     1->3 -> merge!

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));

let b = new Date().getMilliseconds();
console.log(reorderList(head));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
