(async () => {
    // const a = await 100
    // 等价
    const a = await Promise.resolve(100)
    console.log(a)
})()