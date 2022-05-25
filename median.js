let nums1 = [1,2]
let nums2 = [3, 4]

module.exports = median = () =>{
    let merge = nums1.concat(nums2)
    console.log(merge)
    let sorted = merge.sort()
    console.log(sorted)
    let sum

    // get the mid point
    let mid = Math.floor(sorted.length/2)

    if (mid === 1){
        console.log(`mid_length: ${mid}`)
        console.log(`median: ${sorted[mid]}`)
        return sorted[mid]

    } else {
        sum = sorted[mid] + sorted[mid-1]
        console.log(`mid_length: ${mid}`)
        console.log(`mid_length + 1: ${mid-1}`)

        console.log(`sum: ${sum}`)
        console.log(sum/2)
        return sum/2
    }

    // add the two middle elements


}

