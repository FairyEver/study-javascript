const sleep = async (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const pro1 = new Promise(async (resolve, reject) => {
  await sleep(1000)
  resolve(1)
})
const pro2 = new Promise(async (resolve, reject) => {
  await sleep(2000)
  reject(1)
})
const pro3 = new Promise(async (resolve, reject) => {
  await sleep(3000)
  reject(1)
})
const pro4 = new Promise(async (resolve, reject) => {
  await sleep(4000)
  reject(1)
})

Promise.all([pro1, pro2, pro3, pro4])
  .then(arr => {
    console.log(arr)
  })
  .catch(err => {
    console.log(err)
  })