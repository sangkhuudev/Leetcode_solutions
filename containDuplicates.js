/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containDuplicates(nums){
    let hash={}
    for(let element of nums){
        hash[element]= (hash[element]? ++hash[element]:1)
    }
    let res=Object.values(hash);
    for(let element of res){
        if(element!=1) return true
    }
    return false
}
