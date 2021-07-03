/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
    let allow = new Set(allowed);
    return words.reduce((count,word) =>{
        for (const char of word) {
            if(!allow.has(char)){
                count--;
                break;
            }
        }
        return count
    },words.length)
}