new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 1000);
})
    .then(value => {
        console.log(value)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('World')
            }, 1000);
        })
            .then(value => {
                console.log(value)
            })
    })
    .then(() => {
        console.log('end')
    })

// Hello
// World
// end

// 外层的then会等着内层的then
// 但是这样写是很蠢的

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 1000);
})
    .then(value => {
        console.log(value)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('World')
            }, 1000);
        })
    })
    .then(value => {
        console.log(value)
    })
    .then(() => {
        console.log('end')
    })

// 这样写的和上面的是一样的效果