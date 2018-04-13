console.log([0, 1, 2, 3, 4, 5].findIndex(e => e > 2))
// 3

const users = [
  {name: 'name1', age: 20},
  {name: 'name2', age: 21},
  {name: 'name3', age: 22},
  {name: 'name4', age: 23},
  {name: 'name5', age: 24},
  {name: 'name6', age: 25},
  {name: 'name7', age: 26}
]

console.log(users.findIndex(e => e.age > 22))

// 3
