/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
function checkStraightLine(coordinates){
  let [x0,y0]=coordinates[0];
  let [x1,y1]=coordinates[1]
  let isLine=([x,y])=> ((x1-x0)*(y-y0) ==(x-x0)*(y1-y0));
  for(let coordinate of coordinates){
     if(!isLine(coordinate)) return false
  }
  return true
   
}
