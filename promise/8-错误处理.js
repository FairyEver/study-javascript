new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error('bye')
  }, 1000)
})
  .then(val => {
    console.log('then')
  })
  .catch(err => {
    console.log('catch')
  })
