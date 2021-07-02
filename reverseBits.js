/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let res = 0,
        position = 31;
    while (n) {
        let rightmost = n&1;
        res = res + (rightmost << position);
        n = n >>> 1 
        position--

    }
    // turn - to +
    return res>>>0    
}
let n = 11111111111111111111111111111101;
console.log(reverseBits(n))