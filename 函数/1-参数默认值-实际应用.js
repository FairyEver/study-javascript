function miss() {
    throw new Error('你漏了参数')
}

function demo(a = miss()) {
    console.log(a)
}

demo()
