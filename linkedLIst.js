function Node (value, next=null) {
    this.value= value;
    this.next = next;

}

function LinkedLIst(){

    this.head= null;
    this.size=0;

    this.addNodeAtHead=(value)=>{
        this.head = new Node(value, this.head);
        this.size++;
    }

    this.addNodeAtTail=(value)=>{
        let node = new Node(value);
        let current = this.head;
        while (current.next){
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

    this.addNodeAnywhere=(index, value)=>{
        if (index > 0 && index > this.size){
            return {msg:"index doesnt exist"}
        }
        let node = new Node(value)
        let current = this.head;
        let count = 0;
        let previous;
        while(count < index) {
            count++;
            previous = current;
            current = current.next
        }
        previous.next = node;
        node.next = current;
        this.size++;
        return {nodes:{previous:previous, current:current}}
    }

    this.getNodeAtIndex = function(index) {
        if(index > 0 && index >= this.size || !this.head) return {msg:'Index does not exist'};
        let current = this.head;
        let count = 0;
        while(current) {
            if(count === index) return current.value;
            count++;
            current = current.next;
        }
        return null;
    }

    this.removeHeadNode = function() {
        if(!this.head) return {msg:'There is no head'};
        this.head = this.head.next;
        this.size--;
        return this.head;
    }

    this.removeTailNode = function() {
        if(!this.head) return console.log('There is no head');
        if(!this.head.next) return this.removeHeadNode();
        let current = this.head;
        let previous;
        while(current.next){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
    }

    this.removeNodeAt = function(index) {
        if(index > 0 && index >= this.size || !this.head) return console.log('Index not found');
        if(index === 0) return this.removeHeadNode();
        let current = this.head;
        let count = 0;
        let previous;
        while(count < index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }

    this.clearList = function() {
        this.head = null;
        this.size = 0;
    }
    this.printValue = function() {
        let current = this.head;
        while (current) {
            console.log( `value: ${current.value} next: ${current.next}`);
            current = current.next;
        }
    }

}

let linkedLIst = new LinkedLIst();
linkedLIst.addNodeAtHead(10);
linkedLIst.addNodeAtTail( 11);
linkedLIst.addNodeAtTail( 12);
//linkedLIst.addNodeAnywhere(1, 13);
linkedLIst.printValue()