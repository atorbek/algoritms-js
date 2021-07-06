/**
 * Given the head of a linked list and an integer val,
 * remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *
 * Example 1:
 *
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 * Example 2:
 *
 * Input: head = [], val = 1
 * Output: []
 * Example 3:
 *
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 104].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 **/
function removeElements(head, val) {
  let tmp = head;

  while (head !== null && head.val === val) {
    head = head.next;
  }

  while (tmp !== null && tmp.next !== null) {
    if (tmp.next.val === val) {
      tmp.next = tmp.next.next;
    } else {
      tmp = tmp.next;
    }
  }

  return head;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(
  7,
  new ListNode(
    7,
    new ListNode(
      7,
      new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))))
    )
  )
);

let b = new Date().getMilliseconds();
console.log(removeElements(head, 7));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
