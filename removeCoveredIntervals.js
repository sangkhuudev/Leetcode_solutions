/**
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals){
    let count=0;
    intervals.sort((a,b)=>a[0]-b[0] || b[1]-a[1]);
    for(let prev=0,cur=1;cur<intervals.length;cur++){
        const [prevStart,prevEnd]=intervals[prev];
        const [curStart,curEnd]=intervals[cur]
        if(prevStart<=curStart && curEnd<=prevEnd) count++;
        else prev=cur
    }
    return intervals.length-count   
}    
