const {baseUrl} = require('./_baseUrl')
const axios = require('axios')

const timer = (time) => new Promise((resolve) => {
    setTimeout(resolve, time);
})

let data = async (path) => {
    await timer(3000)
    return axios.get(baseUrl + path)
}

(async () => {
    const paths = ['/base', '/base-2']

    console.time('axios')

    // 串行
    // for (let i = 0; i < paths.length; i++) {
    //     const _data = await data(paths[i])
    //     console.log(_data.data.data.name)
    // }

    // 并行
    const _data = await Promise.all(paths.map(e => data(e)))
    _data.forEach(e => {
        console.log(e.data.data.name)
    })


    console.timeEnd('axios')
})()