module.exports = function longString(test){
    let map = new Map();
    let leftEnd=0, rightEnd = 0, len=0;

    /**
     *   for(int i=0; i<s.length(); i++) {
     *             char c = s.charAt(i);
     *             if (map.containsKey(c)) {
     *                 if (map.get(c) >= start)
     *                     start = map.get(c) + 1;
     *             }
     *             len = Math.max(len, i-start+1);
     *             map.put(c, i);
     *         }
     */

    for( let i = 0 ;i < test.length;i++)
    {
        if (map.has(test[i])){
            console.log(`map.get(test[i]): ${map.get(test[i])}`)
            if (map.get(test[i]) >= leftEnd)
                leftEnd = map.get(test[i]) + 1;
        }
        len = Math.max(len, i-leftEnd+1);
        map.set(test[i], i);
    }

    // expand right window
    console.log(`len: ${len}`)
    count(test, map)
}

// function count occurrence of character
function count( str , outp_map )
{
    for( let i = 0 ;i < str.length ;i++)
    {
        let k = outp_map.get(str[i]);
        outp_map.set(str[i], k+1) ;
    }
    //calling  print function
    printAns(outp_map);
}

function printAns( outp_map )
{
    for( let [ key ,value] of outp_map)
    {
        console.log(`${key}  occurs  ${value} times` );
    }

}