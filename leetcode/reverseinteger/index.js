/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

 */

const reverse = x => {
  const INTEGER = {MAX_VALUE: Math.pow(2, 31) - 1, MIN_VALUE: -1 * (Math.pow(2, 31))}

  if (INTEGER.MIN_VALUE > x || x > INTEGER.MAX_VALUE) {
    return 0
  }

  const sign = x < 0 ? -1 : 1
  if (x < 0) {
    x *= sign
  }

  let revDigit = 0

  while (x !== 0) {
    const cDigit = x % 10
    revDigit = (revDigit * 10) + cDigit

    if (revDigit > INTEGER.MAX_VALUE || revDigit < INTEGER.MIN_VALUE) {
      return 0
    }

    x = Math.floor(x / 10)
  }

  return sign * revDigit
}

const main = () => {
  console.log(reverse(10))
  console.log(reverse(123))
  console.log(reverse(-123))
  console.log(reverse(105))
  console.log(reverse(1534236469))
  console.log(reverse(2147483648))
  console.log(reverse(66666666666666666666666666666666666666666))
}

main()
