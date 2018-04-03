{
  const fn = () => '1'
  console.log('fn() === 1', fn() === '1')
  // fn() === 1 true
  {
    const fn = () => '2'
    console.log('fn() === 2', fn() === '2')
    // fn() === 2 true
  }
  console.log('fn() === 1', fn() === '1')
  // fn() === 1 true
}