let ht = require("./hashTable");

module.exports = subString=(string)=>{
   let hashTable = new ht();
    let map = new Map();
    let arr = [];
    for (let i = 0; i<string.length; i++){
      //  map.set( string[i], i);
        hashTable.set(string[i], i)
    }
    console.log("sub string")
    console.log(hashTable)
   // hashTable.display()
    for (let i = 0; i<string.length; i++){

    }
    //console.log(map.entries())



}