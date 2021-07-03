/**
 * @param {number} n
 * @return {number}
 */
// ver 1:
function bitwiseComplement(n) {
    return parseInt([...n.toString(2)].map(bit => bit^1).join(''),2)
}
// ver 2: using number & (number -1) to flip all digits to the right of 1 ( rightmost 1 of number)
function bitwiseComplement2(n) {
    let mask = (1 << Math.floor(Math.log(n)/Math.log(2))+1) - 1;
    return n==0 ? 1 : n ^ mask
}
