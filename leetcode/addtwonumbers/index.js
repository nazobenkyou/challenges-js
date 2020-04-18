/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

const addTwoNumbers = (l1, l2) => {
  let h = new ListNode(l1.val + l2.val)
  let r = h

  let cc = 0

  while (l1 || l2) {
    let n, m
    n = m = 0
    if (l1 && l1.hasOwnProperty('val')) {
      n = l1.val
    }

    if (l2 && l2.hasOwnProperty('val')) {
      m = l2.val
    }

    r.val = n + m
    if (cc !== 0) {
      r.val += cc
    }

    if (r.val > 9) {
      cc = Math.floor(r.val / 10)
      r.val = r.val % 10
    } else {
      cc = 0
    }

    if ((l1 && l1.next) || (l2 && l2.next) || cc > 0) {
      r.next = new ListNode()
      r = r.next
    }

    if (l1)
      l1 = l1.next

    if (l2)
      l2 = l2.next
  }

  if (cc !== 0) {
    r.val = cc
  }

  return h
}

class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

const l1 = new ListNode(3)
const l2 = new ListNode(5)

l2.next = new ListNode(8)

console.log(addTwoNumbers(l1, l2))
