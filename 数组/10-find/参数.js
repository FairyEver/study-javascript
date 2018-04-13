const users = [
  {name: 'name1', age: 20},
  {name: 'name2', age: 21},
  {name: 'name3', age: 22},
  {name: 'name4', age: 23},
  {name: 'name5', age: 24},
  {name: 'name6', age: 25},
  {name: 'name7', age: 26}
]

console.log(users.find((e, index, arr) => {
  console.log(e)
  console.log(index)
  console.log(arr)
  return false
}))