// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const arr = [[1, 2], [3, 4], [5, 6, 7]]

const res = arr.reduce((val1, val2) => val1.concat(val2), [])

console.log(res)

// [1, 2, 3, 4, 5, 6, 7]