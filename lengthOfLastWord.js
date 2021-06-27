/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    if(!s.length) return 0
    let string = s.trim().split(' ')
    return string[string.length-1].length
}



