https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数
// 将其减少为单个值

const arr = [1, 2, 3, 4]

const res = arr.reduce((from, to) => from + to)

console.log(res)

// 上面的例子实现了数组的累加

console.log(arr)

// [1, 2, 3, 4]