class demo {
    async name () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello')
            }, 3000);
        })
    }
}

const _demo = new demo();

(async () => {
    const name = await _demo.name()
    console.log(name)
})()