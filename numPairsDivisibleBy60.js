/**
 * @param {number[]} time
 * @return {number}
 */
function numPairsDivisibleBy60(time){
   let arr=Array(60).fill(0);
   return time.reduce((acc,curr)=>{
       acc+=arr[(60-curr%60)%60];
       arr[curr%60]+=1;
       return acc
   },0)

}
