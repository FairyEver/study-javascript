new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('step1 end')
    resolve('Hello1')
  }, 1000)
})
  .then(new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('step2 end')
      resolve('Hello2')
    }, 2000)
  }))
  .then((val) => {
    console.log(val)
    console.log('step3 end')
  })

// step1 end
// Hello1
// step3 end
// step2 end