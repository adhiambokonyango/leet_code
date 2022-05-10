let LinkedLIst = require("./linkedLIst");

/**
 * LinkedLIst {
 *   add: [Function: add],
 *   insertAt: [Function: insertAt],
 *   head: Node { element: 5, next: Node { element: 6, next: [Node] } },
 *   size: 3
 * }
 * @type {LinkedLIst}
 */



let list1 = new LinkedLIst();
list1.insertAt(3, 0)
list1.insertAt(4, 0)
list1.insertAt(2, 0)

let list2 = new LinkedLIst();
list2.insertAt(4, 0)
list2.insertAt(6, 0)
list2.insertAt(5, 0)


let addTwoNumbers = () =>{
    console.log(list1.head.element)
    console.log(list1.head.next)
}

addTwoNumbers()