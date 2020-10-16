/**
 * @param {number[]} nums
 * @return {number}
 */
// technique of prefix sum
function pivotIndex(nums){
    let n=nums.length
    let leftSum=Array(n).fill(0);
    let rightSum=Array(n).fill(0);
    for(let i=1;i<n;i++) leftSum[i]=leftSum[i-1]+nums[i-1];
    for(let j=n-2;j>=0;j--) rightSum[j]=rightSum[j+1]+nums[j+1];
    for(let i=0;i<n;i++){
        if(leftSum[i]==rightSum[i]) return i
    }
    return -1
}
