/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.
 */

const addBinary = (a, b) => {
    const n = a.length > b.length ? a.length : b.length
    if (a.length < n) {
        a = '0'.repeat(n - a.length) + a
    }
    if (b.length < n) {
        b = '0'.repeat(n - b.length) + b
    }

    let s = ''
    let acc = 0

    for (let i = n - 1; i >= 0; i--) {
        let r = acc
        if (a[i] === '1') {
            r += 1
        } else {
            r += 0
        }

        if (b[i] === '1') {
            r += 1
        } else {
            r += 0
        }

        if (r % 2 === 0) {
            s = '0' + s
        } else {
            s = '1' + s
        }

        if (r > 1) {
            acc = 1
        } else {
            acc = 0
        }
    }

    if (acc !== 0) {
        s = '1' + s
    }

    return s
}

const main = () => {
    console.log(addBinary('11', '1'))
    console.log(addBinary('1010', '1011'))
}

main()