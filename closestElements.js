/* Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

Example 1:
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
Example 2:
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
Note:
The value k is positive and will always be smaller than the length of the sorted array.
Length of the given array is positive and will not exceed 104
Absolute value of elements in the array and x will not exceed 104
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// if X is not in array, you're supposed to find the idx where X would be (sorted array) and return the k closest elements to that index
var findClosestElements = function(arr, k, x) {
  let xIdx = arr.indexOf(x);
  if (x < arr[0]) return arr.slice(0, k);
  if (xIdx === -1) {
    //find index of where X would be in sorted array
    xIdx = findXidx(arr, x);
    console.log(xIdx);
  }
  if (xIdx - k <= 0) {
    return arr.slice(0, k);
  }
  return arr.slice(xIdx - k, xIdx);
};

function findXidx(arr, x) {
  let start = 0;
  let end = Math.floor(arr.length / 2);
  while (start < end) {
    if (arr[end] < x) {
      start = end;
      end = arr.length - 1;
    } else {
      end = Math.floor(end - start / 2);
    }
  }
  return start + 1;
}
