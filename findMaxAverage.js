/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// ver 1
function findMaxAverage(nums,k){
   let runingSum =Array(nums.length);
   runingSum[0]=nums[0]
   for(let i=1;i<nums.length;i++){
       runingSum[i]=nums[i]+runingSum[i-1]
   }
   console.log(runingSum)
   let res=runingSum[k-1]
   for(let i=0;i+k<nums.length;i++){
      let tempSum=runingSum[k+i]-runingSum[i];
      res=Math.max(res,tempSum)
   }
   return res/k
}
// ver 2
function findMaxAverage2(nums,k){
    let sum=0;
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }
    let res=sum;
    for(let i=0;i+k<nums.length;i++){
        sum+=nums[i+k]-nums[i];
        res=Math.max(sum,res)
    }
    return res/k
}