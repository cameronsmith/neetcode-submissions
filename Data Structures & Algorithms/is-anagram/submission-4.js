class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length < t.length) {
            return false
        }

        const hashmap1 = new Map()
        for (const item of s) {
            hashmap1.set(item, (hashmap1.get(item) ?? 0) + 1)
        }
        const hashmap2 = new Map()
        for (const item of t) {
            hashmap2.set(item, (hashmap2.get(item) ?? 0) + 1)
        }

        for (const [key, value] of hashmap1) {
            if (!hashmap2.get(key) || hashmap2.get(key) !== value) {
                return false
            }
        }

        return true
    }
}
