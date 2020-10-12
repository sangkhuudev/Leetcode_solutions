/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExists(arr){
    let hash=arr.reduce((acc,item)=>{
        acc[item]= acc[item]+1 || 1;
        return acc
    },{});
    if(hash[0]>=2) return true
    for(let i=0;i<arr.length;i++){
        let quotient=arr[i]/2;
        if(quotient!=0 && hash[quotient]) return true;
    }
    return false
}
