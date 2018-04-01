console.log('start')

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 1000);
})
    .then(value => {
        console.log('step1', value);
        // 注意这里没有返回
        (() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('inner promise log')
                    resolve('inner promise')
                }, 3000);
            })
        })()
        // 这是真正返回的
        return 'World'
    })
    .then(value => {
        console.log(value)
    })


// start
// step1 Hello
// World
// inner promise log