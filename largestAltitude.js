/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
    let res = Array(gain.length+1).fill(0) ;
    res[gain.length+1] = gain.reduce((acc,val) => acc+val,0)
    for( let i = 0; i < gain.length; ++i) {
        res[i+1] = res[i] + gain[i]
    }
    return Math.max(...res)
}
