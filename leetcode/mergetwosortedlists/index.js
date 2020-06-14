/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

const mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  l2.next = mergeTwoLists(l2.next, l1)
  return l2
}

class ListNode {
  constructor (val) {
    this.val = val === null || val === undefined ? 0 : val
    this.next = null
  }
}

const main = () => {
  const l1 = new ListNode(1)
  l1.next = new ListNode(2)
  l1.next.next = new ListNode(4)

  const l2 = new ListNode(1)
  l2.next = new ListNode(3)
  l2.next.next = new ListNode(4)

  const r1 = new ListNode(6)
  r1.next = new ListNode(9)

  console.log(printList(mergeTwoLists(l1, l2)))
  console.log(printList(mergeTwoLists(null, r1)))
  console.log(printList(mergeTwoLists(r1, null)))
  console.log(printList(mergeTwoLists(r1, l1)))
}

const printList = l => {
  let values = ''

  while (l) {
    values += `${l.val}`
    if (l.next) {
      values += ` -> `
    }
    l = l.next
  }

  return values
}

main()
