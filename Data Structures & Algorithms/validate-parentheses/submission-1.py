class Solution:
    def isValid(self, s: str) -> bool:
        # ()[]{}
        # ([{}])
        hashmap = {
            '}': '{',
            ')': '(',
            ']': '[',
        }

        stack = []
        for char in s:
            if char in hashmap:
                if len(stack) == 0:
                    return False

                if stack[-1] != hashmap[char]:
                    return False

                stack.pop()
            else:
                stack.append(char)

        return True if len(stack) == 0 else False