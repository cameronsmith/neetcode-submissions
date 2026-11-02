class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { 
        const anagram1 = new Array(26).fill(0)
        const anagram2 = new Array(26).fill(0)

        for (const c of s) {
            const index = c.charCodeAt(0) - 97
            anagram1[index] = anagram1[index] + 1
        }

        for (const c of t) {
            const index = c.charCodeAt(0) - 97
            anagram2[index] = anagram2[index] + 1
        }

        return anagram1.join(',') === anagram2.join(',')
    }
}
