[0, 1, 2, 3, 4, 5, 6].reduce((pro, num) => pro.then(() => new Promise((resolve, reject) => {
  console.log(num)
  setTimeout(resolve, 3000)
})), Promise.resolve())


