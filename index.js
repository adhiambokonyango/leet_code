const express = require("express")
const app = express();

/**
 * twoSum
 * @type {function(*, *): void}
 */
const twoSum = require("./twoSum");
twoSum([2,7,1,11,15], 9);

const subString = require("./longestSubString")
subString("abcabcbb");



