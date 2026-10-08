class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        items = set(nums)

        max_value = 0
        for num in nums:
            if (num - 1) in items:
                continue

            sum = 1
            find = num + 1
            while find in items:
                find += 1
                sum += 1

            max_value = max(sum, max_value)
        
        return max_value