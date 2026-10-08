class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            num = nums[i]
            need_value = target - num
            if need_value in hashmap:
                return [hashmap[need_value], i]
            hashmap[num] = i

        return []