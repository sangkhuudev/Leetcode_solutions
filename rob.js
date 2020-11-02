/**
 * @param {number[]} nums
 * @return {number}
 */
// ver 1: Bottom up
function rob(nums){
    if(nums.length == 0) return 0;
    if(nums.length == 1) return nums[0];
    let Dp= [nums[0],Math.max(nums[1],nums[0])]
    for(let i=2;i<nums.length;i++){
        let val1= Dp[i-2]+nums[i];
        let val2= Dp[i-1]
        Dp[i]= Math.max(val1,val2)
    }
    return Dp[nums.length-1]
}

// ver 2 : top down
function rob2(nums){
    if(nums.length == 0) return 0
    let dp = Array(nums.length).fill(0), size = nums.length
    dp[size] = 0, dp[size - 1] = nums[size - 1]
        
    for(let i = size - 2; i >= 0; i--) { dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]) }
        
    return dp[0]
}
// ver 3: 
function rob3(nums){
    let Dp=[];
    const findHouses = (nums,Dp,index)=>{
        if(index >nums.length-1) return 0;
        if(Dp[index] == undefined){
            let skipHouse= findHouses(nums,Dp,index+1);
            let robbedHouse= findHouses(nums,Dp,index+2) + nums[index] ;
            Dp[index] = Math.max(skipHouse,robbedHouse)
        }  
        return Dp[index] 
    }
    return findHouses(nums,Dp,0)
}