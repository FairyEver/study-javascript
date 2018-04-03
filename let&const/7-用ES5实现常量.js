Object.defineProperty(global, 'name', {
  value: 'ly',
  writable: false
})

console.log(name)
// ly

name = 'ban'

console.log(name)
// ly