/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
function decode (encoded, first) {
    let res = [] ;
    for( let i =0 ; i <= encoded.length; ++i) {
        res.push(first)
        first = encoded[i]^first
    }
    return res
}


