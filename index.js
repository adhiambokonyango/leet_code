const express = require("express")
const app = express();

/**
 * twoSum
 * @type {function(*, *): void}
 */
const twoSum = require("./twoSum");
twoSum([2,7,1,11,15], 9);


const longestSubstring = require("./windowSum")
/// some test cases
console.log(longestSubstring('pwwkew'.split(''), 2) );
console.log(longestSubstring('aaabc'.split(''), 3) );
// only one letter in string
console.log(longestSubstring('aaa'.split(''), 2) );



const longestString = require("./longestSubString")
longestString('abcabcbb')