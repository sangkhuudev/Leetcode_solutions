/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies,extraCandies){
    let max=Math.max(...candies);
    return candies.map(val=>val+extraCandies>=max)
}