/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
function containsPattern(arr,m,k){
    for(let i=m,count=0;i<arr.length;i++){
        if(arr[i]!=arr[i-m]) count=0;
        else if(++count == m*(k-1)) return true
    }
    return false
}
