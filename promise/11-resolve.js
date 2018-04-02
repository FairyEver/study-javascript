let p = Promise.resolve()

p
  .then(() => {
    console.log('step1')
    return Promise.resolve('step1 return value')
  })
  .then(value => {
    console.log('step1 return is : ', value)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('step2 return value')
      }, 2000)
    })
  })
  .then(value => {
    console.log('step2 return is : ', value)
    return {
      then () {
        console.log('thenable')
      }
    }
  })

// step1
// step1 return is :  step1 return value
// step2 return is :  step2 return value
// thenable
  