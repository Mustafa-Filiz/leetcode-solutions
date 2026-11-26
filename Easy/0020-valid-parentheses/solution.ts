function isValid(s: string): boolean {
    const brackets: Record<string, string> = {
       ')': '(',
       ']': '[',
       '}': '{'
    }
    const openBrackets = Object.values(brackets)
    const closeBrackets = Object.keys(brackets)

    const stack = []
    let result

    for(let i = 0; i <= s.length; i++) {
        const bracket = s[i]
        if (openBrackets.includes(bracket)) {
            stack.push(bracket)
        }

        if (closeBrackets.includes(bracket)) {
            if (stack[stack.length - 1] === brackets[bracket]) {
                stack.pop()
            } else {
                stack.push(bracket)
            }

        }
    }

    return !stack.length
};