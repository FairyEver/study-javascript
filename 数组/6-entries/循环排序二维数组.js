// entries() 方法返回一个新的Array Iterator对象
// 该对象包含数组中每个索引的键/值对

const arr = [[1,34],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]]

function sortArr(arr) {
  const _arr = arr.entries()
  let done = false
  while (!done) {
    let item = _arr.next()
    if (item.done === true) {
      done = true
    } else {
      item.value[1].sort((a, b) => a - b)
    }
  }
  return arr
}

const _arr = sortArr(arr)

_arr.forEach(e => {
  console.log(e)
})

// Array(2) [1, 34]
// Array(5) [2, 3, 44, 234, 456]
// Array(5) [1, 4, 5, 6, 4567]
// Array(4) [1, 23, 34, 78]