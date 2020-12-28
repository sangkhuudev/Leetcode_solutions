/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents( students , sandwiches ) {
    let round = 0;
    while (true) {
        if( students.length ==0  || students.length == round ) break;
        let student = students.shift();
        if(student^sandwiches[0] == 0) {
            sandwiches.shift();
            round = 0;
        }
        else {
            students.push(student);
            round++
        }
    }
    return students.length
}
