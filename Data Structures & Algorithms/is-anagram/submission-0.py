class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hashmap = {}
        for char in s:
            hashmap[char] = hashmap.get(char, 0) + 1

        for char in t:
            value = hashmap.get(char, 0)

            if value == 0:
                return False

            hashmap[char] -= 1

        return True