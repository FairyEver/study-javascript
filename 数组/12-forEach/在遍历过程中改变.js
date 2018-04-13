// forEach 遍历的范围在第一次调用 callback 前就会确定
// 调用forEach 后添加到数组中的项不会被 callback 访问到
// 如果已经存在的值被改变，则传递给 callback 的值是 forEach 遍历到他们那一刻的值
// 已删除的项不会被遍历到
// 如果已访问的元素在迭代时被删除了(例如使用 shift()) ，之后的元素将被跳过

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr.forEach((e, index) => {
  if (index === 1) {
    arr[3] = 10
  }
  console.log(e)
})

// 1
// 2
// 3
// 10
// 5
// 6
// 7
// 8
