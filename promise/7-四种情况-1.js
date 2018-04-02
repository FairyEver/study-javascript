new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('step1 end')
    resolve('Hello')
  }, 1000)
})
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('step2 end')
        resolve('Hello')
      }, 1000)
    })
  })
  .then(() => {
    console.log('step3 end')
  })

// step1 end
// step2 end
// step3 end
  