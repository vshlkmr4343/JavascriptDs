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
        //var current= this.head;
        // while (current) {
        //     console.log('current:',current);
        //     current = current.next;
        // }
        //console.log('Tail:',this.tail)
        this.tail = this.tail.prev;
        this.length --
        return this
    }
}


var list = new DoublyLinkedList()
list.push("1")
list.push("2");
list.push("3");
// list.push("4");
// list.push("5");
//list.pop()
console.log('DLL:',list)
        