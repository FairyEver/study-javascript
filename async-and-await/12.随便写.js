const getData = async (time = 1000) => new Promise((resolve, reject) => {
    // 模拟异步操作
    setTimeout(() => {
        // 这里进行任何的异步操作
        resolve({
            name: 'me'
        })
    }, time)
})

const demo = async () => {
    console.log(await getData())
}

demo() // Object {name: "me"}