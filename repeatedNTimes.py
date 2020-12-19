class Solution:
    def repeatedNTimes(A):
        S = set() 
        for item in A:
            if item in S:
                return item
            else:
                S.add(item)
    print(repeatedNTimes([1,2,3,3]))         