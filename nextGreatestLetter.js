/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function nextGreatestLetter(letters,target){
    let low=0,high= letters.length-1;
    if(letters[low]>target || target >= letters[high]) return letters[0];
    while(low<high){
        let mid=Math.floor((high+low)/2);
        if(target < letters[mid]) high=mid;
        else low=mid+1
    }
    return letters[low]
}
