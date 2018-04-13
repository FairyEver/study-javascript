// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from

const fn = (...arg) => {
  console.log(typeof arg)
  return Array.from(arg)
}

console.log(fn(1, 2, 3))

// [1, 2, 3]