/**
 * @param {number} num
 * @return {number}
 */
// ver 1:
function findComplement(num){
    return ((1 << (num.toString(2).length)) - 1) ^ num;
}

// ver 2:
function findComplement2(num){
    let mask = 1;
    while( mask < num){
        mask = (mask<<1) | 1;
    }
    return num ^ mask
}