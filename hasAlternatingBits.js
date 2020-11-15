/**
 * @param {number} n
 * @return {boolean}
 */
// ver 1
function hasAlternatingBits(n){
    let arr= n.toString(2).split('').map(Number);
    for(let i=0; i+1<arr.length;++i){
        if(arr[i]==arr[i+1]) return false;
    }
    return true
}
// ver 2
function hasAlternatingBits2(n){
    while(n > 0){
        let lastBit= (n & 1);
        n= (n>>1);
        if(lastBit === (n & 1)) return false;
    }
    return true
}