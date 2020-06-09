/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:

All given inputs are in lowercase letters a-z
 */

const longestCommonPrefix = strs => {
  let prefix = ''
  if (!strs || strs.length === 0) {
    return prefix
  }

  if (strs.length === 1) {
    return strs[0]
  }

  strs = strs.sort()
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] && strs[strs.length-1][i] && strs[0][i] === strs[strs.length-1][i]) {
      prefix += strs[0][i]
    } else {
      break
    }
  }

  return prefix
}

const main = () => {
  console.log(longestCommonPrefix(['flower', 'flow', 'floristery']))
  console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
  console.log('_' + longestCommonPrefix([' ']) + '_')
  console.log('_' + longestCommonPrefix([]) + '_')
  console.log('_' + longestCommonPrefix(['', '']) + '_')
  console.log('_' + longestCommonPrefix(['c', 'c']) + '_')
  console.log('_' + longestCommonPrefix(['ac', 'cb']) + '_')
  console.log('_' + longestCommonPrefix(["abca","abc"]) + '_')
}

main()
