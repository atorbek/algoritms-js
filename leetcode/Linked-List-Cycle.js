/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following
 * the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
 * Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 *
 * Example 2:
 *
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 *
 * Example 3:
 *
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 *
 *
 * Constraints:
 *
 * The number of the nodes in the list is in the range [0, 104].
 * -105 <= Node.val <= 105
 * pos is -1 or a valid index in the linked-list.
 *
 *
 * Follow up: Can you solve it using O(1) (i.e. constant) memory?
 **/
function hasCycle(head) {
  let tortoise = head;
  let hare = head;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (Object.is(hare, tortoise)) {
      return true;
    }
  }

  return false;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(1);
node1.next = node2;
const node3 = new ListNode(1);
node2.next = node3;
// const cycleNode = new ListNode(-4);
// node3.next = cycleNode;
// cycleNode.next = node2;

let b = new Date().getMilliseconds();
console.log(hasCycle(node1));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
