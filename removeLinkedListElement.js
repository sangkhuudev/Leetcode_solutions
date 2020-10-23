/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElement(head,val){
  let currentHead=new ListNode();
   currentHead.next=head;
   let node=currentHead
  while(node.next !=null ){
      if(node.next.val!==val) node=node.next;
      else node.next=node.next.next
  }
  return currentHead.next
}