// entries() 方法返回一个新的Array Iterator对象
// 该对象包含数组中每个索引的键/值对

const arr = ['a', 'b', 'c', 'd', 'e']

// 返回迭代器
var iterator = arr.entries()

console.log(iterator)

console.log(iterator.next().value) // [0, "a"]
console.log(iterator.next().value) // [1, "b"]
console.log(iterator.next().value) // [2, "c"]
console.log(iterator.next().value) // [3, "d"]
console.log(iterator.next().value) // [4, "e"]
console.log(iterator.next().value) // undefined