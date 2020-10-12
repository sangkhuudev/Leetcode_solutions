/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums,target){
    let hash={};
    for(let i=0;i<nums.length;i++){
        let diff=target-nums[i]
        if(diff in hash) return [hash[diff]+1,i+1];
        else hash[nums[i]]=i   
    }
}
