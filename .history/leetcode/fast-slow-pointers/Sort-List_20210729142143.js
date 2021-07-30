/**
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
 *
 *
 *
 * Example 1:
 *
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 *
 * Example 2:
 *
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
 *
 * Example 3:
 *
 * Input: head = []
 * Output: []
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 5 * 104].
 * -105 <= Node.val <= 105
 **/
function sortList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const mid = getMid(head);

  const left = sortList(head);
  const right = sortList(mid);

  return merge(left, right);
}

function getMid(head) {
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    prev = prev ? prev.next : head;

    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  return slow;
}

function merge(left, right) {
  
  const dummyHead = new ListNode()



  return null;
}

// 4 -> 2 -> 1 -> 3
//      /\
//     /  \
//   4->2 1->3
//   /      \
// 2->4     1->3

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(4, new ListNode(2), new ListNode(1, new ListNode(3)));

let b = new Date().getMilliseconds();
console.log(sortList(head));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
