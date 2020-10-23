/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head){
    if(!head) return head
    let current=head
    while(current.next != null && current !=null){
        if(current.next.val== current.val){
           current.next=current.next.next
        }
        else{
            current=current.next  
        }
    }
    return head
}