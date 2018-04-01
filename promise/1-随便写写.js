
console.log('start')

new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('pro')
  }, 1000)
})
    .then((val) => {
        console.log('Hello', val)
        return val
    })
    .then((val) => {
        console.log('World', val)
    })