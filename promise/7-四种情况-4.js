const fn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fn value')
    }, 1000)
  })
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('step1 end')
    resolve('Hello1')
  }, 1000)
})
  .then(fn)
  .then((val) => {
    console.log(val)
    console.log('step3 end')
  })

// step1 end
// fn value
// step3 end
  