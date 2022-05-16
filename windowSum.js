module.exports = function longestSubstring(letters, k) {
    let map = new Map();
    let maxLen = -Infinity;
    let uniqueCharsSeen = new Map(); // could be done with a primitive, but this was easiest
    let windowStart = 0;
    let windowEnd = 0;

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        // increment windowEnd
        windowEnd++;
        // put letter in map
        map.set(letter, i);
        uniqueCharsSeen.set(letter, i);

        // adjust window when there are more distinct chars than the target
        while (map.size > k) {
            // update left side of window to the last seen index of the first item put in map
            let firstKey = map.keys().next().value;
            console.log( `map.keys(): ${map.keys()}`)
            windowStart = map.get(firstKey) + 1;
            // remove first char seen from the map
            map.delete(firstKey);
        }

        // update maxLen
        maxLen = Math.max(maxLen, windowEnd - windowStart);
    }

    // when string has less distinct chars than the k that are required
    if (uniqueCharsSeen.size < k) {
        return -Infinity;
    }

    return maxLen;
}







