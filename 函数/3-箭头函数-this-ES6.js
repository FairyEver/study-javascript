// ES6

var factory = function () {
  this.a = 'name1'
  this.b = {
    a: 'name2',
    b: () => {
      return this.a
    },
    c () {
      return this.a
    }
  }
}

console.log(new factory().b.b())
// name1
console.log(new factory().b.c())
// name2