const waitMe = async (time = 1000) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // 这里也可以是任何的异步操作
        resolve()
    }, time)
});

(async () => {
    console.log('开始了')
    await waitMe(3000)
    // 3秒后继续执行
    console.log('已经三秒过去了')
})();