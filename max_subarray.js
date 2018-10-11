// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */

// only need to keep track of the max sum, so as i increases, if the max sum is bigger we change it to sum + nums[i], otherwise we reset the sum to the current element nums[i]
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

// Variation: Allow function to accept a specified length of subarray (above function assumes length of 1)

function maxSubarraySum(arr, target) {
  if (target > arr.length) return null;
  let maxSum = 0;

  // find initial sum from idx 0 to idx target-1
  for (let i = 0; i < target; i++) {
    maxSum += arr[i];
  }
  let currentTotal = maxSum;
  // find new subarray sums by adding the next idx, subtracting the first. Then compare to maxSum and keep track of the higher val.
  for (let i = target; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - target];
    maxSum = Math.max(maxSum, currentTotal);
  }
  return maxSum;
}
