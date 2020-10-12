/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums){
    let count=0;
    let prev=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count=count+1
        }
        else{
            prev=Math.max(count,prev);
            count=0;
        }
    }
    return Math.max(prev,count)
}
