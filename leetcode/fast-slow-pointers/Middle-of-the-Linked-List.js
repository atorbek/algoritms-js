/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * Example 1:
 *
 * Input: [1,2,3,4,5]
 * Output: Node 3 from this list (Serialization: [3,4,5])
 * The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
 * Note that we returned a ListNode object ans, such that:
 * ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
 *
 * Example 2:
 *
 * Input: [1,2,3,4,5,6]
 * Output: Node 4 from this list (Serialization: [4,5,6])
 * Since the list has two middle nodes with values 3 and 4, we return the second one.
 *
 *
 * Note: The number of nodes in the given list will be between 1 and 100.
 **/
function middleNode(head) {
  let tortoise = head;
  let hare = head;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return tortoise;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

const head2 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  )
);

// 1 2 [3] 4 [5]
//      ^      ^

// 1 2 3 [4] 5 [6]
//        ^     ^

let b = new Date().getMilliseconds();
console.log(middleNode(head2));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
