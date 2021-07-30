/**

 **/
function sortList(head) {
  if (!head || !head.next) {
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

  while (fast && fast.next) {
    prev = prev ? prev.next : head;

    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  return slow;
}

function merge(head1, head2) {
  const dummyHead = new ListNode();
  let curr = dummyHead;

  while (head1 !== null && head2 !== null) {
    if (head1.val < head2.val) {
      curr.next = head1;
      head1 = head1.next;
    } else {
      curr.next = head2;
      head2 = head2.next;
    }

    curr = curr.next;
  }

  curr.next = head1 || head2;

  return dummyHead.next;
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
console.log(sortList(head));
let e = new Date().getMilliseconds();
console.log(e - b + 'ms');
