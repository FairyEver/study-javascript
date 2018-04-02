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

Promise.all([pro1, pro2, pro3])
  .then(arr => {
    console.log(arr)
  })

  // [1, 2, 3]