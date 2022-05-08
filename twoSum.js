module.exports = twoSum = (nums, target) => {
    console.log("incoming array")
    console.log(nums)
    let map = new Map();
    let resultantArr = [];

    for (let i = 0; i<nums.length; i++){
        let compliment = target-nums[i];
        map.set( compliment, i);
    }

    for (let i = 0; i<nums.length; i++){
        if (map.get(nums[i]) !== undefined){
            resultantArr.push(map.get(nums[i]));
        }

    }
    console.log("elements found")
    console.log(resultantArr)
    console.log( `map_size: ${map.size}`)
}
// time complexity O(n)


