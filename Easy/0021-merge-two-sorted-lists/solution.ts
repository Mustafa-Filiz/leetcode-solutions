/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2
    if (list2 === null) return list1

    const arr1 = parseArr(list1)
    const arr2 = parseArr(list2)

    const resultArr = arr1.concat(arr2).sort((a, b) => a - b)

    return parseListNode(resultArr)
};

function parseArr(list: ListNode | null): number[] {
    if (list === null) return []

    return [list.val, ...parseArr(list.next)]
}

function parseListNode(arr: number[], i = 0): ListNode | null {
    if (i === arr.length) return null
    return new ListNode(arr[i], parseListNode(arr, i + 1))
}