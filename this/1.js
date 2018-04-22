const name = 'outter name'
const obj = {
  name: 'obj name',
  sayName () {
    console.log(this.name)
  },
  sayName2: function () {
    console.log(this.name)
  },
  sayName3: () => {
    console.log(this.name)
  }
}

obj.sayName() // obj name

obj.sayName2() // obj name

obj.sayName3() // undefined