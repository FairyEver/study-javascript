// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const res = names.reduce((all, name) => {
  if (name in all) {
    all[name] ++
  } else {
    all[name] = 1
  }
  return all
}, {})

console.log(res)

// {
//   Alice: 2,
//   Bob: 1,
//   Tiff: 1,
//   Bruce: 1
// }