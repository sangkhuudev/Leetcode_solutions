/**
 * @param {number} n
 * @return {boolean}
 * Number is power of 4

It has only 1 set bit
That set bit is at even position [0 indexed based, right to left]
 */
function isPowerOfFour(n) {
    if(n<0) return false ;
    const countBits = (num) => (num===0 ? 0 : 1+ countBits(num&(num-1)));
    let one = countBits(n);
    if(one !== 1) return false;
    let index = n.toString(2).split('').reverse().findIndex(val => val=='1');
    console.log(index);
    console.log(index&1)
    return !(index&1)   
}
