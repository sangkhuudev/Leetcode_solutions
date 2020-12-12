/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray( arr1 , arr2 ){
    let res = [] ;
    let hash = new Map() ;
    for(let item of arr1) {
        hash.set(item, 1+(hash.get(item) ||0))
    }
    let arr = arr1.filter(x => !arr2.includes(x)).sort((a,b)=> a-b)
    for( let i=0 ;i<arr2.length  ; ++i){
        while(hash.get(arr2[i])>0){
            res.push(arr2[i]) ;
            hash.set(arr2[i],hash.get(arr2[i]) - 1)
        }    
    }
    return  [...res,...arr]
}
