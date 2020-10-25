/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s,t){
    let i=0;
    for(let j=0;i<s.length &&j<t.length;j++){
        if(s.charAt(i)==t.charAt(j)) i++
    }
    return i==s.length ? true : false  
}
