class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
   
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0){
            return
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return this;
    }

    shift(){
        if(this.length > 0){
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            return
        }
        this.length--;
        return this;
    }
}


var list = new DoublyLinkedList()
list.push("1")
list.push("2");
list.push("3");
console.log('DLL:',list.pop())
        