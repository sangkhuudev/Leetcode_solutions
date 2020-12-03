/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
    let arrivals = paths.map(place =>place[0]);
    let destinations = paths.map(place => place[1])
    return destinations.filter(a => arrivals.indexOf(a) == -1 ).join(' ')
}
