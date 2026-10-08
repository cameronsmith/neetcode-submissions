class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = [0] * len(nums)
        postfix = [0] * len(nums)
        result = [0] * len(nums)

        product = 1
        for i in range(len(nums)):
            product *= nums[i]
            prefix[i] = product

        product = 1
        for i in range(len(nums) - 1, -1, -1):
            product *= nums[i]
            postfix[i] = product

        for i in range(len(nums)):
            left = prefix[i - 1] if i - 1 >= 0 else 1
            right = postfix[i + 1] if i + 1 < len(nums) else 1
            result[i] = left * right

        return result