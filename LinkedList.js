// To implement linked List in js
class ListNode{
    constructor(data){
       this.data=data;
       this.next=null;
    }
    
}
class LinkedList{
    constructor(head=null){
        this.head=head
    }
}
// create 2 nodes and pointer from node1 to node2
let node1=new ListNode(2);
let node2=new ListNode(13);
node1.next=node2;
let list=new LinkedList(node1);
console.log(list.head.next.data)