/**
 * @param {number[]} nums
 * @return {number}
 */
// technique of prefix sum
function pivotIndex(nums){
    let sum=nums.reduce((acc,item)=>acc+item,0);
    let currentSum=0
    for(let i=0;i<nums.length;;i++){
        if((sum-nums[i])/2==currentSum) return i;
        else currentSum+=nums[i]
    }
    return -1
}
