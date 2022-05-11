let LinkedLIst = require("./linkedLIst");
let Node = require("./node")

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


let addTwoNumbers = (list1, list2) =>{
  //  console.log(list1.head.element)
  //  console.log(list1.head.next)
    let first = list1.head;
    let second = list2.head;
    let carry = null;
    let sum = 0;
    let dummyHead;
    let current;
    let listSum= new LinkedLIst();
    while (first || second){

            sum = first.element + second.element;
            console.log( `${sum} = ${first.element} + ${second.element}`)
            if (sum > 9){
                carry = sum/10
                dummyHead = new Node(carry);
                current = sum%10
                listSum.add(current)
                if (first.next){
                    console.log("first.next")
                    console.log(first.next)
                    first.next.element = first.next.element+carry;
                    console.log("first.next")
                    console.log(first.next)
                }
            } else {
                listSum.add(sum);
            }
            console.log(listSum.head)
            first = first.next
            second = second.next

    }

    return listSum;

}

addTwoNumbers(list1, list2)