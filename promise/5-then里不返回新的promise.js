console.log('start')

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 1000);
})
    .then(value => {
        console.log('step1', value);
        (() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('inner promise log')
                    resolve('inner promise')
                }, 3000);
            })
        })()
        return 'World'
    })
    .then(value => {
        console.log(value)
    })


// start
// step1 Hello
// World
// inner promise log