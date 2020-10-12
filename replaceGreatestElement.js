/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr){
    let prev=0;
    let max=arr[arr.length-1];
    arr[arr.length-1]=-1;
    for(let i=arr.length-2;i>=0;i--,max=Math.max(max,prev)){
        prev=arr[i];
        arr[i]=Math.max(max,arr[i+1])
    }
    return arr
}
