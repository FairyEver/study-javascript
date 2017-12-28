const { baseUrl } = require('./_baseUrl')
const fetch = require('node-fetch')
const demo = async () => {
    const url = baseUrl + '/base'
    const res = await fetch(url)
    const resData = await res.json()
    return resData.data.name
}

demo()
.then(name => {
    console.log(name)
}); // 注意 一定要有分号

(async () => {
    const name = await demo()
    console.log(name)
})()