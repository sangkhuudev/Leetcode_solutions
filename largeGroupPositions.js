/**
 * @param {string} s
 * @return {number[][]}
 */
function largeGroupPositions(s){
     let res=[]
     let i=0;
     while(i<s.length-1){
         let count=1;
         while(s[i+1]==s[i]) {
             count++;
             i++
         }    
         if(count>=3) res.push([i-count+1,i]);
         i=i+1
     }
     return res
}
