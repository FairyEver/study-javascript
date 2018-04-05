let arr1 = [[1], 2]

let arr2 = [[3, 4, 5]]

let arr3 = arr1.concat(arr2)

arr3.forEach(e => {
  console.log(e)
})

// [1]
// 2
// [3, 4, 5]

arr1[0].push(6)

arr3.forEach(e => {
  console.log(e)
})

// [1, 6]
// 2
// [3, 4, 5]