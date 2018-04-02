let p = Promise.resolve()

const names = ['name1', 'name2', 'name3']

names.reduce((pro, name) => {
  return pro.then(() => {
    return new Promise((resolve, reject) => {
      console.log(name)
      setTimeout(resolve, 1000);
    })
  })
}, Promise.resolve())

console.log('reduce end')

// reduce end
// name1
// name2
// name3