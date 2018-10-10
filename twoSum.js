// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
  let numsHash = {};
  for (let i = 0; i <= nums.length; i++) {
    numsHash[nums[i]] = i;
  }
  for (let i = 0; i <= nums.length; i++) {
    let complement = target - nums[i];
    if (
      numsHash.hasOwnProperty(complement.toString()) &&
      numsHash[complement.toString()] !== i
    ) {
      return [i, numsHash[complement.toString()]];
    }
  }
};
