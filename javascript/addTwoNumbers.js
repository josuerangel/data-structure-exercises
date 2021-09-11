/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    console.log('lists',l1, l2);
    console.log('values', (l1 != null) ? l1.val : null, (l2 != null) ? l2.val : null);
    console.log('next', (l1 != null) ? l1.next : null, (l2 != null) ? l2.next : null);
  
    let bitcarry = 0;
    let num = ((l1 != null) ? l1.val : 0) + ((l2 != null) ? l2.val : 0);
    console.log('sum:', num);
    if (num >= 10) {
        num = num - 10;
        bitcarry = 1;
    }
    let result = new ListNode(num);
    console.log('result', result, result.val, result.next);
  
    let resultRecursive = null; // = new ListNode([8], new ListNode([1]));
    if (l1.next != null) {
        let l1r = (l1 != null) ? l1.next : null;
        let l2r = (l2 != null) ? l2.next : null
        l1r.val += bitcarry;
        resultRecursive = addTwoNumbers(l1r, l2r);
    }
    if (l1.next == null && bitcarry == 1) {
        resultRecursive = addTwoNumbers(new ListNode(bitcarry), null);
    }
    console.log('resultRecursive:', resultRecursive);
    result.next = resultRecursive;
    return result;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    l1 = (l1 == null) ? new ListNode(0) : l1;
    l2 = (l2 == null) ? new ListNode(0) : l2;
    console.log('lists: ', l1, l2);
    let bitcarry = 0;
    let num = ((l1 != null) ? l1.val : 0) + ((l2 != null) ? l2.val : 0);
    if (num >= 10) {
        num = num % 10;
        bitcarry = 1;
    }
    let result = new ListNode(num);
    let resultRecursive = null;
    if (l1.next != null || l2.next != null) {
        let l1r = (l1 != null) ? l1.next : null;
        let l2r = (l2 != null) ? l2.next : null;
        (l1r != null) ? l1r.val += bitcarry : l2r.val += bitcarry;
        resultRecursive = addTwoNumbers(l1r, l2r);
    }
    if (l1.next == null && bitcarry == 1) {
        resultRecursive = addTwoNumbers(new ListNode(bitcarry), null);
    }
    result.next = resultRecursive;
    return result;
};