/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 *
 *
 * Example 1:
 *
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * Example 2:
 *
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 **/
function merge(head) {
 
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
console.log(merge(head));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
