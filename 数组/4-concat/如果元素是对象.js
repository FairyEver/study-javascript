let arr1 = [
  {
    name: 'liyang'
  },
  'Hello'
]

let arr2 = ['World']

let arr3 = arr1.concat(arr2)

console.log(arr3) // [Object, "Hello", "World"]

console.log(arr3[0].name) // liyang

// 现在改变 arr1 里的对象

arr1[0].name = 'ban'

console.log(arr3[0].name) // ban

// 改变了原始数组里的对象 新的数组里的对象也改变了 浅拷贝