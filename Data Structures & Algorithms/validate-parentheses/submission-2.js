class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        const valid = {
            ']': '[',
            ')': '(',
            '}': '{'
        }

        for (const c of s) {
            if (valid[c]) {
                if (stack.pop() !== valid[c]) {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0
    }
}
