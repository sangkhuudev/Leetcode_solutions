class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        round = 0;
        while True :
            if len(students)==0 or len(students) == round:
                break;
            student = students.pop(0);
            if student == sandwiches[0]:
                sandwiches.pop(0);
                round = 0;
            else :
                students.append(student);
                round+=1;   
        return len(students)        
