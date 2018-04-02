let p = Promise.resolve()

p = p.then(() => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello')
  }, 1000)
}))

p = p.then(val => {
  console.log(val)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('World')
    }, 1000)
  })
})

p = p.then(val => {
  console.log(val)
})

// Hello
// World