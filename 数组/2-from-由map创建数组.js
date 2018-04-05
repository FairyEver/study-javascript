// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from

const a = new Map([[1, 2], [3, 4], [5, 6]])

console.log(a)

console.log(Array.from(a))

// Array(3) [Array(2), Array(2), Array(2)]