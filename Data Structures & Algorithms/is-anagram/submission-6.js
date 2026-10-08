class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { 
        if (s.length !== t.length) {
            return false
        }

        const hashmap1 = new Map()
        for (const char of s) {
            hashmap1.set(char, (hashmap1.get(char) ?? 0) + 1)
        }

        const hashmap2 = new Map()
        for (const char of t) {
            hashmap2.set(char, (hashmap2.get(char) ?? 0) + 1)
        }

        return( [...hashmap1].every(
            ([key, value]) => hashmap2.get(key) === value
        ))
    }
}
