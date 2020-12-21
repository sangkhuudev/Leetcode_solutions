/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort ( nums ) {
    let hash = new Map();
    for(let item of nums) {
        hash.set(item,1+(hash.get(item)||0))
    }
    nums.sort((a,b) => hash.get(a) - hash.get(b) || b - a)    
    return nums
}
