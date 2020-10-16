/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums){
    let sum=0;
    return nums.map(x=>sum+=x)
}
