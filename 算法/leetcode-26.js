var removeDuplicates = function(nums) {
  return nums.reduce((all, ele, index) => {
    if (all.indexOf(ele) < 0) {
      all.push(ele)
      nums[all.length - 1] = ele
    }
    return all
  }, []).length
}

let arr = [1, 1, 2]
console.log(removeDuplicates(arr))
console.log(arr)