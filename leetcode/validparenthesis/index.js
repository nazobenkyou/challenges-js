/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true
 */

const isValid = s => {
  const stack = []
  const BRAKETS = {
    P_CLOSED: ')',
    B_CLOSED: ']',
    BR_CLOSED: '}',
    P_OPENED: '(',
    B_OPENED: '[',
    BR_OPENED: '{'
  }

  const checkerAndPop = c => {
    if (stack.length === 0 || stack[stack.length - 1] !== c) {
      return false
    }
    stack.pop()
    return true
  }

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case BRAKETS.P_OPENED:
      case BRAKETS.B_OPENED:
      case BRAKETS.BR_OPENED:
        stack.push(s[i])
        break
      case BRAKETS.P_CLOSED:
        if (!checkerAndPop('(')) {
          return false
        }
        break
      case BRAKETS.B_CLOSED:
        if (!checkerAndPop('[')) {
          return false
        }
        break
      case BRAKETS.BR_CLOSED:
        if (!checkerAndPop('{')) {
          return false
        }
        break
    }
  }

  return stack.length === 0
}

const main = () => {
  console.log(isValid("()"))
  console.log(isValid("()[]{}"))
  console.log(isValid("(]"))
  console.log(isValid("([)]"))
  console.log(isValid("{[]}"))
  console.log(isValid("]"))
  console.log(isValid("["))
  console.log(isValid("[[[[[[["))
  console.log(isValid("[[[[[[[((()])]]]"))
  console.log(isValid("([{{}[][]}])"))
}

main()
