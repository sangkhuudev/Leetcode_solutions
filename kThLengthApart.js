/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums,k){
    let start=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            if(i-start>=k || i==0) start=i+1;
            else return false
        }
    }
    return true
}
