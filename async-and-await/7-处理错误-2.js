const pro = (value) => new Promise((resolve, reject) => {
    if (value === 1) {
        resolve('输入正确')
    } else {
        reject('输入错误')
    }
});

// (async () => {
//     try {
//         console.log('ok')
//         const a = await pro(2)
//         console.log(a)
//     } catch (error) {
//         console.log('error')
//         console.log(error)
//     }
// })()

console.log('----------')

pro(2)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})