class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const ops = ['+', '-', '*', '/']
        for (const token of tokens) {
            if (ops.includes(token)) {
                const b = stack.pop()
                const a = stack.pop()

                switch (token) {
                    case '+':
                        stack.push(a + b)
                        break
                    case '-':
                        stack.push(a - b)
                        break
                    case '*':
                        stack.push(a * b)
                        break
                    case '/':
                        stack.push(Math.trunc(a / b))
                        break;
                }
            } else {
                stack.push(+ token)
            }
        }

        return stack.pop()

    }
}
