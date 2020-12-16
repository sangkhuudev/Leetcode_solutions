class Solution:
    def sortArrayByParity(self, array: List[int]) -> List[int]:
		return [i for i in array if not i%2] + [i for i in array if i%2]