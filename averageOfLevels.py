# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self,root: TreeNode) :
        if not root: return []
        queue = [root]
        res = []
        while len(queue) >  0:
            length= len(queue)
            sumTemp = 0;
            for i in range(length):
                node = queue.pop(0);
                sumTemp+=node.val
                if node.left : queue.append(node.left)
                if node.right : queue.append(node.right)
            res.append(sumTemp/length)
        return res    