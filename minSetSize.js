/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr){
   let hash=arr.reduce((acc,val)=>{
       acc[val]= acc[val]? ++acc[val] : 1;
       return acc
   },{});
   let value=Object.values(hash).sort((a,b)=>b-a);
   let count=0;
   let frequency=0;
   for(let item of value) {
       frequency+=item;
       count++
       if (frequency>=arr.length/2) return count
   }
    
}
