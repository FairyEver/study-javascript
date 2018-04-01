console.log('start')

let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 1000);
})

setTimeout(() => {
    pro
        .then(value => {
            console.log(value)
        })
}, 3000)

// start
// Hello

// 在任何地方生成一个promise后，可以将这个promise在其它地方再使用，实现队列