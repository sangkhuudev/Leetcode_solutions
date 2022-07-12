function findDifference(nums1, nums2) {
    const hash1={}
    const hash2={}
    const result=[[],[]]
    
    for(let num of nums1){
        hash1[num]=hash1[num]+1||1
    }
    
    
    for(let num of nums2){
        hash2[num]=hash2[num]+1||1
    }
    
    for(let num in hash1){
        if(!hash2[num]) result[0].push(parseInt(num))
    }
    for(let num in hash2){
        if(!hash1[num]) result[1].push(parseInt(num))
    }
    return result

}

