const demo = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Hello')
    }, 3000);
});

(async () => {
    console.log('start')
    console.log(await demo)
})()