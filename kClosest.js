/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function kClosest(points,K){
   const swap=(i,j)=>{
       [points[i],points[j]] = [points[j],points[i]]
   };
   const distance=point=> point[0]**2 + point[1]**2;
   const partition=(low,high)=>{
       let pivotDist=distance(points[high]);
       let targetIndex=low;
       let searchIndex=low
       while(searchIndex<high){
           if(distance(points[searchIndex])<=pivotDist){
               swap(searchIndex,targetIndex);
               targetIndex++;
           }
           searchIndex++;
       }
       swap(high,targetIndex);
       return targetIndex;
   }
   const quickSelect=(low,high,target)=>{
       let pivot = partition(low,high);
       if(pivot== target-1) return;
       else if( pivot < target -1) quickSelect(pivot+1,high,target);
       else quickSelect(low,pivot-1,target)
   }
   quickSelect(0,points.length-1,K);
   return points.slice(0,K)
}

