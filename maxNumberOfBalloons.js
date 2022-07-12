function maxNumberOfBalloons(text) {
    let hashmap= {}
    let countWords = 0;
    for(let item of text) {
        hashmap[item] = (hashmap[item] || 0 ) + 1; 
    }

    while  (hashmap['b'] > 0 && hashmap['a'] > 0 && hashmap['n'] > 0 && hashmap['l'] > 1 && hashmap['o'] > 1) {
        hashmap['b']--;
        hashmap['a']--;
        hashmap['n']--;
        hashmap['l']-=2;
        hashmap['o']-=2;
        countWords++
    }

    return countWords

}

/*--------------------------------------------------------------
 const map = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}
    
    for (const c of text) if (c in map) map[c]++
    
    const res = [map['b'], map['a'], map['l'] / 2, map['o'] / 2, map['n']]

    return Math.floor(Math.min(...res)) */