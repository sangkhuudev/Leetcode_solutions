class Solution:
    def shortestToChar(S , C) :
        index = [];
        res = [];
        for i in range(len(S)):
            if S[i] == C:
                index.append(i)
        for j in range(len(S)):
            i = 0 ;
            minDistance = len(S)+1
            while i < len(index):
                if abs(index[i]-j) < minDistance:
                    minDistance = abs(index[i]-j)
                i=i+1
            res.append(minDistance)
        return res
                 