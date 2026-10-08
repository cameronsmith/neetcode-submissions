class Solution:
    def calculate(self, value: int, n: int):
        if value == n:
            return 1
        if value > n:
            return 0

        return self.calculate(value + 1, n) + self.calculate(value + 2, n)

    def climbStairs(self, n: int) -> int:
        return self.calculate(0, n)
        
        