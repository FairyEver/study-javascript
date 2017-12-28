const {baseUrl} = require('./_baseUrl')
const axios = require('axios')

let data = (path) => axios.get(baseUrl + path);

(async () => {
    const _data1Promise = data('/base')
    const _data2Promise = data('/base-2')
    const _data1 = await _data1Promise
    const _data2 = await _data2Promise
    console.log(_data1.data.data.name)
    console.log(_data2.data.data.name)
})()