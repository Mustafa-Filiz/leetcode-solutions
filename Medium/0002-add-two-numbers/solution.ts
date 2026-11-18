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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const getNumberFromListNode = (listNode: ListNode | null): Array<number> => {
        const arrayOfNumbers: Array<number> = [];

        const recursiveFuncForListNode = (listNode: ListNode | null) => {
            if (listNode === null) return;
            arrayOfNumbers.push(listNode.val);
            if (listNode.next === null) return;
            recursiveFuncForListNode(listNode.next);
        };

        recursiveFuncForListNode(listNode);
        return arrayOfNumbers;
    };

    const firstNum = getNumberFromListNode(l1).reverse().join("");
    const secondNum = getNumberFromListNode(l2).reverse().join("");

    const sum = BigInt(firstNum) + BigInt(secondNum);
    const sumArray = sum.toString().split("");

    let result: ListNode | null = null
    for (const number of sumArray) {
        result = new ListNode(Number(number), result)
    }

    return result
};