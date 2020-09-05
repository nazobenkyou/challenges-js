/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
 */

const replaceElements = (arr) => {
    let t = arr[arr.length - 1]
    arr[arr.length - 1] = -1
    for (let i = arr.length - 2; i >= 0; i--) {
        let t2 = arr[i]
        arr[i] = t
        if (t < t2) {
            t = t2
        }
    }

    return arr
}

const main = () => {
    console.log(replaceElements([17,18,5,4,6,1]))
}

main()