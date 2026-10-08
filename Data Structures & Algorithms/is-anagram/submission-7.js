class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { 
        const arr1 = new Array(26).fill(0)
        const arr2 = new Array(26).fill(0)

        for (const char of s) {
            const code = char.charCodeAt(0) - 97
            arr1[code] = (arr1[code] ?? 0) + 1
        }

        for (const char of t) {
            const code = char.charCodeAt(0) - 97
            arr2[code] = (arr2[code] ?? 0) + 1
        }

        return arr1.join(',') === arr2.join(',')
    }
}
