const timer = (time = 3000) => new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve()
    }, time);
})

console.log('开始')
timer(10000)
.then(() => {
    console.log('10秒之后了')
})
