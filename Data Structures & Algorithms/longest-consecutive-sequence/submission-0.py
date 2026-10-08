class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        items = set()
        for num in nums:
            items.add(num)

        max_value = 0
        for num in nums:
            sum = 1
            find = num + 1
            while find in items:
                find += 1
                sum += 1

            max_value = max(sum, max_value)
        
        return max_value