class Solution:
    def repeatedNTimes(self, A: List[int]) -> int:
        S=set() 
        for item in A:
            if item in S:
                return item
            else:
                S.add(item)