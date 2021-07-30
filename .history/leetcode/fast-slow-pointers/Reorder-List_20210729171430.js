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
function sortList(head) {



  
  const mid = getMid(head); // O(n)

  let left = head;
  let right = reverse(mid); // O(n)

  return reorder(left, right); // O(n)
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

function reverse(head) {
  let prev = null;
  let next = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

function reorder(head1, head2) {
  const dummyHead = new ListNode();
  let curr = dummyHead;

  while (head1 && head2) {
    curr.next = head1;
    head1 = head1.next;
    curr = curr.next;

    curr.next = head2;
    head2 = head2.next;
    curr = curr.next;
  }

  // curr.next = head1 || head2;

  return dummyHead.next;
}

// находим середину списка -> n

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// const head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );

const head = new ListNode(4);

let b = new Date().getMilliseconds();
console.log(sortList(head));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
