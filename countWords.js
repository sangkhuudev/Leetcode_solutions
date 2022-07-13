function countWords(words1,words2) {
    let result = 0;
    let hash1 = words1.reduce((acc,word) => {
        acc[word] = acc[word] + 1 || 1;
        return acc;
    },{});

    let hash2 = words2.reduce((acc,word) => {
        acc[word] = acc[word] + 1 || 1;
        return acc;
    },{})

    for(let word in hash2) {
        if(hash1[word] == 1 && hash2[word] == 1)  result++;
    }
    return result;

}

