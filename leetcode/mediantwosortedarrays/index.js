/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

const findMedianSortedArrays = (nums1, nums2) => {
  const m = nums1.concat(nums2).sort((a, b) => a - b)
  const l = m.length

  return l % 2 === 0 ? (m[Math.floor(m.length / 2) - 1] + m[Math.ceil(m.length / 2)]) / 2 : m[Math.floor(m.length / 2)]
}

const test1 = () => {
  const n1 = [1, 3]
  const n2 = [2]

  return findMedianSortedArrays(n1, n2)
}

const test2 = () => {
  const n1 = [1, 3]
  const n2 = [2]

  return findMedianSortedArrays(n2, n1)
}

const test3 = () => {
  const nums1 = [1, 2]
  const nums2 = [3, 4]
  return findMedianSortedArrays(nums1, nums2)
}

const main = () => {
  console.log(test1())
  console.log(test2())
  console.log(test3())
}

main()
