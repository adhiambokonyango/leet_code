module.exports = twoSum = (nums, target) => {
    console.log("incoming array")
    console.log(nums)
    let map = new Map();

    for (let i = 0; i<nums.length; i++){
        let compliment = target-nums[i];
        map.set( compliment, i);
    }

    for (let i = 0; i<nums.length; i++){
            console.log("elements found")
            console.log(map.get(nums[i]))
    }

    console.log(map.size)
}

// time complexity O(n)


