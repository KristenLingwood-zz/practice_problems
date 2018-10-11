/* Sliding Window -- minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters: an array of positive integers and a positive integer.
The function should return the minimum length of a CONTIGUOUS subarray of which the sum is greater than or equal to the integer. If there isn't one, return 0. 
time: O(n)
space: O(1)
*/

function minSubArrayLen(arr, target) {
  let subLength = Infinity;
  let i = 0;
  let j = 0;
  let subTotal = 0;

  while (i < arr.length) {
    // if the subtotal is still less than target, move j pointer forward one
    if (subTotal < target && j < arr.length) {
      subTotal += arr[j];
      j++;
      // if the subtotal is greater/equal to target, keep track of the minLength, subtract the val of arr[i], and move the i pointer forward one
    } else if (subTotal >= target) {
      subLength = Math.min(subLength, j - i);
      subTotal -= arr[i];
      i++;
    } else {
      break;
    }
  }
  return subLength === Infinity ? 0 : subLength;
}
