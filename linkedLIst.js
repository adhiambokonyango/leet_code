/**
 *
 * @param value
 * @param next
 * @constructor
 * function Node (value, next=null) {
 *     this.value= value;
 *     this.next = next;
 *
 * }
 */
let Node = require("./node");


module.exports = class LinkedLIst {

    constructor() {
        this.head= null;
        this.size=0;
    }

    add=(element)=>{
        let node = new Node(element);
        let current;
        if (this.head === null){
            this.head = node;
        } else {
            current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }

    insertAt=(element, index)=>{
        if (index<0 || index>this.size){
            return {msg:"invalid index"}
        } else {
            let node = new Node(element)
            let curr, prev;
            curr = this.head
            if (index === 0){
                node.next = this.head
                this.head = node
            } else {
               let it = 0;
               while (it < index){
                   prev = curr
                   curr = curr.next
               }
               node.next = curr
                prev.next = node

            }
            this.size++;
        }
    }

}