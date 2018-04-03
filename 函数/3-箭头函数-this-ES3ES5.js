// ES3 ES5

var factory = function () {
  this.a = 'name1'
  this.b = {
    a: 'name2',
    b: function () {
      return this.a
    }
  }
}

console.log(new factory().b.b())
// name2