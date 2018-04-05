// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 实现数组去重

const arr = [2, 1, 3, 2, 4, 5, 6, 3, 1, 4, 1]

console.log(arr.sort().reduce((all, cur) => {
  if (all.length === 0 || all[all.length - 1] !== cur) {
    all.push(cur)
  }
  return all
}, []))

// [1, 2, 3, 4, 5, 6]