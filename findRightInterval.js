/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
function findRightInterval(intervals){
   let maxStart=0;
   let startHash= new Map();
   let res=[]
    for(let i=0;i<intervals.length;i++){
        startHash.set(intervals[i][0],i);
        if(intervals[i][0]>maxStart) maxStart = intervals[i][0];
    }    
    for(let interval of intervals){
        let found = false ;
        let endPoint=interval[1];
        while(endPoint<=maxStart){
            if(startHash.get(endPoint) != undefined){
                res.push(startHash.get(endPoint));
                found= true;
                break;
            }
            else endPoint++
        }
        if(!found) res.push(-1)
    }
    return res  
}
