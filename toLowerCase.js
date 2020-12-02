/**
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
    let res ='' ;
    for(let s of str) {
        let charCode = s.charCodeAt();
        if(charCode >= 65 && charCode <= 90){
            s = String.fromCharCode(charCode +32)
        }
        res+=s
    }
    
    return res
}
