/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubarr(nums){
    let maxSum=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]>0){
            nums[i]+=nums[i-1]
        }
        maxSum=Math.max(maxSum,nums[i])
    }
    return maxSum
}

   