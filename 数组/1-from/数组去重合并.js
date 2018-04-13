// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from

const arr1 = [1, 2, 4, 5, 6]
const arr2 = [2, 3, 4, 4, 7]

const combine = (...arr) => Array.from(new Set([].concat(...arr)))

console.log(combine(arr1, arr2))

// [1, 2, 4, 5, 6, 3, 7]