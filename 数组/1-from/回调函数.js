// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from

console.log(Array.from([1, 2, 3], val => val * 2))

// [2, 4, 6]

console.log(Array.from({length: 5}, (e, index) => index))

// [0, 1, 2, 3, 4]