const {baseUrl} = require('./_baseUrl')
const axios = require('axios')

let data = (path) => axios.get(baseUrl + path);

(async () => {
    let _data1 = await data('/base')
    console.log(_data1.data.data.name) // liyang
    let _data2 = await data('/base-2')
    console.log(_data2.data.data.name) // FairyEver
})()