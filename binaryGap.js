/**
 * @param {number} n
 * @return {number}
 */
// Ver 1: 2 pointers
function binaryGap(n) {
    let num = n.toString(2),
        max = 0;
    i = 0,
        j = 1;
    while (j < num.length) {
        if (num[j] == 1) {
            max = Math.max(max, j - i);
            i = j;
            j++
        } else j++
    }
    return max
}
// Ver 2 : Using map + eliminating '1'
function binaryGap2(n) {
    return  Math.max(0,...n.toString(2)
                .split('1')
                .slice(1,-1)
                .map((gap) => gap.length+1))    
}