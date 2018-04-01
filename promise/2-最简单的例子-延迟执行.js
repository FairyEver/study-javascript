console.log('start')

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 3000)
})
    .then(value => {
        console.log(value, 'World')
    })