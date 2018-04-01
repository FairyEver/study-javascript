new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 1000);
})
    .then(value => {
        console.log('step1', value)
        // 注意这里需要返回一个Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('World')
            }, 1000)
        })
    })
    .then(value => {
        console.log('step2', value)
    })