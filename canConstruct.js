function canConstruct(ransomNote, magazine) {
    let hash = magazine.split('').reduce((acc,current) => {
        acc[current] = acc[current] + 1 || 1;
        return acc;
    }, {})
    for(let char of ransomNote) {
        if(!hash[char]) return false;
        hash[char]--
    }
    return true;

}

