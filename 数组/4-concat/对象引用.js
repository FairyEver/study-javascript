// 对象引用（而不是实际对象）：concat将对象引用复制到新数组中。
// 原始数组和新数组都引用相同的对象。
// 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。
// 这包括也是数组的数组参数的元素。

let obj1 = {
  name: 'liyang'
}

let arr1 = [obj1, 'Hello']

let arr2 = ['World']

let arr3 = arr1.concat(arr2)

console.log(arr1)
console.log(arr2)
console.log(arr3)

// Array(2) [Object, "Hello"]
// Array(1) ["World"]
// Array(3) [Object, "Hello", "World"]

obj1.name = 'ban'

console.log(arr1[0].name) // ban

console.log(arr3[0].name) // ban

// 所以如果是对象引用 新的数组里还是引用