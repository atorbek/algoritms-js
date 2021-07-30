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
  const mid = getMid(head); // O(n)

  let left = head;
  let right = mid;

  ResizeObserverSize()

  return reorder(head, mid); // right = mid, left = head, O(n)
}

function getMid(head) {
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = prev ? prev.next : head;
    slow = head.next;
    fast = head.next.next;
  }

  prev.next = null;
  return slow;
}

function reorder(head1, head2) {
  const dummyHead = new ListNode();
  let curr = dummyHead;

  while (head1 && head2) {
    
  }
}

// находим середину списка -> n

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

let b = new Date().getMilliseconds();
console.log(reorderList(head));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
