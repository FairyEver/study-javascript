// every() 方法测试数组的所有元素是否都通过了指定函数的测试

console.log([0, 1, 2, 3, 4, 5].every(e => e > 0))
// false

console.log([0, 1, 2, 3, 4, 5].every(e => e < 6))
// true

const arr = ['a', 'b', 'c', 'd']

console.log(arr.every((e, index, arr) => {
  console.log(e)
  console.log(index)
  console.log(arr)
  return true
}))
