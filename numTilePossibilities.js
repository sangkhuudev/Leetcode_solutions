/**
 * @param {string} tiles
 * @return {number}
 */
function numTilePossibilities( tiles ){
    let hash = new Map();
    for (const item of tiles) {
        hash.set(item,1+(hash.get(item)||0))
    }
    const counting = (hash) =>{
        let sum = 0;
        for (const [key,value] of hash.entries()) {
            if(value == 0) continue ;
            sum++;
            hash.set(key, hash.get(key)-1);
            sum+=counting(hash,sum);
            hash.set(key, hash.get(key)+1)
        }
        return sum
    }
    return counting(hash)
}

