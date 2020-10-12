/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums){
    let hash={}
    for(let element of nums){
        hash[element]=hash[element]? ++hash[element]:1
    }
    for(let i=0;i<=nums.length;i++){
        if(hash[i]==undefined) return i
    }
}