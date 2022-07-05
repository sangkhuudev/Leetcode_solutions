function uncommonFromSentences(s1 , s2) {

    let result = [];
    let mySet = new Set([...s1.split(' '),...s2.split(' ')]);
    let hash1 = s1.split(' ').reduce((acc,cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
    }, {});
    let hash2 = s2.split(' ').reduce((acc,cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
    }, {});
    for( let element of mySet ) {
        if(!hash1[element] && hash2[element]==1) result.push(element);
        else if(!hash2[element] && hash1[element]==1) result.push(element);
    }
    
    return result;

}
