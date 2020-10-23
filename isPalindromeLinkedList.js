/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head){
    if(head==null) return head
    let [node,stack]=[head,[]];
    while(node){
        stack.push(node.val);
        node=node.next
    }
    for(let i=0;i<stack.length/2;i++){
        if(stack[i]!= stack[stack.length-1-i]) return false
    }
    return true
}