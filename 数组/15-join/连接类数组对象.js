function demo () {
  // console.log(arguments.join()) // 不可以这样
  console.log(Array.prototype.join.call(arguments))
}

demo(1, 2, 3, 4)

// 1,2,3,4