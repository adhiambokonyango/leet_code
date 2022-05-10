const express = require("express")
const app = express();

/**
 * twoSum
 * @type {function(*, *): void}
 */
const twoSum = require("./twoSum");
twoSum([2,7,1,11,15], 9);





/**
 *
 * HASHTABLE PRACTISE
 *
 * @param key
 * @param max
 * @returns {number}
 * @private
 */
let _hash = (key, max) => {
 let hash = 0;
 for(let i=0; i<key.length; i++){
     hash += key.charCodeAt(i);
 }
 return hash%max;
}// end hash

let HashTable =function () {

    this.table = [];
    const max= 100;

    this.set = (key, value) =>{
       const index = _hash(key, max);
       if (this.table[index] === undefined){
           this.table[index] = [
               [key, value]
           ]
       } else {
           let inserted = false;
           for (let i = 0; i<this.table[index].length; i++){
               if (this.table[index][i][0] === key){
                   this.table[index][i][1] = value;
                   inserted = true;
               }
           }
           if (inserted === false){
               this.table[index].push(
                   [key, value]
               );
           }
       }
    }



}

let hashTable = new  HashTable();
hashTable.set("mary", "0727767652");
hashTable.set("mary", "0727767653");
hashTable.set("mary", "0727767654");
hashTable.set("mary", "0727767655");