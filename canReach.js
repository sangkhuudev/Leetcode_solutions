/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
function canReach(arr, start){
    const DFS = (arr,start, visited ={}) =>{
        if( start < 0|| start >=arr.length ) return false ;
        if( arr[start] == 0) return true ;
        visited[start] = true;
        let forward = start + arr[start];
        let backward = start - arr[start];
        if(!visited[forward] &&  DFS(arr,forward,visited)) return true
        if(!visited[backward] && DFS(arr,backward,visited)) return true;
        return false
    }
    return DFS(arr,start,{})
}
