/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.
 */

const getDecimalValue = (head) => {
    let l = head
    let s = ''

    while (l !== null) {
        s += l.val
        l = l.next
    }
    return parseInt(s, 2)
}

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const createList1 = () => {
    return new ListNode(1, new ListNode(0, new ListNode(1)))
}

const createList2 = () => {
    return new ListNode(0)
}

const createList3 = () => {
    return new ListNode(1)
}

const createList4 = () => {
    return new ListNode(0, new ListNode(0))
}

const createList5 = () => {
    return new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0)))))))))))))))
}

const main = () => {
    console.log(getDecimalValue(createList1()))
    console.log(getDecimalValue(createList2()))
    console.log(getDecimalValue(createList3()))
    console.log(getDecimalValue(createList4()))
    console.log(getDecimalValue(createList5()))
}

main()