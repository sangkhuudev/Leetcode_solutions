/**
 * @param {number[]} A
 * @return {boolean}
 */
function canThreePartsEqualSum(A){
     let sum=A.reduce((acc,item)=>acc+item);
     if(sum%3 !==0) return false;
     let count=0;
     let runningSum=0;
     let i=0;
     for(let i=0;i<A.length-1;i++){
         runningSum+=A[i]
         if(runningSum==sum/3){
            count++
            runningSum=0;
         }
         if(count==2) return true;
     }
     return false 
}
