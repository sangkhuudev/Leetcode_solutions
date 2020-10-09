/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */                   
function containDuplicates2(nums,k){
    let indexHash = {}
    for (let i = 0; i < nums.length; i++) {
        if ( i - indexHash[nums[i]] <= k) {
          return true
        }
        indexHash[nums[i]] = i;
    }
    return false
}

