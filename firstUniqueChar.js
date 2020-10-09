/**
 * @param {string} s
 * @return {number}
 */
// ver 1
function firstUniqueChar(s){
    let lastCount=0;
    for(let i=0;i<s.length;i++){
    let count=0;
    let char=s.charAt(i);
    let pos=s.indexOf(char)
       while(pos!==-1){
          count++;
          pos=s.indexOf(char,pos+1)
          if(i==s.length-1) lastCount==count;
       } 
       if(count==1) return s.indexOf(char)

    }
    return lastCount
}

// ver 2: using hashmap
function firstUniqueChar2(s){
    let hash={};
    for(let i=0;i<s.length;i++){
        if(hash[s[i]]) hash[s[i]]++;
        else hash[s[i]]=1;
    }
    for(let i=0;i<s.length;i++){
        if(hash[s[i]]==1) return i
    }
    return -1
}