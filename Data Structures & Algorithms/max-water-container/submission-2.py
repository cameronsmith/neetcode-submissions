class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r = 0, len(heights) - 1

        max_volume = float('-inf')
        while l < r:
            max_volume = max(max_volume, self.getSize(l, r, heights))

            if heights[l] < heights[r]:
                l += 1
            else:
                r -= 1  

        return max_volume

    def getSize(self, l, r, heights):
        width = r - l
        height = min(heights[r], heights[l])
        return height * width