/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr){
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length-2;i++){
        if((arr[i+1]-arr[i]) !== (arr[i+2]-arr[i+1])) return false
    }
    return true
}
