const names = ['name1', 'name2', 'name3']

Promise.all(names.map(e => {
  return new Promise((resolve, reject) => {
    resolve(e)
  })
}))
  .then(arr => {
    console.log(arr)
  })

  // ["name1", "name2", "name3"]