/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points){
    let time=0;
     for(let i=0;i<points.length-1;i++){
         let xDist=Math.abs(points[i+1][0]-points[i][0]);
         let yDist=Math.abs(points[i+1][1]-points[i][1]);
          time+=Math.max(xDist,yDist)
     }
     return time
}
