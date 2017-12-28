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
    console.time('计时')

    const [
        _data1,
        _data2
    ] = await Promise.all([
        data('/base'),
        data('/base-2')
    ])

    console.log(_data1.data.data.name)
    console.log(_data2.data.data.name)

    console.timeEnd('计时')
})()