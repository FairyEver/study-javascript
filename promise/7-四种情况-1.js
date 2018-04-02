new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('step1 end')
    resolve('Hello1')
  }, 1000)
})
  .then((val) => {
    console.log(val)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('step2 end')
        resolve('Hello2')
      }, 1000)
    })
  })
  .then((val) => {
    console.log(val)
    console.log('step3 end')
  })

// step1 end
// Hello1
// step2 end
// Hello2
// step3 end