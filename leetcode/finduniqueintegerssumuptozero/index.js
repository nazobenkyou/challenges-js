/*
Given an integer n, return any array containing n unique integers such that they add up to 0.
 */

const sumZero = (n) => {
    const arr = []
    let r
    if (n === 1) {
        arr.push(0)
    }
    for (let i = 0; i < n - 1; i++) {
        if (i % 2 === 0) {
            r = Math.floor(Math.random() * 11)
            arr.push(r)
        } else {
            arr.push(-1 * r)
        }
    }

    const t = arr.reduce((pv, cv) => pv + cv, 0)
    if (t !== 0) {
        arr[arr.length - 1] = 0
    }

    return arr
}

const main = () => {
    console.log(sumZero(5))
    console.log(sumZero(3))
    console.log(sumZero(1))
}

main()