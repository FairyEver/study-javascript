/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 排序
  const strsSort = strs.sort((a, b) => a.length - b.length)
  let pub = []
  const first = strsSort[0]
  if (!first) {
    return ''
  }
  for (let i = 0; i < first.length; i++) {
    const letter = first.charAt(i)
    let ok = true
    for (let a = 0; a < strsSort.length; a++) {
      if (strsSort[a].charAt(i) !== letter) {
        ok = false
      }
    }
    if (ok) {
      pub.push(letter)
    } else {
      break
    }
  }
  return pub.join('')
};

console.log(longestCommonPrefix(["aca","cba"]))