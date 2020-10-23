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
function middleNode(head){
    if(!head) return head;
    let current =head;
    let count=1;
    while(current.next !=null){
        count++;
        current=current.next
    }
    let middle= count%2==1? Math.floor(count/2) : count/2
    while(middle >0){
        head=head.next;
        middle--
    }
    return head;
}
// ver 2:
function middleNode2(head){
    let fastNode=head;
    let slowNode=head;
    while(fastNode !==null && fastNode.next !==null){
        fastNode=fastNode.next.next;
        slowNode=slowNode.next
    }
    return slowNode
}