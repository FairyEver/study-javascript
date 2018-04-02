const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})
const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
})
const pro3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})

Promise.race([pro1, pro2, pro3])
  .then(data => {
    console.log(data)
  })

// 1