/**
 * @param {number[]} arr
 * @return {boolean}
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrence(arr){
    let hash={};
    for(let element of arr){
       hash[element] = (hash[element]? ++hash[element]: 1)
    }
    let res=Object.values(hash);  
    return res.length== new Set(res).size
}


