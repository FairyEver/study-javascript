/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 上一个出现的数字
    var last = null
    // 现在这个数字出现的次数
    var n = 0
    return nums.filter(function (e, index) {
        // 如果是第一个元素
        if (index === 0) {
            n = 1
        } else {
            if (e === last) {
                n ++
            } else {
                n = 1
            }
        }
        last = e
        return n < 2
    })
};

console.log(removeDuplicates([1, 1, 2]))