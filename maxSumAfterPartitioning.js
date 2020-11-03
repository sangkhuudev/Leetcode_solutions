/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function maxSumAfterPartitioning(arr,k){
    let Dp=[];
    for(let i=0;i<arr.length;++i){
        let max=arr[i];
        for(let j=0;j<k;++j){
            if(i>=j){
                max= Math.max(max,arr[i-j]);
                Dp[i]= Math.max( Dp[i]||0, (Dp[i-j-1]|| 0) + max*(j+1))
            }
        }
    }
    return Dp[arr.length-1]
}
/**
 * DYNAMIC PROGRAMMING + MEMOIZATION
 * 
 * Creates a memo[] that holds all the max results for each index from 0....end of arr.length-1.
 * For each number in the arr[i] it "tries on" different partition sizes from 1 to k, all the while
 * holding the biggest number within that partition.
 * Then sees if it will produce the max sum by multiplying that max num by the partition size, 
 * and adding that to the max sum that's already been calculated until that partition (in memo[i - partition size]).
 * 
 * For example: arr=[8, 4, 7], k=2
 * memo[0] = can only have partition size of 1 so it will be the value 8
 * memo[1] = which is bigger? partition size 1 (max num is 4) or 2 (max num between {8,4} is 8? =>
 *          memo[1-1]+4*1 or memo[1-2]+8*2 =>
 *          memo[0]+4 or memo[-1]+16 (memo[-1] doesn't exist so take 0 instead) =>
 *          8+4 or 0+16 => 
 *          12 or 16 => 16
 * memo[2] = which is bigger? partition size 1 (max num 7) or 2 (max num between {7, 4} is 7)? =>
 *          memo[2-1]+7*1 or memo[2-2]+7*2 =>
 *          memo[1]+7 or memo[0]+14 => 16+7 or 8+14 => 24 or 22 => 24
 * so the answer is the memo[] of the last index: 24.
 * 
 * Runtime complexity - say N=arr.length then complexity is O(N*k). Each number in array tries different partition sizes.
 * Space complexity - O(N) for memo[] for every value in arr[].
 **/