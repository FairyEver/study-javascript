// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。

let arr = Array(3).fill({name: 'l'})

arr.forEach(e => {
  console.log(e)
})

// Object {name: "l"}
// Object {name: "l"}
// Object {name: "l"}

arr[0].name = 'ban'

arr.forEach(e => {
  console.log(e)
})

// Object {name: "ban"}
// Object {name: "ban"}
// Object {name: "ban"}