/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// ver 1 : using hash map
function findTheDifference(s,t) {
    let hash1= new Map;
    let hash2= new Map;
    for(let item of s) {
        hash1.set(item,1+(hash1.get(item))||0)
    }
    for(let item of t) {
        hash2.set(item,1+(hash2.get(item))||0)
    }
    for (const item of t) {
        if(hash2.get(item) != hash1.get(item) ) return item
    }
    
}
// ver 2: using bit manipulation
function findTheDifference2( s,t) {
    let xorAcc = 0 ;
    let i=0;
    for(i; i<s.length;++i){
        xorAcc^= t[i].charCodeAt() ^ s[i].charCodeAt()
    }
    xorAcc^= t[i].charCodeAt();
    return String.fromCharCode(xorAcc)
}

// ver 3 : using reduce method
function findTheDifference3( s,t) {
    let sum1 = s.split('').reduce((acc,current) => acc+current.charCodeAt(0),0);
    let sum2 = t.split('').reduce((acc,current) => acc+current.charCodeAt(0),0);
    return String.fromCharCode(sum2-sum1)
}
