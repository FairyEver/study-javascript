new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('bye')
  }, 1000)
})
  .then(val => {
    console.log('then1')
  })
  .catch(err => {
    console.log('catch1')
    throw new Error('errerr')
  })
  .then(val => {
    console.log('then2')
  })
  .catch(err => {
    console.log('catch2')
  })

// catch1
// catch2