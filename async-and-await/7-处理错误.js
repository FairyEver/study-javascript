const pro = (value) => {
    return new Promise((resolve, reject) => {
        if (value === 1) {
            return resolve('输入正确')
        } else {
            return reject(new Error('输入错误'))
        }
    })
}

(async () => {
    const a = await pro(1)
    console.log(a)
})()