(() => {
  var fn = () => {
    return '1'
  }
  console.log('fn() === 1', fn() === '1')
  // fn() === 1 true
  ;(() => {
    var fn = () => {
      return '2'
    }
    console.log('fn() === 2', fn() === '2')
    // fn() === 2 true
  })()
})()