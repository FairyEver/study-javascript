let p = Promise.reject('err')

p
  .then(() => {
    console.log('ok')
  })
  .catch(() => {
    console.log('not')
    return Promise.reject({
      then () {
        // 不会执行
        console.log('inner then')
      }
    })
  })