// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数
// 将其减少为单个值

const arr = [1, 2, 3, 4]

const res = arr.reduce((accumulator, currentValue, currentIndex) => {
  console.log('currentIndex', currentIndex)
  return accumulator + currentValue
})

console.log(res) // 10

// currentIndex 是从 1 开始的

// currentIndex 1
// currentIndex 2
// currentIndex 3
// 10