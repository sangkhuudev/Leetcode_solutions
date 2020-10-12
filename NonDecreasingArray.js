/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums){
    var inverse = false; 
    for(var i = 0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i + 1]) {
            if(inverse || nums[i] > nums[i + 2] && nums[i - 1] > nums[i + 1]) {
                return false
            } 
            inverse = true;
        }
    }
    return true
}
