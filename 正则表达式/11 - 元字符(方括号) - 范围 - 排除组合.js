const text = '123是hjkg你1h3gh123j，k2,1h__3jk++13123'

console.log(text.match(/[^0-9a-z]+/g)) // Array(6) ["是", "你", "，", ",", "__", "++"]