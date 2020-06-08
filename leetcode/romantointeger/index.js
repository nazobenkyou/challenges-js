/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 */

const romantToInt = s => {
  const orderSymbols = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

  if (!s || s.length === 0) {
    return 0
  }

  let digit = orderSymbols[s[0]]

  let preDigit, currDigit
  for (let i = 1; i < s.length; i++) {
    currDigit = orderSymbols[s[i]]
    preDigit = orderSymbols[s[i - 1]]

    if (currDigit <= preDigit) {
      digit += currDigit
    } else {
      digit = digit - preDigit * 2 + currDigit
    }
  }

  return digit
}

const main = () => {
  console.log(romantToInt("III"))
  console.log(romantToInt("IV"))
  console.log(romantToInt("IX"))
  console.log(romantToInt("LVIII"))
  console.log(romantToInt("MCMXCIV"))
  console.log(romantToInt("MCMXCV"))
  console.log(romantToInt("MMCMXCV"))
}

main()
