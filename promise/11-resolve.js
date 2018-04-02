let p = Promise.resolve()

p
  .then(() => {
    console.log('step1')
    return Promise.resolve('step1 return value')
  })
  .then(value => {
    console.log('step1 return is : ', value)
  })