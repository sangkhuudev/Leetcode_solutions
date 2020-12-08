/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum( nums ) {
    let res = 0;
    nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length; i=i+2){
        res+=nums[i]
    }
    return res
}
