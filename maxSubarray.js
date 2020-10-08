
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum=nums[0];
     let DP=[];
     DP[0]=nums[0];
     for(let i=1;i<nums.length;i++){
         
         DP[i]=nums[i]+(DP[i-1]>0 ? DP[i-1] : 0)
         maxSum=Math.max(maxSum,DP[i])
     }
     return maxSum
 };