// entries() 方法返回一个新的Array Iterator对象
// 该对象包含数组中每个索引的键/值对

const arr = ['a', 'b', 'c', 'd', 'e']

const _arr = arr.entries()

for (const item of _arr) {
  console.log(item)
}

// Array(2) [0, "a"]
// Array(2) [1, "b"]
// Array(2) [2, "c"]
// Array(2) [3, "d"]
// Array(2) [4, "e"]