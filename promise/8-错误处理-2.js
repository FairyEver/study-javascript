new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('bye')
  }, 1000)
})
  .then(val => {
    console.log('then')
  })
  .catch(err => {
    console.log('catch')
  })
