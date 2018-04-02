let p = Promise.resolve()

const names = ['name1', 'name2', 'name3']

names.forEach(e => {
  p = p.then((value) => {
    return new Promise((resolve, reject) => {
      console.log(e)
      setTimeout(resolve, 1000)
    })
  })
})

// name1
// name2
// name3