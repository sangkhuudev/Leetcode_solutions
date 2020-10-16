/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums){
    let hash=new Map();
    let count=0;
    for(let item of nums) {
        hash.set(item,1+(hash.get(item)||0))
    }
    for(let value of hash.values()) {
        count=count+value*(value-1)/2
    }
    return count
}
