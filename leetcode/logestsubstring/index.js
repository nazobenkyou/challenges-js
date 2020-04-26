/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
const _ = require('underscore')

const lengthOfLongestSubstring = s => {
  const d = {}
  let maxLength = 0
  let start = 0

  s.split('').forEach((c, i) => {
    // Check if the char is in the hashmap and if it's less than the value of the hashmap
    if (c in d && start <= d[c]) {
      // calculate the max length from the start and the maxLength previous value and update the start variable
      maxLength = Math.max(i - start, maxLength)
      start = d[c] + 1
    }

    d[c] = i
  })

  return Math.max(s.length - start, maxLength)
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring(" - "))
console.log(lengthOfLongestSubstring("a   b "))
console.log(lengthOfLongestSubstring("aab"))
console.log(lengthOfLongestSubstring("dvdf"))
