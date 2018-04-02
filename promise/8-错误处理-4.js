new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('bye')
  }, 1000)
})
  .then(val => {
    console.log('then1')
  })
  .catch(err => {
    console.log('catch')
  })
  .then(val => {
    console.log('then2')
  })

// catch
// then2