/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr){
    let length=arr.length
    let i=0;
     while(i<length-1){
         if(arr[i]==0){
             arr.splice(i,0,0);
             i=i+2;
         }
         else i++
     }
     let res=arr.splice(length)
     return arr
}
