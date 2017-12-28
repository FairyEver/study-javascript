const axios = require('axios')
const {baseUrl} = require('./_baseUrl')

const get = () => axios.get(baseUrl + '/base');

(async () => {
    let a = await get()
    console.log(a.data.data.name)
})();

(async () => {
    let a = await axios.get(baseUrl + '/base')
    console.log(a.data.data.name)
})()