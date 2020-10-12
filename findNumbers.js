/**
 * @param {number[]} nums
 * @return {number}
 */
const a=[23,1,48,234,4567]
function findNumbers(nums){
    let count=0;
    for(let element of nums){
        if((element.toString().length%2) ==0) count++
    }
    return count
}