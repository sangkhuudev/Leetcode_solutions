/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
// ver 1
function minCost(s,cost){
    let res=0;
    let i=0
    while(i<s.length){
        let start=i
        let end=i+1
        let count=[];
        while(s[start]==s[end]){
            start++;
            end++
        }
        for(let j=i;j<=start;j++){
            count.push(cost[j])
        }
        i=end
        res+=count.reduce((acc,val)=>acc+val,0)-Math.max(...count);
    }
    return res
}

// ver 2:
function minCost2(s,cost){
    let res=0;
    for(let i=0,max=0;i<s.length;i++){
        res+=cost[i];
        max=Math.max(max,cost[i]);
        if(s[i] !=s[i+1]){
            res-=max;
            max=0
        }
    }
    return res
}