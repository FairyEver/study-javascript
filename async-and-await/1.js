const { baseUrl } = require('./_baseUrl')

const fetch = require('node-fetch')

async function demo () {
    const url = baseUrl + '/base'
    const res = await fetch(url)
    const resData = await res.json()
    console.log(`my name is ${resData.data.name}`)
    // my name is liyang
}

demo()