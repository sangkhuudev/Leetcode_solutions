/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips,capacity){
    let timeline=[];
    let passengers=0;
    for(let [num,start,end] of trips) {
        timeline.push([start,num],[end,-num])
    }
    timeline.sort((a,b)=>a[0]-b[0]|| a[1]-b[1])
    for(let [,people] of timeline) {
        passengers+=people;
        if(passengers>capacity) return false
    }
    return true
    
}
// ver 2: using DP
function carPooling2(trips,capacity){
    let lastLocation=trips.reduce((prev,[,,current])=> Math.max(prev,current),0);
    let DP= Array(lastLocation).fill(0);
    trips.forEach(([num,start,end])=>{
        for(let i=start;i<end;i++) DP[i]+=num
    })
    return Math.max(...DP) <= capacity
}
