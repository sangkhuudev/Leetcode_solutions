/**
 * @param {number[][]} dominoes
 * @return {number}
 */
function numEquivDominoPairs(dominoes){
    const twoDigits = new Array(100).fill(0);
    for (const d of dominoes) twoDigits[`${Math.min(...d)}${Math.max(...d)}`]++;
    return twoDigits.reduce((acc, curr) => acc + ((curr - 1) * curr) / 2, 0);
}
