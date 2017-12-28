const { baseUrl } = require('./_baseUrl')

const fetch = require('node-fetch')

async function demo () {
    const url = baseUrl + '/base'
    const res = await fetch(url)
    const resData = await res.json()
    return resData.data.name
}

demo()
.then(name => {
    console.log(name)
    // liyang
})