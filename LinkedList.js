// To implement linked List in js about Insert,Delete function 
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




// Method of insert node into linked list
// Case 1: Insert at the beginning of a linked list ( before the Head)
LinkedList.prototype.insertAtBeginning = function(data){
    // A newNode object is created with property data and next=null
    let newNode= new ListNode(data);
    newNode.next=this.head;
    this.head=newNode;
    return this.head
}
// Case 2: Inserting a node at the end of the singly linked list. (after the tail)
LinkedList.prototype.insertAtEnd = function(data){
    // A newNode object is created with property data and next=null
   let newNode= new ListNode(data);
   // When head = null i.e. the list is empty, then head itself will point to the newNode.
   if(!this.head){
       this.head=newNode;
       return this.head
   }
   // Else, traverse the list to find the tail (the tail node will initially be pointing at null), 
   // and update the tail's next pointer.
   let tail=this.head;
   while(tail.next != null){
       tail=tail.next;
   }
   tail.next= newNode;
   return this.head
}
// Case 3 : Inserting a node at given random position in a singly linked list
// A helper function getAt() is defined to get to the desired position.
// This function can also be later used for performing delete operation from a given position.
LinkedList.prototype.getAt = function(index){
    let count=0;
    let node=this.head;
    while (node){
        if(count==index) return node;
        count++;
        node=node.next;
    }
    return null
}
// The insertAt() function contains the steps to insert a node at a given index.
LinkedList.prototype.insertAt = function(data, index){
    // if the list is empty i.e. head = null
    if(!this.head){
        this.head= new ListNode(data);
        return;
    }
    // if new node needs to be inserted at the front of the list i.e. before the head. 
    if(index==0){
        this.head=new ListNode(data,this.head);
        return;
    }
    // else, use getAt() to find the previous node.
    const previous= this.getAt(index-1);
    let newNode =new ListNode(data);
    newNode.next=previous.next; 
    previous.next=newNode;
    return this.head
}






//Delete operation on a singly linked list
// Case 1: Deleting the first node in a singly linked list
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return;
    }
    this.head=this.head.next;
    return this.head
}
// Case 2: Deleting the last node in a singly linked list
LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        return null
    }
    // if only one node in the list
    if(!this.head.next){
        this.head=null;
        return
    }
    let previous=this.head;
    let tail=this.head.next;
    while (tail.next!=null){
        previous=tail;
        tail=tail.next
    }
    previous.next=null;
    return this.head
}
// Case 3: Deleting a node from given random position in a singly linked list
LinkedList.prototype.deleteAt = function(index){
    // when list is empty i.e. head = null
    if(!this.head){
        this.head= new ListNode(data);
        return 
    }
    // node needs to be deleted from the front of the list i.e. before the head.
    if(index==0){
        this.head=this.head.next;
        return
    }
    // else, use getAt() to find the previous node.
    let previous=this.getAt(index-1);
    if(!previous || !previous.next){
        return 
    }
    previous.next=previous.next.next
    return this.head
}
// Deleting entire singly linked list
LinkedList.prototype.deleteList = function(){
    this.head = null;
}