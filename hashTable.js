
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

module.exports = class HashTable {

    constructor() {
        this.table = [];
        this.max= 100;
    }

    set = (key, value) =>{
        const index = _hash(key, this.max);
        if (this.table[index] === undefined){
            console.log(this.table[index])
            this.table[index] = [
                [key, value]
            ]
        } else {
            let inserted = false;
            for (let i = 0; i<this.table[index].length; i++){
                console.log(this.table[index][i])
                if (this.table[index][i][0] === key){
                    this.table[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false){
                console.log(this.table[index])
                this.table[index].push(
                    [key, value]
                );
            }
        }
    }

    display() {
        this.table.forEach((values, index) => {
            const chainedValues = values.map(
                ([key, value]) => `[ ${key}: ${value} ]`
            );
            console.log(`${index}: ${chainedValues}`);
        });
    }


}

// let hashTable = new  HashTable();
//
// hashTable.set("mary", "0727767652");
// hashTable.set("mary", "0727767653");
// hashTable.set("mary", "0727767654");
// hashTable.set("mary", "0727767655");