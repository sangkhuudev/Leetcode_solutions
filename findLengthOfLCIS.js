/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums){
     let count=1;
     let max=-Infinity
     for(let i=0;i<nums.length-1;i++){
         while(nums[i]<nums[i+1]){
            count++;
            i++
         }
         max=Math.max(count,max);
         count=1;
     }
     return max>=1 ? max : 1
}
