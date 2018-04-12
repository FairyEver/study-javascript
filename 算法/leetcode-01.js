var twoSum = function(nums, target) {
  var arr = {};
  for (var i = 0; i < nums.length; i++) {
    if (typeof(arr[nums[i]]) !== "undefined"){
      return [arr[nums[i]], i];
    }
    arr[target - nums[i]] = i;
  }
}

console.log(twoSum([1, 2, 3, 4, 5], 7))