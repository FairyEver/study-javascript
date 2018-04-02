const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Hello'
    })
  }, 2000)
})

const timer = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('定时器已经触发了')
  }, 1000)
})


Promise.race([getData, timer])
  .then(data => {
    console.log(data)
  })

// 定时器已经触发了