/*
Given an array nums of integers, return how many of them contain an even number of digits.
 */

const findNumbers = (nums) => {
    return nums.filter(n => n.toString().split('').length % 2 === 0).length
}

const main = () => {
    console.log(findNumbers([12,345,2,6,7896]))
    console.log(findNumbers([555,901,482,1771]))
}

main()