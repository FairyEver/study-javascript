const demo = (arr1, arr2) => {
  const _arr2 = arr2.sort((a, b) => a - b).reverse()
  return arr1.sort((a, b) => a - b).reduce((sum, e, i) => sum + e * _arr2[i], 0)
}

console.log(demo([2, 1, 3], [3, 1, 2]))